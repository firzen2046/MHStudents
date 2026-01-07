import React, { useState } from 'react';
import { GraduationCap, Building2, MapPin, Users, BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const hkUniversities = [
  {
    name: "香港大學",
    shortName: "HKU",
    ranking: "亞洲排名第4",
    location: "薄扶林",
    students: "約30,000人",
    website: "https://www.hku.hk",
    strengths: ["醫學", "法律", "商科", "工程"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400"
  },
  {
    name: "香港中文大學",
    shortName: "CUHK",
    ranking: "亞洲排名第10",
    location: "沙田",
    students: "約20,000人",
    website: "https://www.cuhk.edu.hk",
    strengths: ["商科", "文學", "社會科學", "醫學"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
  },
  {
    name: "香港科技大學",
    shortName: "HKUST",
    ranking: "亞洲排名第3",
    location: "清水灣",
    students: "約16,000人",
    website: "https://www.ust.hk",
    strengths: ["工程", "商科", "科學", "計算機"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"
  },
  {
    name: "香港理工大學",
    shortName: "PolyU",
    ranking: "亞洲排名第26",
    location: "紅磡",
    students: "約27,000人",
    website: "https://www.polyu.edu.hk",
    strengths: ["設計", "酒店管理", "工程", "醫療"],
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400"
  },
  {
    name: "香港城市大學",
    shortName: "CityU",
    ranking: "亞洲排名第18",
    location: "九龍塘",
    students: "約20,000人",
    website: "https://www.cityu.edu.hk",
    strengths: ["商科", "工程", "創意媒體", "法律"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400"
  },
  {
    name: "香港浸會大學",
    shortName: "HKBU",
    ranking: "亞洲排名第64",
    location: "九龍塘",
    students: "約11,000人",
    website: "https://www.hkbu.edu.hk",
    strengths: ["傳理", "中醫藥", "視覺藝術", "商科"],
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400"
  }
];

const mainlandUniversities = [
  {
    name: "北京大學",
    shortName: "PKU",
    ranking: "中國排名第1",
    location: "北京",
    students: "約40,000人",
    website: "https://www.pku.edu.cn",
    strengths: ["文理", "社會科學", "醫學", "法律"],
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400"
  },
  {
    name: "清華大學",
    shortName: "THU",
    ranking: "中國排名第2",
    location: "北京",
    students: "約50,000人",
    website: "https://www.tsinghua.edu.cn",
    strengths: ["工程", "計算機", "經濟", "建築"],
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400"
  },
  {
    name: "復旦大學",
    shortName: "Fudan",
    ranking: "中國排名第3",
    location: "上海",
    students: "約35,000人",
    website: "https://www.fudan.edu.cn",
    strengths: ["新聞傳播", "醫學", "經濟", "數學"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400"
  },
  {
    name: "浙江大學",
    shortName: "ZJU",
    ranking: "中國排名第4",
    location: "杭州",
    students: "約60,000人",
    website: "https://www.zju.edu.cn",
    strengths: ["工程", "農業", "計算機", "醫學"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400"
  },
  {
    name: "中山大學",
    shortName: "SYSU",
    ranking: "中國排名第9",
    location: "廣州",
    students: "約65,000人",
    website: "https://www.sysu.edu.cn",
    strengths: ["醫學", "商科", "社會科學", "哲學"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"
  },
  {
    name: "暨南大學",
    shortName: "JNU",
    ranking: "中國排名第53",
    location: "廣州",
    students: "約40,000人",
    website: "https://www.jnu.edu.cn",
    strengths: ["新聞傳播", "中醫藥", "經濟", "華僑華人研究"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400"
  }
];

const UniversityCard = ({ uni }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
  >
    <div className="h-48 overflow-hidden">
      <img 
        src={uni.image} 
        alt={uni.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900">{uni.name}</h3>
        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          {uni.shortName}
        </span>
      </div>
      
      <p className="text-amber-600 font-medium mb-4">{uni.ranking}</p>
      
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>{uni.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-400" />
          <span>{uni.students}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">優勢學科</p>
        <div className="flex flex-wrap gap-2">
          {uni.strengths.map((s, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {s}
            </span>
          ))}
        </div>
      </div>

      <a href={uni.website} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="w-full">
          訪問官網
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </a>
    </div>
  </motion.div>
);

export default function StudyInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-purple-300 font-medium mb-4 block">升學指南</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              兩地升學資訊
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              香港及內地頂尖大學介紹，助你規劃升學路
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="hk" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="hk" className="text-lg py-3">香港大學</TabsTrigger>
            <TabsTrigger value="mainland" className="text-lg py-3">內地大學</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hk">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <div className="bg-white rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">香港升學途徑</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <h3 className="font-semibold text-purple-800 mb-2">JUPAS聯招</h3>
                    <p className="text-sm text-gray-600">DSE考生主要升學途徑</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <h3 className="font-semibold text-purple-800 mb-2">Non-JUPAS</h3>
                    <p className="text-sm text-gray-600">適合非聯招申請人</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <h3 className="font-semibold text-purple-800 mb-2">副學位</h3>
                    <p className="text-sm text-gray-600">副學士/高級文憑課程</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hkUniversities.map((uni, i) => (
                <UniversityCard key={i} uni={uni} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mainland">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <div className="bg-white rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">內地升學途徑</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <h3 className="font-semibold text-amber-800 mb-2">DSE免試招生</h3>
                    <p className="text-sm text-gray-600">憑DSE成績直接申請</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <h3 className="font-semibold text-amber-800 mb-2">港澳台聯招</h3>
                    <p className="text-sm text-gray-600">專為港澳台學生設立</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <h3 className="font-semibold text-amber-800 mb-2">院校獨立招生</h3>
                    <p className="text-sm text-gray-600">部分院校自行招生</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainlandUniversities.map((uni, i) => (
                <UniversityCard key={i} uni={uni} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}