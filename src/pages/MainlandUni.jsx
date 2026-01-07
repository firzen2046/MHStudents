import React from 'react';
import { GraduationCap, MapPin, Users, Building2, Star, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const universities = [
  {
    name: "北京大學",
    location: "北京",
    ranking: "中國排名第1",
    established: "1898年",
    students: "約45,000人",
    description: "中國最頂尖的綜合性大學，文理科實力雄厚",
    strengths: ["哲學", "中文", "歷史", "數學", "物理", "化學", "生物", "法學"],
    features: [
      "未名湖和博雅塔是校園標誌",
      "圖書館藏書超過1100萬冊",
      "擁有多個國家重點實驗室"
    ],
    admissionTips: "文科要求DSE成績優異，面試表現重要",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600"
  },
  {
    name: "清華大學",
    location: "北京",
    ranking: "中國排名第2",
    established: "1911年",
    students: "約50,000人",
    description: "中國最頂尖的理工科大學，工程和科技領域實力領先",
    strengths: ["工程", "計算機", "建築", "經濟管理", "設計", "物理"],
    features: [
      "擁有世界一流的工程學院",
      "校園環境優美，有荷塘月色",
      "創新創業氛圍濃厚"
    ],
    admissionTips: "理科要求DSE數學和物理成績優異",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600"
  },
  {
    name: "復旦大學",
    location: "上海",
    ranking: "中國排名第3",
    established: "1905年",
    students: "約35,000人",
    description: "上海最著名的綜合性大學，人文社科實力強",
    strengths: ["新聞傳播", "經濟", "醫學", "數學", "生物", "歷史"],
    features: [
      "位於上海市中心，地理位置優越",
      "國際化程度高",
      "就業前景優秀"
    ],
    admissionTips: "綜合實力要求高，面試著重溝通能力",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600"
  },
  {
    name: "浙江大學",
    location: "杭州",
    ranking: "中國排名第4",
    established: "1897年",
    students: "約60,000人",
    description: "規模最大的綜合性大學之一，學科覆蓋面廣",
    strengths: ["計算機", "控制科學", "農業", "光學", "材料", "機械"],
    features: [
      "校園環境優美，靠近西湖",
      "學科門類齊全",
      "科研實力強勁"
    ],
    admissionTips: "適合喜歡杭州城市環境的學生",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600"
  },
  {
    name: "中山大學",
    location: "廣州",
    ranking: "中國排名第9",
    established: "1924年",
    established_by: "孫中山先生",
    students: "約65,000人",
    description: "華南地區最著名的大學，對港澳學生特別友好",
    strengths: ["醫學", "哲學", "經濟學", "管理學", "社會學", "人類學"],
    features: [
      "距離香港近，往來便利",
      "校園有濃厚的嶺南文化氣息",
      "港澳學生比例較高"
    ],
    admissionTips: "對港澳學生特別友好，是熱門選擇",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600"
  },
  {
    name: "暨南大學",
    location: "廣州",
    ranking: "僑校第一",
    established: "1906年",
    students: "約40,000人",
    description: "中國歷史最悠久的華僑高等學府，港澳台學生首選",
    strengths: ["新聞傳播", "中醫藥", "經濟", "華僑華人研究", "中文"],
    features: [
      "專門面向港澳台和海外招生",
      "港澳台學生佔比高達50%",
      "粵語授課課程豐富"
    ],
    admissionTips: "港澳台聯招主要選擇，入學門檻相對較低",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600"
  },
  {
    name: "上海交通大學",
    location: "上海",
    ranking: "中國排名第5",
    established: "1896年",
    students: "約45,000人",
    description: "以工科見長的頂尖大學，醫學和商科也很強",
    strengths: ["機械", "船舶", "材料", "醫學", "管理", "電子信息"],
    features: [
      "交大安泰商學院享譽全球",
      "醫學院實力雄厚",
      "與國際接軌程度高"
    ],
    admissionTips: "適合對工科和商科有興趣的學生",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600"
  },
  {
    name: "武漢大學",
    location: "武漢",
    ranking: "中國排名第8",
    established: "1893年",
    students: "約58,000人",
    description: "校園被譽為「中國最美大學」，櫻花季遊人如織",
    strengths: ["測繪", "水利", "法學", "圖書館學", "新聞傳播", "生物"],
    features: [
      "校園依山傍水，風景優美",
      "每年三月櫻花節吸引大批遊客",
      "歷史建築群保存完好"
    ],
    admissionTips: "適合喜歡優美校園環境的學生",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600"
  }
];

export default function MainlandUni() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-pink-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-rose-200 font-medium mb-4 block">升學指南</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              內地大學導覽
            </h1>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              深入了解內地頂尖大學，為升學做好準備
            </p>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">香港學生內地升學途徑</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-rose-50 rounded-xl">
              <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">DSE免試招生</h3>
              <p className="text-sm text-gray-600">
                憑DSE成績直接申請，約130所內地高校參與計劃
              </p>
            </div>
            <div className="p-6 bg-rose-50 rounded-xl">
              <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">港澳台聯招</h3>
              <p className="text-sm text-gray-600">
                每年5月考試，約300所高校招收港澳台學生
              </p>
            </div>
            <div className="p-6 bg-rose-50 rounded-xl">
              <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">院校獨立招生</h3>
              <p className="text-sm text-gray-600">
                部分院校自行招收港澳台學生，通常設有面試
              </p>
            </div>
          </div>
        </motion.div>

        {/* Universities */}
        <div className="space-y-8">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-3">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={uni.image} 
                      alt={uni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="lg:col-span-2 p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{uni.name}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="flex items-center text-gray-500 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {uni.location}
                          </span>
                          <span className="text-rose-600 font-medium text-sm">
                            {uni.ranking}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        {uni.students}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{uni.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">優勢學科</h4>
                      <div className="flex flex-wrap gap-2">
                        {uni.strengths.map((s, i) => (
                          <span key={i} className="bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">學校特色</h4>
                      <ul className="space-y-2">
                        {uni.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                            <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-xl">
                      <p className="text-amber-800 text-sm">
                        <span className="font-semibold">入學提示：</span> {uni.admissionTips}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}