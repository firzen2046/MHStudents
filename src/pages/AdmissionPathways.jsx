import React, { useState } from 'react';
import { FileText, CheckCircle2, GraduationCap, BookOpen, Award, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const dseRequirements = [
  { level: "頂尖大學", schools: "北京大學、清華大學、復旦大學", requirements: "3-3-3-3 或以上，通常需4科達3級或以上" },
  { level: "985工程大學", schools: "浙江大學、上海交通大學、中山大學", requirements: "3-3-2-2 或以上，部分熱門專業要求更高" },
  { level: "211工程大學", schools: "暨南大學、華南理工大學", requirements: "2-2-2-2 或以上，個別專業接受2-2-1-1" },
  { level: "一般本科大學", schools: "廣州大學、深圳大學", requirements: "2-2-1-1 或 2-1-1-1，部分院校接受1-1-1-1" },
];

export default function AdmissionPathways() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-indigo-200 font-medium mb-4 block">升學指南</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">升學途徑</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              了解香港學生升讀內地大學的各種途徑及要求
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="dse" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="dse">DSE免試招生</TabsTrigger>
            <TabsTrigger value="联招">港澳台聯招</TabsTrigger>
            <TabsTrigger value="scores">收生分數</TabsTrigger>
          </TabsList>

          {/* DSE免試招生 */}
          <TabsContent value="dse">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Card className="mb-8">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl">DSE免試招生計劃</h2>
                      <p className="text-sm text-gray-600 font-normal mt-1">憑DSE成績直接申請內地大學</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                        計劃簡介
                      </h3>
                      <div className="bg-indigo-50 rounded-xl p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700"><strong>參與院校：</strong>約130所內地高等院校</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700"><strong>申請時間：</strong>每年3-4月網上報名</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700"><strong>基本要求：</strong>4個核心科目達到最低要求（一般為3-3-2-2）</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700"><strong>費用：</strong>免報名費</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-indigo-500" />
                        申請流程
                      </h3>
                      <div className="grid md:grid-cols-4 gap-4">
                        {["網上報名", "上傳文件", "查詢結果", "確認入學"].map((step, i) => (
                          <div key={i} className="bg-white border-2 border-indigo-100 rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                              {i + 1}
                            </div>
                            <p className="font-medium text-gray-900">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-indigo-500" />
                        優勢
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50 rounded-xl p-4">
                          <p className="text-emerald-800">✓ 無需額外考試</p>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-4">
                          <p className="text-emerald-800">✓ 免報名費</p>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-4">
                          <p className="text-emerald-800">✓ 院校選擇多</p>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-4">
                          <p className="text-emerald-800">✓ 手續簡便</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 港澳台聯招 */}
          <TabsContent value="联招">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Card className="mb-8">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl">港澳台僑聯合招生考試</h2>
                      <p className="text-sm text-gray-600 font-normal mt-1">專為港澳台學生設立的統一考試</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">考試簡介</h3>
                      <div className="bg-purple-50 rounded-xl p-6">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700"><strong>參與院校：</strong>約300所內地高校</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700"><strong>報名時間：</strong>每年3月</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700"><strong>考試時間：</strong>每年5月中旬</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700"><strong>考試科目：</strong>文科（中文、數學、英語、歷史、地理）；理科（中文、數學、英語、物理、化學）</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">分數線參考</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                          <span className="font-medium text-gray-900">一本線（重點大學）</span>
                          <span className="text-lg font-bold text-red-600">400-450分</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                          <span className="font-medium text-gray-900">二本線（普通本科）</span>
                          <span className="text-lg font-bold text-blue-600">300-400分</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <span className="font-medium text-gray-900">藝術類/體育類</span>
                          <span className="text-lg font-bold text-gray-600">200-300分</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-amber-900 mb-2">注意事項</p>
                          <ul className="text-sm text-amber-800 space-y-1">
                            <li>• 需提前報名並繳交報名費</li>
                            <li>• 需親自到指定考場應考</li>
                            <li>• 考試難度相對DSE較低</li>
                            <li>• 適合有時間準備額外考試的學生</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* DSE收生分數 */}
          <TabsContent value="scores">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Card>
                <CardHeader className="bg-gradient-to-r from-rose-50 to-orange-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl">DSE收生分數參考</h2>
                      <p className="text-sm text-gray-600 font-normal mt-1">不同層次院校的一般要求</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {dseRequirements.map((level, index) => (
                      <motion.div
                        key={level.level}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{level.level}</h3>
                            <p className="text-sm text-gray-600 mb-3">代表院校：{level.schools}</p>
                            <div className="bg-rose-50 rounded-lg p-3">
                              <p className="text-sm font-medium text-rose-800">
                                <span className="font-bold">最低要求：</span>{level.requirements}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 bg-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">計分說明</h3>
                    <div className="space-y-2 text-sm text-blue-800">
                      <p>• DSE分數以「中-英-數-通」四個核心科目計算</p>
                      <p>• 5** = 5星星，5* = 5星，5-1 代表不同等級</p>
                      <p>• 「3-3-2-2」表示中英數通分別達到3、3、2、2級</p>
                      <p>• 個別院校會參考選修科成績</p>
                      <p>• 熱門專業（如醫學、法律）要求通常較高</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-amber-50 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="font-semibold text-amber-900 mb-2">重要提示</p>
                        <ul className="text-sm text-amber-800 space-y-1">
                          <li>• 以上為一般參考，實際收生要求可能因年份及專業而異</li>
                          <li>• 部分院校會進行面試</li>
                          <li>• 建議提前查詢目標院校的具體要求</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}