import React, { useState } from 'react';
import { CreditCard, Shield, ExternalLink, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const banks = [
  {
    name: "香港匯豐銀行 (HSBC)",
    type: "傳統銀行",
    url: "https://www.hsbc.com.hk",
    features: ["分行網絡廣", "中英普三語服務", "易於開戶（部分帳戶）"],
    minBalance: "$1 (One帳戶)",
    color: "red",
    recommended: true,
  },
  {
    name: "中國銀行香港",
    type: "傳統銀行",
    url: "https://www.bochk.com",
    features: ["港漂友善", "普通話服務", "與內地銀行聯繫"],
    minBalance: "$0 起",
    color: "red",
    recommended: true,
  },
  {
    name: "ZA Bank (眾安銀行)",
    type: "虛擬銀行",
    url: "https://www.zabank.com.hk",
    features: ["全程網上開戶", "無最低存款", "高息存款"],
    minBalance: "$0",
    color: "blue",
    recommended: true,
  },
  {
    name: "Mox Bank",
    type: "虛擬銀行",
    url: "https://mox.com",
    features: ["網上開戶便捷", "無月費", "消費回贈"],
    minBalance: "$0",
    color: "indigo",
    recommended: false,
  },
  {
    name: "渣打銀行",
    type: "傳統銀行",
    url: "https://www.sc.com/hk",
    features: ["跨境匯款方便", "多幣種帳戶", "分行服務"],
    minBalance: "$1,000",
    color: "green",
    recommended: false,
  },
  {
    name: "Wise (國際匯款)",
    type: "匯款服務",
    url: "https://wise.com",
    features: ["低費用匯款", "即時匯率", "多幣種帳戶"],
    minBalance: "無",
    color: "emerald",
    recommended: true,
  },
];

const insurance = [
  {
    type: "醫療保險",
    icon: "🏥",
    desc: "強烈建議購買，香港私家醫院費用高昂。可選擇公司福利或自購個人計劃。",
    providers: ["AIA", "Bupa", "Blue Cross", "AXA"],
    tips: "留意保單是否涵蓋香港政府醫院（公立醫院）就診補貼"
  },
  {
    type: "強制性公積金 (MPF)",
    icon: "💼",
    desc: "受僱滿60天強制性供款，僱員5%、僱主5%。離港永久時可提取。",
    providers: ["HSBC MPF", "Manulife MPF", "Sun Life MPF", "Hang Seng MPF"],
    tips: "可自選不同投資組合，注意管理費用差異"
  },
  {
    type: "家居保險",
    icon: "🏠",
    desc: "保障家居財物及第三者責任，租客亦可購買。費用相對低廉。",
    providers: ["中銀保險", "AIA", "太平保險", "AXA"],
    tips: "部分業主要求租客購買第三者責任保險"
  },
  {
    type: "人壽保險",
    icon: "❤️",
    desc: "為家人提供保障，同時可作儲蓄用途。香港保險產品種類豐富。",
    providers: ["AIA", "Prudential", "Manulife", "Sun Life"],
    tips: "留意保費、保額及保障條款，建議向持牌財務顧問咨詢"
  },
];

const openingSteps = [
  { step: 1, title: "選擇銀行及帳戶類型", desc: "初到港建議選擇ZA Bank或中銀，開戶要求較低" },
  { step: 2, title: "準備所需文件", desc: "通行證/身份證、地址證明（水電單/銀行信件）、工作/學生證明" },
  { step: 3, title: "申請開戶", desc: "虛擬銀行可全程網上辦理，傳統銀行需到分行" },
  { step: 4, title: "啟動帳戶", desc: "存入最低存款金額，設定網上銀行及手機應用程式" },
  { step: 5, title: "申請信用卡（可選）", desc: "通常需要有穩定收入證明，新移民可先使用借記卡" },
];

export default function Banking() {
  const [openIns, setOpenIns] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-rose-700 via-rose-600 to-pink-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-rose-200 font-medium mb-4 block">港漂資源</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">銀行及保險服務</h1>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              在港開戶、理財及保障計劃的全面指引
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Opening Account Steps */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">開戶步驟</h2>
          <div className="max-w-3xl mx-auto">
            {openingSteps.map((s, i) => (
              <div key={i} className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-rose-600">{s.step}</div>
                <div className="bg-white rounded-2xl p-5 shadow-md flex-1 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Banks */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">主要銀行比較</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banks.map((b, i) => (
              <motion.a
                key={b.name}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-md border ${b.recommended ? 'border-rose-200' : 'border-gray-100'} hover:shadow-xl transition-all group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{b.type}</span>
                  <div className="flex items-center gap-1">
                    {b.recommended && <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full">推薦</span>}
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-rose-500" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-rose-600">{b.name}</h3>
                <div className="text-xs text-gray-500 mb-3">最低存款：<span className="font-medium text-gray-700">{b.minBalance}</span></div>
                {b.features.map((f, j) => <p key={j} className="text-gray-600 text-xs mb-1">✓ {f}</p>)}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Insurance */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">保險指引</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {insurance.map((ins, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 cursor-pointer overflow-hidden"
                onClick={() => setOpenIns(openIns === i ? null : i)}>
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{ins.icon}</span>
                    <h3 className="font-semibold text-gray-900">{ins.type}</h3>
                  </div>
                  {openIns === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </div>
                {openIns === i && (
                  <div className="px-6 pb-6 border-t pt-4 space-y-3">
                    <p className="text-gray-600">{ins.desc}</p>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">主要保險公司：</p>
                      <div className="flex flex-wrap gap-2">
                        {ins.providers.map(p => <span key={p} className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded">{p}</span>)}
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-amber-50 rounded-xl p-3">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-800 text-sm">{ins.tips}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}