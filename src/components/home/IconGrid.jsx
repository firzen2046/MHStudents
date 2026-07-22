import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Bus, Utensils, MessageCircle, Briefcase, Home, BookOpen, Map, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [
  { name: '交通查詢', page: 'Transport', icon: Bus, color: 'from-blue-500 to-cyan-500' },
  { name: '餐飲推薦', page: 'Food', icon: Utensils, color: 'from-orange-500 to-red-500' },
  { name: '廣東話學習', page: 'CantoneseLearn', icon: MessageCircle, color: 'from-purple-500 to-indigo-500' },
  { name: '求職', page: 'JobSearch', icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
  { name: '住房', page: 'Housing', icon: Home, color: 'from-amber-500 to-orange-500' },
  { name: '教育', page: 'Education', icon: BookOpen, color: 'from-rose-500 to-pink-500' },
  { name: '香港好去處', page: 'HKPlaces', icon: Map, color: 'from-cyan-500 to-blue-500' },
  { name: '中港交流', page: 'Exchange', icon: Globe, color: 'from-indigo-500 to-purple-500' },
];

export default function IconGrid() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
          {icons.map((item, i) => (
            <motion.div
              key={item.page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={createPageUrl(item.page)} className="flex flex-col items-center gap-2 group">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 group-active:scale-95 transition-transform`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}