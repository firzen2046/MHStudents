import React from 'react';
import { Calendar, Users, Award, MapPin, Presentation, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    title: "認識日",
    date: "2026年3月",
    icon: Users,
    color: "purple",
    participants: "100人",
    description: "認識彼此，結伴同行。透過配對活動讓中學生與港漂學生建立聯繫，開展交流之旅的第一步。",
    details: [
      "進場簽到及配對活動",
      "打開盲盒，尋找配隊的組別",
      "破冰遊戲，互相認識",
      "港漂生活分享環節",
      "小組討論與交流",
      "建立聯絡群組",
      "合照留念"
    ]
  },
  {
    id: 2,
    title: "學習日",
    date: "2026年4月",
    icon: Presentation,
    color: "blue",
    participants: "100人",
    description: "互相學習，你授與廣東話，他授與國內留學經驗及心得。透過雙向教學，促進文化交流。",
    details: [
      "廣東話學習工作坊 - 港漂生學習日常用語",
      "內地升學經驗分享 - 港漂生分享升學心得",
      "文化交流活動",
      "小組互動學習",
      "潮語大電視遊戲",
      "學習成果分享"
    ]
  },
  {
    id: 3,
    title: "義工日",
    date: "2025年5月",
    icon: Award,
    color: "emerald",
    participants: "100人",
    description: "服務社會，訓練自己。透過社區服務活動，培養社會責任感，同時增進彼此了解。",
    details: [
      "社區服務活動",
      "長者探訪或環保活動",
      "團隊合作任務",
      "服務技能培訓",
      "義工服務實踐",
      "服務反思分享",
      "頒發義工服務證書"
    ]
  },
  {
    id: 4,
    title: "內地大學體驗團",
    date: "2025年7月上旬",
    icon: MapPin,
    color: "amber",
    participants: "30人",
    description: "五日四夜或四日三夜的內地大學體驗團活動，讓香港中學生親身感受內地大學生活，了解內地升學機會。",
    timeline: [
      { month: "3月", event: "報名及面試" },
      { month: "4月", event: "團前簡介會及講座" },
      { month: "7月上旬", event: "內地大學體驗交流團（4-5日）" },
      { month: "8月", event: "團後分享會" }
    ],
    details: [
      "參觀內地頂尖大學校園",
      "體驗大學課堂",
      "與內地大學生交流",
      "了解內地升學途徑",
      "參觀當地文化景點",
      "撰寫交流心得"
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
              四大重點活動，促進香港與內地青年深入交流
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