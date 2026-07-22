import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 right-4 z-50 w-11 h-11 rounded-full bg-purple-600 text-white shadow-lg flex items-center justify-center hover:bg-purple-700 active:scale-95 transition-all"
      aria-label="返回頂部"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}