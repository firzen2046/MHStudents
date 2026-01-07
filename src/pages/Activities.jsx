import React from 'react';
import { Calendar, Users, Award, MapPin, Presentation, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    title: "「中港同窗 築夢同行」工作計劃開幕禮",
    date: "2026年3月/4月",
    icon: Presentation,
    color: "purple",
    participants: "100人",
    description: "這次活動特意選定在星期六來舉辦月會，並且還會與活動的開幕典禮共同舉行，目標是邀請到中聯辦的官員前來擔任主禮嘉賓。",
    details: [
      "進場簽到及抽簽 - 打開盲盒，尋找配隊的組別",
      "攤位遊戲或會前遊戲",
      "月會時間",
      "開場儀式",
      "自由交流及進餐",
      "港漂生代表專訪",
      "潮語大電視 - 港漂用粵語，其他參加者用國語描述題目",
      "才藝表演比拚"
    ]
  },
  {
    id: 2,
    title: "雙向留學講座",
    date: "2025年3月或4月",
    icon: Users,
    color: "blue",
    participants: "300-1000人",
    description: "雙向留學講座將會分成上下兩個半場來進行。",
    details: [
      "上半場：專門邀請中三及中四學生參加",
      "詳細分享前往國內留學的相關資訊",
      "介紹多種多樣的留學管道",
      "下半場：邀請港漂生分享來港留學經驗",
      "通過線上形式舉辦專題講座",
      "分享在香港學習、生活的點點滴滴"
    ]
  },
  {
    id: 3,
    title: "內地大學體驗團",
    date: "2025年4月或12月",
    icon: MapPin,
    color: "emerald",
    participants: "30人",
    description: "五日四夜或四日三夜的內地大學體驗團活動，專門面向香港中學三年級至中學四年級的學生開放。",
    timeline: [
      { month: "3月", event: "報名及面試" },
      { month: "4月", event: "團前簡介會及講座（連同留學講座舉辦）" },
      { month: "4月", event: "交流團" },
      { month: "5-6月", event: "團後義工服務 - 廣東話訓練班" },
      { month: "8月", event: "團後分享會（在閉幕禮進行）" }
    ]
  },
  {
    id: 4,
    title: "中港同窗獎學金計劃",
    date: "2025年7月至8月",
    icon: Award,
    color: "amber",
    participants: "30人",
    description: "為港漂學生和內地升學港生分別提供獎學金，嘉許成績優異及投身義務工作的學生。",
    awards: [
      { name: "傑出成績獎金獎", amount: "HK$3,000", quota: "2名" },
      { name: "傑出成績獎銀獎", amount: "HK$2,000", quota: "2名" },
      { name: "傑出成績獎銅獎", amount: "HK$1,000", quota: "2名" },
      { name: "傑出義務工作獎", amount: "HK$1,500", quota: "2名" }
    ]
  },
  {
    id: 5,
    title: "活動閉幕禮",
    date: "2025年8月",
    icon: Calendar,
    color: "rose",
    participants: "200人",
    description: "在閉幕禮舉辦參加內地大學體驗團的參與者交流分享會，並為兩地學生提供擺攤設市的機會，嘗試小型創業。",
    details: [
      "開場前展覽及市集",
      "展出兩地升學資訊",
      "開場儀式",
      "嘉許環節 - 嘉許支持及贊助單位",
      "獎學金頒獎環節",
      "交流環節 - 體驗團參加者分享",
      "致謝環節"
    ]
  }
];

const colorClasses = {
  purple: { bg: "bg-purple-100", text: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
  blue: { bg: "bg-blue-100", text: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-600", gradient: "from-emerald-500 to-emerald-600" },
  amber: { bg: "bg-amber-100", text: "text-amber-600", gradient: "from-amber-500 to-amber-600" },
  rose: { bg: "bg-rose-100", text: "text-rose-600", gradient: "from-rose-500 to-rose-600" }
};

export default function Activities() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-purple-300 font-medium mb-4 block">精彩活動</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              活動詳情
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              五大重點活動，促進香港與內地青年深入交流
            </p>
          </motion.div>
        </div>
      </div>

      {/* Activities */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-12">
          {activities.map((activity, index) => {
            const colors = colorClasses[activity.color];
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${colors.gradient} p-6 lg:p-8`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <activity.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">
                          {activity.title}
                        </h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4 text-white" />
                        <span className="text-white font-medium">{activity.date}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                        <Users className="w-4 h-4 text-white" />
                        <span className="text-white font-medium">{activity.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {activity.description}
                  </p>

                  {activity.details && (
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 mb-4">活動環節</h3>
                      {activity.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activity.timeline && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900 mb-4">活動時間表</h3>
                      <div className="grid gap-3">
                        {activity.timeline.map((item, i) => (
                          <div key={i} className={`flex items-center gap-4 p-4 ${colors.bg} rounded-xl`}>
                            <span className={`font-bold ${colors.text} min-w-[60px]`}>{item.month}</span>
                            <span className="text-gray-700">{item.event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activity.awards && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900 mb-4">獎學金詳情</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {activity.awards.map((award, i) => (
                          <div key={i} className={`p-4 ${colors.bg} rounded-xl`}>
                            <div className="flex justify-between items-start">
                              <div>
                                <p className={`font-semibold ${colors.text}`}>{award.name}</p>
                                <p className="text-gray-600 text-sm mt-1">{award.quota}</p>
                              </div>
                              <span className="text-xl font-bold text-gray-900">{award.amount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}