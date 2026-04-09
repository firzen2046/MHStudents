import React, { useState } from 'react';
import { Home, MapPin, DollarSign, ExternalLink, Info, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const housingTypes = [
  {
    type: "私人租屋",
    icon: "🏠",
    priceRange: "$5,000 - $20,000+/月",
    pros: ["自由度高", "地點選擇多", "可養寵物（視乎業主）"],
    cons: ["價格較高", "需要繳交按金（1-2個月）", "需自行處理維修"],
    color: "blue"
  },
  {
    type: "劏房/分租",
    icon: "🛏️",
    priceRange: "$2,500 - $6,000/月",
    pros: ["租金較低", "鄰近市區", "即租即住"],
    cons: ["空間細小", "居住環境差異大", "設施共用"],
    color: "amber"
  },
  {
    type: "學生宿舍",
    icon: "🎓",
    priceRange: "$1,500 - $4,000/月",
    pros: ["價格相對低", "社群支持", "方便交通"],
    cons: ["僅限在學學生", "規定較多", "空間有限"],
    color: "purple"
  },
  {
    type: "共居空間(Co-living)",
    icon: "🤝",
    priceRange: "$4,000 - $9,000/月",
    pros: ["設施齊全", "社群活動", "靈活租期"],
    cons: ["價格中等偏高", "共用公共空間", "隱私較少"],
    color: "emerald"
  },
];

const platforms = [
  { name: "Spacious.hk", desc: "香港最大租房平台，資料詳盡", url: "https://www.spacious.hk", tag: "租房" },
  { name: "28Hse", desc: "本地常用租購物業平台", url: "https://www.28hse.com", tag: "租房" },
  { name: "租房小助手 - 小紅書", desc: "港漂社群分享租房心得", url: "https://www.xiaohongshu.com", tag: "社群" },
  { name: "Facebook 香港租房群組", desc: "「香港租房/Flat Share」群組，直接聯繫業主", url: "https://www.facebook.com", tag: "社群" },
  { name: "Airbnb香港短租", desc: "短期住宿解決方案，適合初到港時", url: "https://www.airbnb.com.hk", tag: "短租" },
  { name: "香港房屋委員會", desc: "公屋申請資訊（需符合資格）", url: "https://www.housingauthority.gov.hk", tag: "公屋" },
];

const districts = [
  { name: "九龍城/土瓜灣", desc: "內地人社群聚集，港漂友善，租金中等", popular: true },
  { name: "旺角/太子", desc: "交通便利，生活配套齊全，租金較高", popular: true },
  { name: "荃灣/葵涌", desc: "租金相對較低，適合預算有限者", popular: false },
  { name: "沙田/大圍", desc: "環境較靜，交通方便，租金中等", popular: false },
  { name: "上環/西環", desc: "鄰近港大，年輕人聚集，生活便利", popular: true },
  { name: "將軍澳", desc: "新區設施完善，租金相對低，交通方便", popular: false },
];

const tips = [
  { q: "租屋前需要準備什麼文件？", a: "通常需要：香港身份證或通行證、工作/學生證明、近3個月銀行月結單、以及按金（一般1-2個月租金）。" },
  { q: "什麼是按金和上期？", a: "「按金」是保證金（1-2個月），退租時可取回。「上期」是預付的第一個月租金。即入住前需準備2-3個月租金的費用。" },
  { q: "租約需要注意什麼？", a: "注意租約期限（通常1-2年）、終止條款、維修責任、允許轉租與否，以及加租條款。建議請懂廣東話的朋友幫忙確認。" },
  { q: "如何避免租房騙局？", a: "不要提前轉帳任何款項、親自實地看房、核實業主身份、通過正規平台或持牌地產代理租房。" },
];

export default function Housing() {
  const [openTip, setOpenTip] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-emerald-200 font-medium mb-4 block">港漂資源</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">住房指南</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              在香港找到合適住所的全面指引
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Housing Types */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">住屋類型比較</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {housingTypes.map((h, i) => (
              <motion.div
                key={h.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{h.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{h.type}</h3>
                    <span className="text-emerald-600 font-medium text-sm">{h.priceRange}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-emerald-600 mb-2">✅ 優點</p>
                    {h.pros.map((p, j) => <p key={j} className="text-gray-600 text-sm mb-1">• {p}</p>)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-500 mb-2">❌ 缺點</p>
                    {h.cons.map((c, j) => <p key={j} className="text-gray-600 text-sm mb-1">• {c}</p>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Districts */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">港漂熱門居住區域</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {districts.map((d, i) => (
              <div key={d.name} className={`bg-white rounded-2xl p-6 shadow-md border ${d.popular ? 'border-emerald-200' : 'border-gray-100'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">{d.name}</h3>
                  {d.popular && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">熱門</span>}
                </div>
                <p className="text-gray-600 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platforms */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">租房平台及資源</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p, i) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">{p.tag}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600">{p.name}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">租屋常見問題</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {tips.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 cursor-pointer"
                onClick={() => setOpenTip(openTip === i ? null : i)}>
                <div className="flex items-center justify-between p-6">
                  <h3 className="font-semibold text-gray-900 pr-4">{t.q}</h3>
                  {openTip === i ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </div>
                {openTip === i && <div className="px-6 pb-6 text-gray-600 border-t pt-4">{t.a}</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}