import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeIp0yz1Fkl914W4atjPILG79NdtQMe1BGrBU8-xn0nc5MFGA/viewform?usp=sharing';

const categoryColors = {
  社交: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
  學習: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  運動: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  文化: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  其他: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
};

function generateOccurrences(activities) {
  const periodStart = new Date(2026, 3, 1);
  const periodEnd = new Date(2027, 2, 31);
  const occurrences = [];

  activities.forEach((act) => {
    if (!act.start_date || !act.end_date) return;
    const actStart = new Date(act.start_date);
    const actEnd = new Date(act.end_date);
    const effStart = actStart > periodStart ? actStart : periodStart;
    const effEnd = actEnd < periodEnd ? actEnd : periodEnd;

    let current = new Date(effStart);
    const targetDay = act.day_of_week ?? 6;
    while (current.getDay() !== targetDay && current <= effEnd) {
      current.setDate(current.getDate() + 1);
    }

    const interval = act.frequency === 'bi-weekly' ? 14 : 7;
    while (current <= effEnd) {
      occurrences.push({ ...act, occurrence_date: new Date(current) });
      current.setDate(current.getDate() + interval);
    }
  });

  occurrences.sort((a, b) => a.occurrence_date - b.occurrence_date);
  return occurrences;
}

export default function ScheduleList({ activities, selectedLocation }) {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const allOccurrences = useMemo(() => generateOccurrences(activities), [activities]);

  const months = useMemo(() => {
    const set = new Set();
    allOccurrences.forEach((o) => set.add(o.occurrence_date.toISOString().slice(0, 7)));
    return ['all', ...Array.from(set).sort()];
  }, [allOccurrences]);

  const filtered = useMemo(() => {
    let result = allOccurrences;
    if (selectedLocation) {
      result = result.filter((o) => o.location_name === selectedLocation.name);
    }
    if (selectedMonth !== 'all') {
      result = result.filter((o) => o.occurrence_date.toISOString().slice(0, 7) === selectedMonth);
    }
    return result;
  }, [allOccurrences, selectedLocation, selectedMonth]);

  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach((o) => {
      const key = o.occurrence_date.toDateString();
      if (!groups[key]) groups[key] = [];
      groups[key].push(o);
    });
    return groups;
  }, [filtered]);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('zh-TW', { month: 'long', day: 'numeric', weekday: 'short' });

  const monthLabel = (key) => {
    if (key === 'all') return '全部月份';
    const [y, m] = key.split('-');
    return `${y}年${parseInt(m)}月`;
  };

  if (activities.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 text-center shadow-md border border-gray-100 dark:border-gray-800">
        <Calendar className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
        <p className="text-gray-500 dark:text-gray-400">暫時沒有活動</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">活動日程表</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">{filtered.length} 項活動</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {months.map((m) => (
          <button
            key={m}
            onClick={() => setSelectedMonth(m)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedMonth === m
                ? 'bg-rose-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-rose-50'
            }`}
          >
            {monthLabel(m)}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {Object.entries(grouped).map(([dateKey, items]) => (
          <div key={dateKey}>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-rose-500" />
              <h3 className="font-bold text-gray-900 dark:text-white">{formatDate(dateKey)}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <motion.div
                  key={`${item.id}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                    <span
                      className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                        categoryColors[item.category] || categoryColors['其他']
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{item.description}</p>
                  )}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {item.location_name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.time || '待定'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {item.max_participants || 20}人
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.frequency === 'weekly' ? '每週' : '雙週'}
                    </span>
                  </div>
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-rose-600 dark:text-rose-400 hover:text-rose-700 font-medium"
                  >
                    立即報名 <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-md border border-gray-100 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400">此月份/地點暫時沒有活動</p>
        </div>
      )}
    </div>
  );
}