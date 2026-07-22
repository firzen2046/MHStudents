import React from 'react';
import { Bus, Train, Ship, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';

const transportInfo = [
  {
    icon: Train,
    title: '港鐵 MTR',
    desc: '覆蓋全港主要地區',
    color: 'from-red-500 to-rose-500',
    details: ['八達通 / 支付寶乘車', '頭班車約 06:00，尾班車約 00:30', '學生可申請學生身份八達通享半價'],
  },
  {
    icon: Bus,
    title: '巴士 Bus',
    desc: '路線遍佈全港',
    color: 'from-blue-500 to-cyan-500',
    details: ['可用八達通或現金', '夜間設有 N 線通宵巴士', '下車前需按鐘示意'],
  },
  {
    icon: Ship,
    title: '渡輪 Ferry',
    desc: '穿梭港島九龍及離島',
    color: 'from-teal-500 to-emerald-500',
    details: ['天星小輪：尖沙咀 ↔ 中環 / 灣仔', '往離島：長洲、坪洲、南丫島', '可使用八達通'],
  },
  {
    icon: Bus,
    title: '小巴 Minibus',
    desc: '綠色（專營）/ 紅色（非專營）',
    color: 'from-amber-500 to-orange-500',
    details: ['綠色小巴有固定路線及收費', '紅色小巴可議價', '需招手示意上車'],
  },
];

const usefulApps = [
  { name: 'MTR Mobile', desc: '港鐵官方 App，查路線及車費' },
  { name: '城巴 / 九巴 App', desc: '巴士到站時間查詢' },
  { name: 'Google Maps', desc: '綜合路線規劃' },
  { name: '香港出行', desc: '政府交通資訊平台' },
];

export default function Transport() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">交通查詢</h1>
          <p className="text-xl text-blue-100">香港公共交通指南</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {transportInfo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-blue-500 mt-0.5">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">實用交通 App</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {usefulApps.map((app, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Ticket className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{app.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}