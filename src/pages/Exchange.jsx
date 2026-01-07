import React, { useState } from 'react';
import { Globe, Users, Lightbulb, RefreshCw, CheckCircle2, X, BookOpen, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const slangPairs = [
  { mainland: "给力", hk: "勁", meaning: "厲害、很棒", example: "這件事真的太給力了！/ 呢件事真係好勁！" },
  { mainland: "点赞", hk: "Like / 讚", meaning: "表示支持認同", example: "我要给你点个赞！/ 我要畀個Like你！" },
  { mainland: "尬聊", hk: "傾偈", meaning: "聊天", example: "我们尬聊一下吧 / 我哋傾吓偈啦" },
  { mainland: "种草", hk: "中毒", meaning: "被推薦後想買某樣東西", example: "被你种草了！/ 你搞到我中毒！" },
  { mainland: "内卷", hk: "內捲", meaning: "過度競爭", example: "现在的竞争太内卷了" },
  { mainland: "躺平", hk: "躺平", meaning: "放棄競爭，選擇輕鬆生活", example: "我决定躺平了" },
  { mainland: "绝绝子", hk: "超正", meaning: "太棒了、絕了", example: "这个蛋糕绝绝子！/ 呢個蛋糕超正！" },
  { mainland: "凡尔赛", hk: "晒命", meaning: "低調炫耀", example: "他又在凡尔赛了 / 佢又喺度晒命" },
];

const culturalFacts = [
  {
    title: "飲食文化",
    hk: "飲茶是香港人重要的社交活動，點心、奶茶、菠蘿包是特色美食",
    mainland: "各地菜系豐富，火鍋、燒烤文化盛行，飲食習慣因地域差異大",
    icon: "🍜"
  },
  {
    title: "節日習俗",
    hk: "重視農曆新年、中秋節，利是文化獨特",
    mainland: "春節期間大規模人口流動，各地有獨特的節日習俗",
    icon: "🎊"
  },
  {
    title: "交通出行",
    hk: "八達通普及，地鐵巴士網絡發達，的士分紅綠藍三色",
    mainland: "高鐵網絡發達，共享單車普及，移動支付便利",
    icon: "🚇"
  },
  {
    title: "支付方式",
    hk: "八達通、PayMe、轉數快常用",
    mainland: "微信支付、支付寶普及，基本可以無現金生活",
    icon: "💳"
  },
  {
    title: "社交媒體",
    hk: "WhatsApp、Instagram、Facebook為主",
    mainland: "微信、微博、小紅書、抖音為主",
    icon: "📱"
  },
  {
    title: "學習生活",
    hk: "DSE公開考試，重視兩文三語",
    mainland: "高考制度，學習競爭激烈",
    icon: "📚"
  }
];

const quizQuestions = [
  { question: "「給力」的廣東話對應詞是？", options: ["勁", "正", "好", "型"], answer: 0 },
  { question: "香港人常用什麼App聊天？", options: ["微信", "WhatsApp", "抖音", "小紅書"], answer: 1 },
  { question: "「種草」在香港怎麼說？", options: ["買嘢", "中毒", "想要", "必買"], answer: 1 },
  { question: "香港的電子支付卡叫什麼？", options: ["交通卡", "八達通", "公交卡", "一卡通"], answer: 1 },
  { question: "「躺平」是什麼意思？", options: ["睡覺", "放棄競爭", "運動", "工作"], answer: 1 },
  { question: "「凡爾賽」指的是？", options: ["法國", "炫耀", "城堡", "旅行"], answer: 1 },
];

export default function Exchange() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    const correct = index === quizQuestions[currentQuestion].answer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setQuizStarted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-200 font-medium mb-4 block">文化交流</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              中港交流園地
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              了解兩地文化差異，促進互相理解
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="slang" className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="slang" className="text-base py-3">潮語對照</TabsTrigger>
            <TabsTrigger value="culture" className="text-base py-3">文化差異</TabsTrigger>
            <TabsTrigger value="quiz" className="text-base py-3">趣味問答</TabsTrigger>
          </TabsList>
          
          <TabsContent value="slang">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">內地與香港潮語對照表</h2>
                <p className="text-gray-600">了解兩地年輕人常用的流行用語</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {slangPairs.map((pair, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-4 bg-red-50 rounded-xl">
                            <p className="text-xs text-red-600 mb-2">內地</p>
                            <p className="text-2xl font-bold text-red-700">{pair.mainland}</p>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-xl">
                            <p className="text-xs text-blue-600 mb-2">香港</p>
                            <p className="text-2xl font-bold text-blue-700">{pair.hk}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">意思：</span>{pair.meaning}
                          </p>
                          <p className="text-sm text-gray-500 italic">
                            {pair.example}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="culture">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">兩地文化差異</h2>
                <p className="text-gray-600">了解香港與內地的生活文化差異</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {culturalFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <span className="text-3xl">{fact.icon}</span>
                          <span>{fact.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-xl">
                          <p className="text-xs text-blue-600 font-medium mb-2">🇭🇰 香港</p>
                          <p className="text-sm text-gray-700">{fact.hk}</p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-xl">
                          <p className="text-xs text-red-600 font-medium mb-2">🇨🇳 內地</p>
                          <p className="text-sm text-gray-700">{fact.mainland}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="quiz">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              {!quizStarted ? (
                <div className="text-center bg-white rounded-3xl shadow-xl p-12">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-12 h-12 text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">文化交流小測驗</h2>
                  <p className="text-gray-600 mb-8">
                    測試一下你對香港和內地文化的了解程度！
                  </p>
                  <Button 
                    onClick={() => setQuizStarted(true)}
                    className="bg-blue-500 hover:bg-blue-600 px-8 py-6 text-lg"
                  >
                    開始測驗
                  </Button>
                </div>
              ) : !showResult ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl shadow-xl p-8"
                >
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-sm text-gray-500">
                      問題 {currentQuestion + 1} / {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      得分：{score}
                    </span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {quizQuestions[currentQuestion].question}
                  </h2>

                  <div className="space-y-4">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => selectedAnswer === null && handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                          selectedAnswer === index
                            ? isCorrect
                              ? "border-emerald-500 bg-emerald-50"
                              : "border-red-500 bg-red-50"
                            : selectedAnswer !== null && index === quizQuestions[currentQuestion].answer
                              ? "border-emerald-500 bg-emerald-50"
                              : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          {selectedAnswer === index && (
                            isCorrect 
                              ? <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                              : <X className="w-6 h-6 text-red-500" />
                          )}
                          {selectedAnswer !== null && index === quizQuestions[currentQuestion].answer && selectedAnswer !== index && (
                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-xl p-8 text-center"
                >
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-12 h-12 text-blue-500" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    測驗完成！
                  </h2>
                  
                  <p className="text-6xl font-bold text-blue-500 mb-2">
                    {score}/{quizQuestions.length}
                  </p>
                  <p className="text-gray-600 mb-8">
                    {score === quizQuestions.length 
                      ? "太棒了！你對兩地文化非常了解！" 
                      : score >= quizQuestions.length / 2 
                        ? "不錯！繼續探索更多文化知識！" 
                        : "加油！多了解兩地文化差異吧！"}
                  </p>

                  <Button 
                    onClick={resetQuiz}
                    className="bg-blue-500 hover:bg-blue-600 px-8 py-6 text-lg"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    再試一次
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}