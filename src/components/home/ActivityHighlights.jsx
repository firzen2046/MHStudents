import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Calendar, Users, Award, MapPin, Presentation } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  {
    id: 1,
    title: "認識日",
    date: "2026年3月",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    participants: "100人",
    description: "認識彼此，結伴同行 - 透過配對活動讓中學生與港漂學生建立聯繫"
  },
  {
    id: 2,
    title: "學習日",
    date: "2026年4月",
    icon: Presentation,
    color: "from-blue-500 to-blue-600",
    participants: "100人",
    description: "互相學習，你授與廣東話，他授與國內留學經驗及心得"
  },
  {
    id: 3,
    title: "義工日",
    date: "2025年5月",
    icon: Award,
    color: "from-emerald-500 to-emerald-600",
    participants: "100人",
    description: "服務社會，訓練自己 - 參與社區服務，培養社會責任感"
  },
  {
    id: 4,
    title: "內地大學體驗團",
    date: "2025年7月上旬",
    icon: MapPin,
    color: "from-amber-500 to-amber-600",
    participants: "30人",
    description: "五日四夜或四日三夜體驗團，讓香港中學生親身感受內地大學生活"
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
          <span className="text-purple-600 font-medium mb-4 block">精彩活動</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            四大重點活動
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            透過多元化活動促進香港與內地青年深入交流
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