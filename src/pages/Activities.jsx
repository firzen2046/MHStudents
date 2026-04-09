import React from 'react';
import { Calendar, Users, Award, MapPin, Presentation, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  {
    id: 1,
    title: "破冰啟航活動",
    date: "2026年3月22日",
    icon: Users,
    color: "purple",
    participants: "港漂青年",
    description: "首次破冰活動，透過遊戲互動認識彼此，建立第一個本地朋友圈。於香港漂波中，「聽見・漂行」鄧伴你踏出第一步。",
    details: [
      "進場簽到及破冰遊戲",
      "自我介紹互動環節",
      "香港本地青年和港漂互動",
      "建立港漂小組微信群",
      "分享在港生活的苦興與小技巧",
      "合照留念"
    ]
  },
  {
    id: 2,
    title: "粵語學習工作坊",
    date: "計劃期間",
    icon: Presentation,
    color: "blue",
    participants: "港漂青年",
    description: "許多港漂因語言障礙而不敢軽易開口說粵語。我們的工作坊通過趣味遊戲與實際演練，幫助您勇敢開口！",
    details: [
      "粵語日常用語學習",
      "淡語大電視趣味遊戲",
      "香港本地青年擔導粵語對話",
      "日常生活情境演練",
      "文化差異與用語習慣分享"
    ]
  },
  {
    id: 3,
    title: "社區服務體驗",
    date: "計劃期間",
    icon: Award,
    color: "emerald",
    participants: "港漂青年",
    description: "深入社區，體驗香港本地文化，幫助有需要的居民，展現港漂的气思與能外。",
    details: [
      "社區服務活動",
      "與本地居民面對面交流",
      "長者探訪或環保活動",
      "團隊合作任務",
      "服務反思分享"
    ]
  },
  {
    id: 4,
    title: "本地青年交流活動",
    date: "計劃期間",
    icon: MapPin,
    color: "amber",
    participants: "港漂 + 本地青年",
    description: "與香港本地青年面對面交流，打破文化隔閡，建立真實的跨文化友課關係。",
    details: [
      "本地青年和港漂組對互動",
      "共同參加香港特色活動",
      "分享各自文化背景與生活經驗",
      "建立持續朋友關係"
    ]
  },
  {
    id: 5,
    title: "中港兩地回饋項目暨領證書顓贈禮",
    date: "計劃期間",
    icon: Calendar,
    color: "rose",
    participants: "港漂青年",
    description: "參與跨境交流項目，獲頒活動策劃證書，成為更有影響力的青年領袖。",
    details: [
      "參與跨境交流項目",
      "計劃和執行活動",
      "獲頒活動策劃證書",
      "門註与與分享活動心得"
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
            <span className="text-purple-300 font-medium mb-4 block">計劃活動</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              聽見・漂行 — 活動詳情
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              從破冰到深度連結，幫助港漂找回归屬感
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