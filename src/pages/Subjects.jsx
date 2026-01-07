import React, { useState } from 'react';
import { BookOpen, TrendingUp, Briefcase, GraduationCap, Star, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const subjects = [
  {
    name: "計算機科學 / 電腦科學",
    category: "科技",
    demand: "極高",
    salary: "起薪$18,000-30,000",
    description: "涵蓋軟件開發、人工智能、大數據等領域，是當今最熱門的學科之一",
    skills: ["編程", "算法", "數據分析", "系統設計"],
    careers: ["軟件工程師", "數據科學家", "AI工程師", "系統架構師"],
    hkUni: ["香港科技大學", "香港中文大學", "香港大學"],
    mainlandUni: ["清華大學", "北京大學", "浙江大學"],
    outlook: "科技行業持續高速發展，人才需求旺盛，薪酬競爭力強"
  },
  {
    name: "醫學",
    category: "醫療",
    demand: "高",
    salary: "起薪$55,000-70,000",
    description: "培養醫療專業人才，課程時間長但就業穩定，社會地位高",
    skills: ["臨床技能", "醫學知識", "溝通能力", "抗壓能力"],
    careers: ["醫生", "專科醫生", "醫學研究員", "公共衛生專家"],
    hkUni: ["香港大學", "香港中文大學"],
    mainlandUni: ["北京大學", "復旦大學", "中山大學"],
    outlook: "醫療人才持續短缺，就業保障高，但入學競爭激烈"
  },
  {
    name: "金融 / 經濟",
    category: "商科",
    demand: "高",
    salary: "起薪$18,000-35,000",
    description: "涵蓋銀行、投資、保險等領域，是商業世界的核心學科",
    skills: ["財務分析", "風險管理", "數據分析", "溝通技巧"],
    careers: ["投資銀行家", "分析師", "基金經理", "風險管理師"],
    hkUni: ["香港大學", "香港科技大學", "香港中文大學"],
    mainlandUni: ["北京大學", "清華大學", "復旦大學"],
    outlook: "金融中心地位穩固，但行業競爭激烈，需要持續進修"
  },
  {
    name: "法律",
    category: "專業",
    demand: "中高",
    salary: "起薪$25,000-45,000",
    description: "培養法律專業人才，需要較長的學習和實習時間",
    skills: ["法律研究", "邏輯思維", "辯論能力", "文書撰寫"],
    careers: ["律師", "大律師", "法律顧問", "企業法務"],
    hkUni: ["香港大學", "香港中文大學", "香港城市大學"],
    mainlandUni: ["北京大學", "清華大學", "中國政法大學"],
    outlook: "法律專業人才需求穩定，尤其是跨境法律服務需求增加"
  },
  {
    name: "數據科學 / 統計學",
    category: "科技",
    demand: "極高",
    salary: "起薪$20,000-35,000",
    description: "結合數學、統計和計算機，分析大數據提取有價值信息",
    skills: ["統計分析", "機器學習", "數據可視化", "商業洞察"],
    careers: ["數據分析師", "商業分析師", "AI研究員", "量化分析師"],
    hkUni: ["香港科技大學", "香港中文大學", "香港大學"],
    mainlandUni: ["北京大學", "清華大學", "復旦大學"],
    outlook: "大數據時代人才需求激增，各行各業都需要數據專才"
  },
  {
    name: "工程學（土木/機械/電機）",
    category: "工程",
    demand: "高",
    salary: "起薪$16,000-25,000",
    description: "培養專業工程師，參與基礎建設和工業發展",
    skills: ["工程設計", "項目管理", "技術分析", "團隊合作"],
    careers: ["工程師", "項目經理", "技術顧問", "研發工程師"],
    hkUni: ["香港大學", "香港科技大學", "香港理工大學"],
    mainlandUni: ["清華大學", "浙江大學", "上海交通大學"],
    outlook: "大灣區發展帶動基建需求，工程人才持續受歡迎"
  },
  {
    name: "新聞傳播 / 媒體",
    category: "人文",
    demand: "中",
    salary: "起薪$14,000-20,000",
    description: "培養媒體和傳播專業人才，適應數字媒體時代",
    skills: ["新聞寫作", "影片製作", "社交媒體", "公關技巧"],
    careers: ["記者", "編輯", "公關專員", "內容創作者"],
    hkUni: ["香港浸會大學", "香港中文大學", "香港城市大學"],
    mainlandUni: ["復旦大學", "中國傳媒大學", "暨南大學"],
    outlook: "傳統媒體轉型，數字媒體和內容創作需求增加"
  },
  {
    name: "護理學",
    category: "醫療",
    demand: "極高",
    salary: "起薪$30,000-40,000",
    description: "培養專業護理人員，人口老化帶動需求增長",
    skills: ["臨床護理", "病人照顧", "溝通能力", "應急處理"],
    careers: ["註冊護士", "專科護士", "護士長", "社區護士"],
    hkUni: ["香港大學", "香港中文大學", "香港理工大學"],
    mainlandUni: ["北京大學", "復旦大學", "中山大學"],
    outlook: "護士人手長期短缺，就業前景非常穩定"
  }
];

const categories = ["全部", "科技", "醫療", "商科", "專業", "工程", "人文"];

export default function Subjects() {
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredSubjects = selectedCategory === "全部"
    ? subjects
    : subjects.filter(s => s.category === selectedCategory);

  const getDemandColor = (demand) => {
    switch(demand) {
      case "極高": return "bg-emerald-100 text-emerald-700";
      case "高": return "bg-blue-100 text-blue-700";
      case "中高": return "bg-amber-100 text-amber-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-indigo-200 font-medium mb-4 block">學科指南</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              學科推介
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              了解熱門學科的就業前景，助你作出明智升學選擇
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-50 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subjects */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {filteredSubjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{subject.name}</CardTitle>
                          <p className="text-indigo-100 text-sm mt-1">{subject.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDemandColor(subject.demand)}`}>
                          需求：{subject.demand}
                        </span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {subject.salary}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-gray-600 mb-6">{subject.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-500" />
                          核心技能
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {subject.skills.map((skill, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-indigo-500" />
                          就業出路
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {subject.careers.map((career, i) => (
                            <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <h4 className="font-semibold text-blue-800 mb-2">🇭🇰 香港推薦大學</h4>
                        <ul className="space-y-1">
                          {subject.hkUni.map((uni, i) => (
                            <li key={i} className="text-sm text-blue-700">• {uni}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-red-50 rounded-xl">
                        <h4 className="font-semibold text-red-800 mb-2">🇨🇳 內地推薦大學</h4>
                        <ul className="space-y-1">
                          {subject.mainlandUni.map((uni, i) => (
                            <li key={i} className="text-sm text-red-700">• {uni}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-xl">
                      <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        就業前景
                      </h4>
                      <p className="text-emerald-700 text-sm">{subject.outlook}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}