import React, { useLayoutEffect } from 'react';
import { convertForLang } from '@/lib/chineseConverter';

// Headless component: converts all rendered text on the page to the active
// language (Traditional ⇄ Simplified) without modifying any component source.
//
// Strategy: convert whatever text is *currently displayed* into the target
// language. Both directions are idempotent, so this is safe to run on every
// render and every DOM mutation (a MutationObserver keeps up with React
// re-renders and async data) without storing originals or fighting React.
export default function TextConverter({ lang }) {
  useLayoutEffect(() => {
    if (typeof document === 'undefined') return;
    const convert = (t) => convertForLang(t, lang);

    const isSkippableParent = (parent) => {
      if (!parent) return true;
      const tag = parent.nodeName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' ||
          tag === 'INPUT' || tag === 'NOSCRIPT' || tag === 'CODE') return true;
      // Don't touch rich-text editors (e.g. Quill) — mutating them breaks editing
      if (parent.closest && parent.closest('[contenteditable="true"]')) return true;
      return false;
    };

    const handleNode = (node) => {
      if (!node || node.nodeType !== Node.TEXT_NODE) return;
      if (isSkippableParent(node.parentNode)) return;
      const val = node.nodeValue;
      if (!val || !val.trim()) return;
      const target = convert(val);
      if (target !== val) node.nodeValue = target; // idempotent: no loop
    };

    const walk = (el) => {
      const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      while (w.nextNode()) handleNode(w.currentNode);
    };

    walk(document.body);

    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === 'characterData') {
          handleNode(m.target);
        } else if (m.type === 'childList') {
          m.addedNodes.forEach((n) => {
            if (n.nodeType === Node.TEXT_NODE) handleNode(n);
            else if (n.nodeType === Node.ELEMENT_NODE) walk(n);
          });
        }
      }
    });
    mo.observe(document.body, { subtree: true, childList: true, characterData: true });

    return () => mo.disconnect();
  }, [lang]);

  return null;
}