import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { GraduationCap, MessageCircle, Compass, BookOpen, Map, School } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  {
    title: "兩地升學資訊",
    description: "香港及內地大學升學指南",
    icon: GraduationCap,
    page: "StudyInfo",
    color: "bg-purple-500",
    gradient: "from-purple-50 to-purple-100"
  },
  {
    title: "廣東話學習",
    description: "有趣遊戲輕鬆學廣東話",
    icon: MessageCircle,
    page: "CantoneseLearn",
    color: "bg-amber-500",
    gradient: "from-amber-50 to-amber-100"
  },
  {
    title: "中港交流園地",
    description: "遊戲與資訊促進文化交流",
    icon: Compass,
    page: "Exchange",
    color: "bg-blue-500",
    gradient: "from-blue-50 to-blue-100"
  },
  {
    title: "香港好去處",
    description: "探索香港必去景點",
    icon: Map,
    page: "HKPlaces",
    color: "bg-emerald-500",
    gradient: "from-emerald-50 to-emerald-100"
  },
  {
    title: "內地大學導覽",
    description: "熱門內地大學介紹",
    icon: School,
    page: "MainlandUni",
    color: "bg-rose-500",
    gradient: "from-rose-50 to-rose-100"
  },
  {
    title: "學科推介",
    description: "熱門學科及就業前景",
    icon: BookOpen,
    page: "Subjects",
    color: "bg-indigo-500",
    gradient: "from-indigo-50 to-indigo-100"
  }
];

export default function QuickLinks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-medium mb-4 block">探索更多</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            資源與學習
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            豐富的升學資訊、語言學習及文化交流資源
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.page}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={createPageUrl(link.page)}>
                <div className={`bg-gradient-to-br ${link.gradient} rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group`}>
                  <div className={`w-14 h-14 ${link.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {link.description}
                  </p>

                  <div className="mt-4 flex items-center text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>了解更多</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}