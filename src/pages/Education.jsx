import React from 'react';
import { BookOpen, ExternalLink, GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";

const universities = [
  { name: "香港大學 (HKU)", url: "https://www.hku.hk", area: "薄扶林", type: "綜合", qs: "#17" },
  { name: "香港中文大學 (CUHK)", url: "https://www.cuhk.edu.hk", area: "沙田", type: "綜合", qs: "#36" },
  { name: "香港科技大學 (HKUST)", url: "https://www.ust.hk", area: "清水灣", type: "理工", qs: "#47" },
  { name: "香港城市大學 (CityU)", url: "https://www.cityu.edu.hk", area: "九龍塘", type: "綜合", qs: "#62" },
  { name: "香港理工大學 (PolyU)", url: "https://www.polyu.edu.hk", area: "紅磡", type: "理工", qs: "#65" },
  { name: "香港浸會大學 (HKBU)", url: "https://www.hkbu.edu.hk", area: "九龍塘", type: "人文", qs: "#301-350" },
  { name: "嶺南大學", url: "https://www.ln.edu.hk", area: "屯門", type: "博雅", qs: "#801-1000" },
  { name: "香港教育大學 (EdUHK)", url: "https://www.eduhk.hk", area: "大埔", type: "師範", qs: "#401-450" },
];

const programs = [
  { name: "語言學習班", org: "香港教育局持續進修基金", desc: "廣東話、英語等語言課程，可申請資助最高$25,000", url: "https://www.csf.gov.hk", tag: "資助" },
  { name: "專業進修課程", org: "香港職業訓練局 (VTC)", desc: "各類職業技能及專業資格課程", url: "https://www.vtc.edu.hk", tag: "職業" },
  { name: "兼讀學位課程", org: "香港各大學", desc: "在職人士可報讀兼讀制學士或碩士課程", url: "https://www.hku.hk/study/", tag: "學位" },
  { name: "Coursera / edX", org: "國際學習平台", desc: "香港大學、科大等提供免費網上課程", url: "https://www.coursera.org", tag: "網上" },
  { name: "工聯會課程", org: "香港工會聯盟", desc: "廉價實用技能培訓課程，涵蓋多個行業", url: "https://www.ftu.org.hk", tag: "技能" },
  { name: "持續進修基金", org: "香港政府", desc: "合資格人士可獲最高$25,000資助報讀認可課程", url: "https://www.csf.gov.hk", tag: "資助" },
];

const schools = [
  { level: "幼稚園", info: "需申請學券，內地生子女亦可申請。報名通常在3-4月進行。" },
  { level: "小學及中學", info: "持有效簽注的子女可申請就讀官立或津貼學校，需通過統一派位或叩門入學。" },
  { level: "國際學校", info: "較多以英語授課，學費較高（$80,000-$200,000/年），適合不打算長期留港的家庭。" },
  { level: "大學", info: "持有效居留簽注可申請各大學，以自費生身份報讀，學費高於本地生。" },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-violet-700 via-purple-600 to-indigo-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-violet-200 font-medium mb-4 block">港漂資源</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">教育資源</h1>
            <p className="text-xl text-violet-100 max-w-2xl mx-auto">
              在港進修、子女教育及持續學習的全面指引
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Universities */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">香港八所大學</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {universities.map((u, i) => (
              <motion.a
                key={u.name}
                href={u.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full">{u.type}</span>
                  <span className="text-xs text-gray-400 font-medium">QS {u.qs}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-violet-600 transition-colors mb-1">{u.name}</h3>
                <p className="text-gray-500 text-xs">{u.area}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Programs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">進修及培訓課程</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${p.tag === '資助' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>{p.tag}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-violet-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-600">{p.name}</h3>
                <p className="text-violet-600 text-xs mb-2">{p.org}</p>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Children Education */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">子女教育指引</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {schools.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{s.level}</h3>
                    <p className="text-gray-600">{s.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://www.edb.gov.hk" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl hover:bg-violet-700 transition-colors">
              香港教育局官方網站 <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}