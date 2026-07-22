import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Loader2, X, MapPin } from 'lucide-react';
import MapView from '@/components/map/MapView';
import ScheduleList from '@/components/map/ScheduleList';
import LocationDirectory from '@/components/map/LocationDirectory';

const categories = ['全部', '景點', '美食', '購物', '文化', '交通', '戶外'];

const legend = {
  景點: '#ef4444',
  美食: '#f59e0b',
  購物: '#8b5cf6',
  文化: '#3b82f6',
  交通: '#10b981',
  戶外: '#14b8a6',
};

export default function InteractiveMap() {
  const [locations, setLocations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [locs, acts] = await Promise.all([
          base44.entities.MapLocation.list('-created_date', 100),
          base44.entities.ScheduleActivity.list('-created_date', 50),
        ]);
        setLocations(locs);
        setActivities(acts);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    loadData();
  }, []);

  const filteredLocations =
    activeCategory === '全部' ? locations : locations.filter((l) => l.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-gradient-to-r from-rose-700 via-pink-700 to-purple-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-rose-200 font-medium mb-4 block">互動地圖</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Interactive Map</h1>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              65個打卡地點 · 點擊標記查看活動詳情及報名
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-rose-500 animate-spin" />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-rose-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-rose-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative z-0 rounded-2xl overflow-hidden shadow-lg mb-4">
              <MapView
                locations={filteredLocations}
                activities={activities}
                onMarkerClick={(loc) => {
                  setSelectedLocation(loc);
                  setTimeout(
                    () => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' }),
                    200
                  );
                }}
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400">
              {Object.entries(legend).map(([cat, color]) => (
                <span key={cat} className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  {cat}
                </span>
              ))}
            </div>

            <LocationDirectory
              locations={filteredLocations}
              onSelect={(location) => {
                setSelectedLocation(location);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <div id="schedule">
              {selectedLocation && (
                <div className="mb-6 bg-rose-50 dark:bg-rose-900/20 rounded-xl p-4 flex items-center justify-between">
                  <p className="text-rose-700 dark:text-rose-300 text-sm">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    篩選地點：<strong>{selectedLocation.name}</strong>
                    <span className="text-rose-400 ml-2">（下方僅顯示此地點的活動）</span>
                  </p>
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="text-rose-500 hover:text-rose-700 dark:hover:text-rose-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              <ScheduleList activities={activities} selectedLocation={selectedLocation} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}