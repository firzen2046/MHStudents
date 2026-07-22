import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationDirectory({ locations, onSelect }) {
  return (
    <section className="mb-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">打卡地點清單</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">已列出 {locations.length} 個地點；點擊項目可定位地圖</p>
        </div>
        <span className="hidden sm:inline-flex text-sm font-semibold text-rose-600 dark:text-rose-400">{locations.length} 個地點</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {locations.map((location, index) => (
          <button
            key={location.id}
            onClick={() => onSelect(location)}
            className="text-left bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4 hover:border-rose-300 dark:hover:border-rose-700 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center justify-center flex-shrink-0">{index + 1}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white truncate">{location.name}</h3>
                  <Navigation className="w-4 h-4 text-rose-400 flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{location.description || '香港精選打卡地點'}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {location.district} · {location.category}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}