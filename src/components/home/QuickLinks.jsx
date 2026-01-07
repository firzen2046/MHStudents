import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { GraduationCap, MessageCircle, Compass, BookOpen, Map, School } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  {
    title: "內地大學數據庫",
    description: "搜尋20+所內地大學",
    icon: School,
    page: "MainlandUniDatabase",
    color: "bg-rose-500",
    gradient: "from-rose-50 to-rose-100"
  },
  {
    title: "升學途徑",
    description: "DSE免試、聯招考試資訊",
    icon: GraduationCap,
    page: "AdmissionPathways",
    color: "bg-indigo-500",
    gradient: "from-indigo-50 to-indigo-100"
  },
  {
    title: "資助與獎學金",
    description: "各類升學資助計劃",
    icon: BookOpen,
    page: "Scholarships",
    color: "bg-amber-500",
    gradient: "from-amber-50 to-amber-100"
  },
  {
    title: "港漂支援機構",
    description: "各類支援組織及計劃",
    icon: Compass,
    page: "SupportOrganizations",
    color: "bg-blue-500",
    gradient: "from-blue-50 to-blue-100"
  },
  {
    title: "港漂生活資訊",
    description: "住宿、交通、飲食指南",
    icon: Map,
    page: "LivingInfo",
    color: "bg-teal-500",
    gradient: "from-teal-50 to-teal-100"
  },
  {
    title: "廣東話學習",
    description: "有趣遊戲輕鬆學廣東話",
    icon: MessageCircle,
    page: "CantoneseLearn",
    color: "bg-purple-500",
    gradient: "from-purple-50 to-purple-100"
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