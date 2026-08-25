// Traditional ⇄ Simplified Chinese conversion (automatic, with manual overrides)
// The app's source content is authored in Traditional Chinese. The converter
// transforms whatever text is currently displayed into the active language.
// Both directions are idempotent (t2s on already-simplified text is a no-op,
// s2t on already-traditional text is a no-op), so it is safe to run repeatedly
// on every render/mutation without storing originals.

import * as OpenCCNS from 'opencc-js';

const OpenCC = OpenCCNS.Converter ? OpenCCNS : (OpenCCNS.default || OpenCCNS);

let t2s = null;
let s2t = null;
try {
  t2s = OpenCC.Converter({ from: 'tw', to: 'cn' });
  s2t = OpenCC.Converter({ from: 'cn', to: 'tw' });
} catch (e) {
  t2s = null;
  s2t = null;
}

// Manual overrides for known terms that character-level conversion alone gets
// wrong. Each pair is [TraditionalTerm, SimplifiedCNterm]. Both directions use
// a sorted copy (longest key first) so a shorter term never pre-empts a longer
// phrase that contains it (e.g. 應用程式 before 程式, 应用程序 before 程序).
const T2S_PAIRS = [
  ['資訊', '信息'],
  ['軟體', '软件'],
  ['程式', '程序'],
  ['預設', '默认'],
  ['影片', '视频'],
  ['網路', '网络'],
  ['記憶體', '内存'],
  ['螢幕', '屏幕'],
  ['滑鼠', '鼠标'],
  ['使用者', '用户'],
  ['應用程式', '应用程序'],
  ['硬碟', '硬盘'],
  ['光碟', '光盘'],
  ['儲存', '存储'],
  ['伺服器', '服务器'],
  ['畫面', '画面'],
  ['連結', '链接'],
  ['視窗', '窗口'],
  ['檔案', '档案'],
  ['資料', '资料'],
];

const byLenDesc = (a, b) => b[0].length - a[0].length;
const T2S_OVERRIDES = [...T2S_PAIRS].sort(byLenDesc);
const S2T_OVERRIDES = T2S_PAIRS.map(([tw, cn]) => [cn, tw]).sort(byLenDesc);

const applyOverrides = (text, pairs) => {
  let s = text;
  for (const [from, to] of pairs) {
    if (s.indexOf(from) !== -1) s = s.split(from).join(to);
  }
  return s;
};

export function toSimplified(text) {
  if (!text || !text.trim()) return text;
  const s = applyOverrides(text, T2S_OVERRIDES);
  return t2s ? t2s(s) : s;
}

export function toTraditional(text) {
  if (!text || !text.trim()) return text;
  const s = applyOverrides(text, S2T_OVERRIDES);
  return s2t ? s2t(s) : s;
}

export function convertForLang(text, lang) {
  if (lang === 'zh_TW') return toTraditional(text);
  return toSimplified(text);
}