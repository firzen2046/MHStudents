import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Download,
  Search,
  ShieldAlert,
  FileText,
  Clock,
  Train,
  Home,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

const housingAreas = [
  {
    name: '紅磡',
    district: '九龍城區',
    avgRent: '$5,500 - $9,000',
    commute: '15分鐘 → 中環',
    mtrLine: '屯馬綫',
    tags: ['近理大', '美食多', '交通方便'],
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80',
  },
  {
    name: '大圍',
    district: '沙田區',
    avgRent: '$4,000 - $7,500',
    commute: '25分鐘 → 中環',
    mtrLine: '屯馬綫 / 東鐵綫',
    tags: ['性價比高', '近城門河', '單車徑'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    name: '西營盤',
    district: '中西區',
    avgRent: '$6,000 - $10,000',
    commute: '10分鐘 → 中環',
    mtrLine: '港島綫',
    tags: ['近港大', '咖啡店多', '文青區'],
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80',
  },
  {
    name: '將軍澳',
    district: '西貢區',
    avgRent: '$4,500 - $8,000',
    commute: '30分鐘 → 中環',
    mtrLine: '將軍澳綫',
    tags: ['新市鎮', '商場多', '環境好'],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80',
  },
  {
    name: '深水埗',
    district: '深水埗區',
    avgRent: '$3,500 - $6,000',
    commute: '20分鐘 → 中環',
    mtrLine: '荃灣綫',
    tags: ['最平', '電子街', '美食天堂'],
    image: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=600&q=80',
  },
  {
    name: '太子',
    district: '油尖旺區',
    avgRent: '$5,000 - $8,500',
    commute: '18分鐘 → 中環',
    mtrLine: '荃灣綫 / 觀塘綫',
    tags: ['花墟', '金魚街', '交通樞紐'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',
  },
];

const pitfallGuide = [
  {
    icon: Download,
    title: '標準租約範本下載',
    color: 'blue',
    desc: '使用地產代理監管局認可的標準住宅租約範本，保障雙方權益。',
    items: [
      { type: 'do', text: '使用差餉物業估價署標準租約（Form CR109）' },
      { type: 'do', text: '確保租約列明租金、按金、租期及終止條款' },
      { type: 'do', text: '所有口頭承諾以書面寫入租約附件' },
      { type: 'dont', text: '切勿使用業主自行擬定的非標準合約' },
      { type: 'dont', text: '不要在未讀完合約前簽署或付款' },
    ],
  },
  {
    icon: Search,
    title: '查冊教學',
    color: 'emerald',
    desc: '透過土地註冊處查冊，核實業主身份及物業資料，防止受騙。',
    items: [
      { type: 'do', text: '到土地註冊處網站查冊（www.landreg.gov.hk）' },
      { type: 'do', text: '核對業主姓名與租約上的業主是否一致' },
      { type: 'do', text: '查看物業是否有按揭或法庭命令' },
      { type: 'dont', text: '不要相信無法提供查冊證明的「業主」' },
      { type: 'dont', text: '不要只看業主身份證就輕信' },
    ],
  },
  {
    icon: ShieldAlert,
    title: '常見二房東陷阱',
    color: 'rose',
    desc: '二房東未經業主同意轉租，租客隨時可能被趕走，損失按金及租金。',
    items: [
      { type: 'do', text: '要求查看業主書面授權轉租同意書' },
      { type: 'do', text: '直接與真正業主簽約，避免中間人' },
      { type: 'do', text: '查核租約是否允許分租條款' },
      { type: 'dont', text: '不要接受「業主在外地，無法見面」的藉口' },
      { type: 'dont', text: '不要將租金及按金直接匯入不明賬戶' },
    ],
  },
  {
    icon: FileText,
    title: '按金與費用須知',
    color: 'amber',
    desc: '了解標準按金規則及常見額外收費，避免不合理收費。',
    items: [
      { type: 'do', text: '按金一般為兩個月租金（另加上月租金）' },
      { type: 'do', text: '退租時業主須於指定時間內退還按金' },
      { type: 'do', text: '要求業主提供按金收據' },
      { type: 'dont', text: '不要支付超過標準的按金' },
      { type: 'dont', text: '不要接受「按金不退」的不合理條款' },
    ],
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' },
  rose: { bg: 'bg-rose-50 dark:bg-rose-900/20', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-900/20', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
};

export default function PreLandingHousing() {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    carouselRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Scam Alert Banner */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 py-3">
        <div className="container mx-auto px-6 flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-white flex-shrink-0 animate-pulse" />
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm">
              ⚠️ 防騙警告 (Scam Alert)
            </p>
            <p className="text-red-100 text-xs">
              租房前必查業主身份及物業查冊，切勿未睇樓先付款！如遇可疑情況請即致函警方（999）或消委會（2929 2222）。
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-200 font-medium mb-4 block">遙距租房指南</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Pre-landing Housing</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              未抵港先做好租房功課，安心找到理想住所
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Section 1: Popular Housing Areas Carousel */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">熱門租房社區</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">平均租金及通勤時間一覽</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-orange-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-orange-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x"
          >
            {housingAreas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 w-72 snap-start bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={area.image} alt={area.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-xl font-bold text-white">{area.name}</h3>
                    <p className="text-xs text-gray-200">{area.district}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="space-y-2.5 mb-4">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400">平均租金</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{area.avgRent}/月</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400">通勤時間</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{area.commute}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400">港鐵</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{area.mtrLine}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
                    {area.tags.map((t) => (
                      <span key={t} className="text-xs bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Rental Pitfall Guide */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">租房避坑手冊</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">標準租約、查冊教學及常見陷阱</p>
          </div>

          <div className="space-y-6">
            {pitfallGuide.map((item, i) => {
              const c = colorMap[item.color];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-white dark:bg-gray-900 rounded-2xl shadow-md border ${c.border} overflow-hidden`}
                >
                  <div className={`p-5 border-b border-gray-100 dark:border-gray-800 flex items-start gap-3`}>
                    <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-5 grid sm:grid-cols-2 gap-3">
                    {item.items.map((it, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {it.type === 'do' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${it.type === 'do' ? 'text-gray-700 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}>
                          {it.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Emergency Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <h3 className="font-bold text-red-900 dark:text-red-300">遇到詐騙怎麼辦？</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">999</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">警察報案熱線</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-red-600 dark:text-red-400">2929 2222</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">消費者委員會</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-red-600 dark:text-red-400">2150 3300</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">地產代理監管局</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}