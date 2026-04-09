import React from 'react';
import { Users, ExternalLink, MessageCircle, Globe } from "lucide-react";
import { motion } from "framer-motion";

const onlineCommunities = [
  {
    platform: "小紅書",
    icon: "📕",
    groups: ["香港港漂生活", "香港打工仔", "香港生活攻略", "香港租房"],
    desc: "最多港漂使用的平台，生活資訊分享、問答互動活躍",
    url: "https://www.xiaohongshu.com",
    color: "rose"
  },
  {
    platform: "微信群組",
    icon: "💬",
    groups: ["港漂互助群", "各區生活群", "行業交流群", "家長交流群"],
    desc: "加入各類微信群，獲取即時資訊及互助支援（通過友人邀請或QR Code入群）",
    url: null,
    color: "emerald"
  },
  {
    platform: "Facebook群組",
    icon: "📘",
    groups: ["香港港漂互助群", "HK Expats", "香港租房", "二手物品交換"],
    desc: "部分港漂及在港外籍人士社群，英粵中三語均有使用",
    url: "https://www.facebook.com",
    color: "blue"
  },
  {
    platform: "Telegram群組",
    icon: "✈️",
    groups: ["香港港漂資訊", "各行業群", "新移民交流"],
    desc: "即時資訊發布，包括就業機會、租房資訊等",
    url: "https://telegram.org",
    color: "indigo"
  },
  {
    platform: "Clubhouse / Discord",
    icon: "🎙️",
    groups: ["港漂分享會", "語言交換", "創業者社群"],
    desc: "語音及文字社群，適合深度交流及學習",
    url: null,
    color: "purple"
  },
  {
    platform: "領英 LinkedIn",
    icon: "💼",
    groups: ["Hong Kong Mainland Professionals", "HK Tech Community"],
    desc: "職場社群，適合建立專業人際網絡",
    url: "https://www.linkedin.com",
    color: "blue"
  },
];

const organizations = [
  {
    name: "青年港漂總會 (YEA)",
    desc: "香港最大的港漂青年組織，定期舉辦活動、提供資源及倡議",
    url: "https://www.yea.org.hk",
    services: ["社交活動", "就業支援", "法律諮詢", "心理支援"],
    icon: "🏆"
  },
  {
    name: "半島青年商會 (JCI Peninsula)",
    desc: "主辦「聽見·漂行」計劃，推動港漂融入香港社區",
    url: "https://www.hkpjc.org",
    services: ["破冰活動", "粵語學習", "社區服務", "領袖培訓"],
    icon: "🌟"
  },
  {
    name: "新來港人士服務中心",
    desc: "政府資助的社會服務，協助新移民融入香港生活",
    url: "https://www.swd.gov.hk",
    services: ["輔導服務", "語言課程", "就業輔助", "社區適應"],
    icon: "🏠"
  },
  {
    name: "香港基督教服務處",
    desc: "提供新移民適應服務及社區支援計劃",
    url: "https://www.hkcs.org",
    services: ["家庭支援", "兒童服務", "社區活動", "輔導服務"],
    icon: "❤️"
  },
  {
    name: "東華三院",
    desc: "提供多元社會服務，包括家庭、就業及社區服務",
    url: "https://www.tungwah.org.hk",
    services: ["緊急援助", "社區服務", "培訓課程", "醫療服務"],
    icon: "🌺"
  },
  {
    name: "香港社會服務聯會",
    desc: "港澳社福機構聯盟，可協助轉介適合的社會服務",
    url: "https://www.hkcss.org.hk",
    services: ["服務轉介", "政策倡議", "資源資料庫"],
    icon: "🤝"
  },
];

const events = [
  { type: "破冰交流活動", icon: "🎉", desc: "定期舉辦的港漂聚會，認識新朋友、分享生活心得" },
  { type: "文化體驗團", icon: "🎭", desc: "深入了解香港本地文化、歷史及習俗" },
  { type: "語言交換", icon: "🗣️", desc: "與本地人進行粵語/普通話語言交換，互相學習" },
  { type: "義工服務", icon: "💪", desc: "參與社區服務，融入香港同時回饋社會" },
  { type: "職業發展工作坊", icon: "📈", desc: "提升職場技能及人際網絡" },
  { type: "親子活動", icon: "👨‍👩‍👧", desc: "為有子女的港漂家庭提供適應香港生活的支援" },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-teal-200 font-medium mb-4 block">港漂資源</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">社群網絡</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              港漂社群、組織及活動，讓你不再孤單
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Online Communities */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">網上社群平台</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineCommunities.map((c, i) => (
              <motion.div
                key={c.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{c.icon}</span>
                  <h3 className="font-bold text-gray-900 text-lg">{c.platform}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{c.desc}</p>
                <div className="space-y-1 mb-4">
                  {c.groups.map((g, j) => (
                    <span key={j} className={`inline-block text-xs bg-${c.color}-50 text-${c.color}-700 px-2 py-1 rounded mr-1 mb-1`}>#{g}</span>
                  ))}
                </div>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal-600 text-sm hover:text-teal-700">
                    前往平台 <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organizations */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">港漂支援組織</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((o, i) => (
              <motion.div
                key={o.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{o.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-gray-900">{o.name}</h3>
                      {o.url && (
                        <a href={o.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-teal-500 flex-shrink-0" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{o.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {o.services.map((s, j) => (
                        <span key={j} className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Types */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">社群活動類型</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((e, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                <span className="text-2xl mb-3 block">{e.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{e.type}</h3>
                <p className="text-gray-600 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-teal-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">加入「聽見·漂行」社群</h3>
            <p className="text-gray-600 mb-6">立即報名參加我們的計劃，結識本地朋友，找回歸屬感！</p>
            <a href="/Registration" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors">
              立即報名 →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}