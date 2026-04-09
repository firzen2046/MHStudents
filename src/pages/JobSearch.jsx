import React, { useState } from 'react';
import { Briefcase, ExternalLink, Search, MapPin, DollarSign, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const platforms = [
  { name: "招聘求職 - JobsDB", desc: "香港最大求職平台，大量各行業職位", url: "https://hk.jobsdb.com", tag: "綜合", color: "blue" },
  { name: "LinkedIn香港", desc: "專業人士網絡及求職平台", url: "https://www.linkedin.com/jobs/", tag: "專業", color: "indigo" },
  { name: "Indeed香港", desc: "搜集多個平台職位，一站式搜尋", url: "https://hk.indeed.com", tag: "綜合", color: "purple" },
  { name: "CTgoodjobs", desc: "香港本地求職網站，提供大量職缺", url: "https://www.ctgoodjobs.hk", tag: "本地", color: "emerald" },
  { name: "招才貓香港", desc: "內地企業在港招聘平台", url: "https://www.zhaopin.com", tag: "內地企業", color: "rose" },
  { name: "智聯招聘", desc: "內地求職者熟悉的招聘平台香港版", url: "https://www.zhaopin.com", tag: "內地企業", color: "amber" },
];

const tips = [
  { title: "更新你的工作簽注", desc: "確認你的簽注類型允許在港工作，如需更改請向入境處申請", icon: "📋" },
  { title: "準備中英文履歷", desc: "香港職場需要中英文履歷，注意格式與本地習慣不同", icon: "📄" },
  { title: "了解勞工法例", desc: "熟悉香港《僱傭條例》，保障自身權益，包括最低工資、年假等", icon: "⚖️" },
  { title: "MPF強制性公積金", desc: "受僱滿60天後，僱主及僱員各需供款5%，請確認僱主有依法安排", icon: "💰" },
  { title: "語言優勢", desc: "普通話是你的競爭優勢，同時提升粵語能力可拓展更多機會", icon: "🗣️" },
  { title: "港漂社群求職群", desc: "加入「青年港漂總會」等社群，獲取內推機會及職場資訊", icon: "🤝" },
];

const industries = [
  { name: "金融及銀行", demand: "高", icon: "🏦" },
  { name: "科技及IT", demand: "高", icon: "💻" },
  { name: "教育及培訓", demand: "中", icon: "📚" },
  { name: "醫療及健康", demand: "高", icon: "🏥" },
  { name: "貿易及物流", demand: "中", icon: "🚢" },
  { name: "旅遊及酒店", demand: "中", icon: "🏨" },
  { name: "零售及消費", demand: "中", icon: "🛍️" },
  { name: "法律及會計", demand: "中", icon: "⚖️" },
];

export default function JobSearch() {
  const [openTip, setOpenTip] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-200 font-medium mb-4 block">港漂資源</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">求職指南</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              在香港找工作的資源、平台及實用建議
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Job Platforms */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">主要求職平台</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all group border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full bg-${p.color}-100 text-${p.color}-700`}>{p.tag}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">香港熱門行業</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={ind.name} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{ind.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${ind.demand === '高' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  需求{ind.demand}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">港漂求職必知</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer"
                onClick={() => setOpenTip(openTip === i ? null : i)}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{tip.icon}</span>
                    <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                  </div>
                  {openTip === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </div>
                {openTip === i && (
                  <div className="px-6 pb-6 text-gray-600 border-t pt-4">
                    {tip.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Labour Dept Link */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">香港勞工處就業服務</h3>
            <p className="text-gray-600 mb-6">提供免費就業輔導、求職配對及培訓資訊</p>
            <a href="https://www.jobs.gov.hk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              前往勞工處互動就業服務網站 <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}