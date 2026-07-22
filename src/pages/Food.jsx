import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const categories = ['全部', '茶餐廳', '港式點心', '街頭小吃', '米芝蓮'];

const restaurants = [
  { name: '澳洲牛奶公司', category: '茶餐廳', area: '佐敦', rating: 4.5, desc: '必食炒蛋多士，港式早餐經典', price: '$' },
  { name: '蓮香樓', category: '港式點心', area: '中環', rating: 4.3, desc: '百年老字號，傳統點心', price: '$$' },
  { name: '九記牛腩', category: '茶餐廳', area: '中環', rating: 4.4, desc: '咖喱牛腩遠近馳名', price: '$$' },
  { name: '媽咪雞蛋仔', category: '街頭小吃', area: '多區', rating: 4.2, desc: '外脆內軟的港式雞蛋仔', price: '$' },
  { name: '一點心', category: '港式點心', area: '太子', rating: 4.3, desc: '平價點心，性價比高', price: '$' },
  { name: '添好運', category: '米芝蓮', area: '多區', rating: 4.5, desc: '全球最平米芝蓮餐廳', price: '$$' },
  { name: '合益泰小食', category: '街頭小吃', area: '深水埗', rating: 4.1, desc: '腸粉皇，滑溜好味', price: '$' },
  { name: '甘牌燒鵝', category: '米芝蓮', area: '灣仔', rating: 4.6, desc: '米芝蓮一星燒鵝', price: '$$$' },
];

export default function Food() {
  const [activeCat, setActiveCat] = useState('全部');
  const filtered = activeCat === '全部' ? restaurants : restaurants.filter((r) => r.category === activeCat);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">餐飲推薦</h1>
          <p className="text-xl text-orange-100">地道港式美食指南</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCat === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{r.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <MapPin className="w-3 h-3" />
                    {r.area}
                  </div>
                </div>
                <span className="text-orange-500 font-bold">{r.price}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{r.desc}</p>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{r.rating}</span>
                <span className="ml-2 text-xs px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
                  {r.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}