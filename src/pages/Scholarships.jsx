import React from 'react';
import { DollarSign, Award, TrendingUp, CheckCircle2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const scholarships = [
  {
    name: "香港特區政府獎學金",
    amount: "每年$80,000",
    eligibility: "於內地大學就讀的香港學生",
    quota: "約50名",
    application: "透過就讀院校提名",
    website: "https://www.edb.gov.hk",
    color: "from-red-500 to-red-600"
  },
  {
    name: "內地大學升學資助計劃",
    amount: "每年$5,000（學習開支）+ $7,000（生活費）",
    eligibility: "經濟需要的香港學生",
    quota: "不限",
    application: "向學資處申請",
    website: "https://www.wfsfaa.gov.hk",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "免入息審查資助",
    amount: "每年$5,600",
    eligibility: "所有在內地大學就讀的香港學生",
    quota: "不限",
    application: "向學資處申請",
    website: "https://www.wfsfaa.gov.hk",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    name: "內地大學新生入學獎學金",
    amount: "首年$10,000-$30,000",
    eligibility: "DSE成績優異的新生",
    quota: "各校不同",
    application: "自動評審或透過院校申請",
    website: "各院校網站",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "港澳台僑獎學金",
    amount: "本科$5,000-$8,000/年",
    eligibility: "成績優秀的港澳台僑學生",
    quota: "各校不同",
    application: "透過就讀院校申請",
    website: "各院校網站",
    color: "from-amber-500 to-amber-600"
  },
  {
    name: "暨南大學優秀新生獎學金",
    amount: "$15,000-$30,000",
    eligibility: "DSE成績達4科17分以上",
    quota: "不限",
    application: "自動評審",
    website: "https://www.jnu.edu.cn",
    color: "from-rose-500 to-rose-600"
  }
];

const subsidyInfo = [
  {
    title: "學費資助",
    items: [
      "內地大學學費一般為RMB 5,000-6,000/年",
      "遠低於香港大學學費",
      "部分院校對港澳台學生有特別優惠"
    ]
  },
  {
    title: "住宿資助",
    items: [
      "學生宿舍費用約RMB 1,000-2,000/年",
      "部分院校為港澳生提供優先住宿",
      "校內住宿安全便利"
    ]
  },
  {
    title: "生活開支",
    items: [
      "內地生活費用較香港低",
      "一般每月RMB 2,000-3,000已足夠",
      "包括飲食、交通等日常開支"
    ]
  }
];

export default function Scholarships() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-200 font-medium mb-4 block">升學指南</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">資助與獎學金</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              多元化資助計劃，助你實現內地升學夢想
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">最高資助</h3>
            <p className="text-3xl font-bold text-amber-600">$92,000</p>
            <p className="text-sm text-gray-600 mt-2">每年（獎學金+資助）</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">免入息審查</h3>
            <p className="text-3xl font-bold text-emerald-600">$5,600</p>
            <p className="text-sm text-gray-600 mt-2">每年自動資助</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">成本節省</h3>
            <p className="text-3xl font-bold text-blue-600">50-70%</p>
            <p className="text-sm text-gray-600 mt-2">相比香港升學</p>
          </motion.div>
        </div>

        {/* Scholarships */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">獎學金及資助計劃</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${scholarship.color} text-white`}>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6" />
                    <div>
                      <p className="text-xl">{scholarship.name}</p>
                      <p className="text-sm opacity-90 font-normal mt-1">{scholarship.amount}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">申請資格</p>
                      <p className="font-medium text-gray-900">{scholarship.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">名額</p>
                      <p className="font-medium text-gray-900">{scholarship.quota}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">申請方法</p>
                      <p className="font-medium text-gray-900">{scholarship.application}</p>
                    </div>
                    {scholarship.website !== "各院校網站" && (
                      <a href={scholarship.website} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                          了解詳情
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Subsidy Information */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">費用資訊</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {subsidyInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {info.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Application Tips */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">申請貼士</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">提早準備</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 了解各項資助計劃的申請要求</li>
                  <li>• 準備所需文件（成績單、身份證明等）</li>
                  <li>• 留意申請截止日期</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">多方申請</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 同時申請多項獎學金</li>
                  <li>• 向院校查詢校內獎學金</li>
                  <li>• 關注最新資助計劃公告</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}