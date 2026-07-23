import React, { useState, useRef } from 'react';
import { Loader2, RefreshCw } from 'lucide-react';

const THRESHOLD = 70;

export default function PullToRefresh({ onRefresh, children }) {
  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef(null);
  const pulling = useRef(false);

  const onTouchStart = (e) => {
    if (refreshing) return;
    if (window.scrollY > 0) return;
    startY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    if (startY.current === null || refreshing) return;
    const delta = e.touches[0].clientY - startY.current;
    if (delta > 0 && window.scrollY === 0) {
      pulling.current = true;
      setPull(Math.min(delta * 0.5, 100));
    }
  };

  const onTouchEnd = async () => {
    if (pulling.current && pull >= THRESHOLD && !refreshing) {
      setRefreshing(true);
      setPull(THRESHOLD);
      try {
        await onRefresh?.();
      } finally {
        setRefreshing(false);
        setPull(0);
      }
    } else {
      setPull(0);
    }
    pulling.current = false;
    startY.current = null;
  };

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div
        style={{ height: pull, opacity: pull / THRESHOLD }}
        className="flex items-center justify-center overflow-hidden"
      >
        {refreshing ? (
          <Loader2 className="w-6 h-6 text-purple-500 animate-spin" />
        ) : (
          <RefreshCw className="w-6 h-6 text-purple-500" />
        )}
      </div>
      {children}
    </div>
  );
}