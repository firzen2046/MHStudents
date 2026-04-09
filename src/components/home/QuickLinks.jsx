import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MessageCircle, Briefcase, Home, BookOpen, Map, Heart, CreditCard, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  {
    title: "求職指南",
    description: "求職平台、行業資訊及就業秘訣",
    icon: Briefcase,
    page: "JobSearch",
    color: "bg-blue-500",
    gradient: "from-blue-50 to-blue-100"
  },
  {
    title: "住房指南",
    description: "租房平台、地區選擇及實用建議",
    icon: Home,
    page: "Housing",
    color: "bg-emerald-500",
    gradient: "from-emerald-50 to-emerald-100"
  },
  {
    title: "教育資源",
    description: "進修課程、香港大學及子女教育",
    icon: BookOpen,
    page: "Education",
    color: "bg-violet-500",
    gradient: "from-violet-50 to-violet-100"
  },
  {
    title: "銀行及保險",
    description: "開戶流程、銀行比較及保險指引",
    icon: CreditCard,
    page: "Banking",
    color: "bg-rose-500",
    gradient: "from-rose-50 to-rose-100"
  },
  {
    title: "廣東話學習",
    description: "情景對話、詞彙學習及配音影片",
    icon: MessageCircle,
    page: "CantoneseLearn",
    color: "bg-amber-500",
    gradient: "from-amber-50 to-amber-100"
  },
  {
    title: "社群網絡",
    description: "港漂社群、支援組織及活動資訊",
    icon: Heart,
    page: "Community",
    color: "bg-teal-500",
    gradient: "from-teal-50 to-teal-100"
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
            求職、住房、教育、銀行、社群等港漂實用資源
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