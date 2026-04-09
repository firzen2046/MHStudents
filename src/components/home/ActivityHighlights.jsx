import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Calendar, Users, Award, MapPin, Presentation } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  {
    id: 1,
    title: "破冰啟航活動",
    date: "2026年3月22日",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    participants: "港漂青年",
    description: "首次破冰活動，透過遊戲互動認識彼此，打開心扉，建立第一個本地朋友圈"
  },
  {
    id: 2,
    title: "粵語學習工作坊",
    date: "計劃期間",
    icon: Presentation,
    color: "from-blue-500 to-blue-600",
    participants: "港漂青年",
    description: "輕鬆有趣地學習粵語日常用語，突破語言障礙，勇敢開口說廣東話"
  },
  {
    id: 3,
    title: "社區服務體驗",
    date: "計劃期間",
    icon: Award,
    color: "from-emerald-500 to-emerald-600",
    participants: "港漂青年",
    description: "參與本地社區服務，深入了解香港文化，拓展本地人際網絡"
  },
  {
    id: 4,
    title: "本地青年交流活動",
    date: "計劃期間",
    icon: MapPin,
    color: "from-amber-500 to-amber-600",
    participants: "港漂 + 本地青年",
    description: "與香港本地青年互動交流，打破文化隔閡，擴大真實社交圈"
  },
  {
    id: 5,
    title: "中港兩地回饋項目",
    date: "計劃期間",
    icon: Calendar,
    color: "from-rose-500 to-rose-600",
    participants: "港漂青年",
    description: "參與跨境交流項目，獲頒活動策劃證書，成為更有影響力的青年領袖"
  }
];

export default function ActivityHighlights() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-medium mb-4 block">計劃活動</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            五大核心體驗
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            從破冰到深度連結，一步步幫助港漂找回歸屬感
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${activity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <activity.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    {activity.date}
                  </span>
                  <span className="text-sm text-gray-400">
                    {activity.participants}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to={createPageUrl("Activities")}
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            查看所有活動詳情
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}