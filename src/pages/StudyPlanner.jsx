import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, RefreshCw, GraduationCap, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "你的DSE預計成績範圍是？",
    options: [
      { value: "top", label: "4科17分以上 (3-3-3-3或以上)", score: { tier1: 10, tier2: 5 } },
      { value: "high", label: "4科14-16分 (3-3-2-2左右)", score: { tier1: 8, tier2: 7 } },
      { value: "mid", label: "4科10-13分 (2-2-2-2左右)", score: { tier1: 5, tier2: 9 } },
      { value: "low", label: "4科8-9分 (2-2-1-1左右)", score: { tier1: 2, tier2: 10 } },
      { value: "min", label: "4科6-7分 (1-1-1-1左右)", score: { tier1: 0, tier2: 8 } }
    ]
  },
  {
    id: 2,
    question: "你對學科類型的興趣是？",
    options: [
      { value: "science", label: "理工科（科學、工程、IT）", interest: "理工" },
      { value: "business", label: "商科（商管、金融、經濟）", interest: "商科" },
      { value: "arts", label: "文科（語言、傳媒、歷史）", interest: "文科" },
      { value: "education", label: "師範類（教育、幼教）", interest: "師範" },
      { value: "medical", label: "醫學類（醫學、護理）", interest: "醫學" },
      { value: "undecided", label: "還未確定", interest: "未定" }
    ]
  },
  {
    id: 3,
    question: "你希望在哪個地區升學？",
    options: [
      { value: "bj-sh", label: "北京/上海（一線城市，機會多但競爭大）", region: "一線" },
      { value: "gd", label: "廣東省（靠近香港，生活習慣相近）", region: "廣東" },
      { value: "coastal", label: "東部沿海（江浙閩，經濟發達）", region: "東部" },
      { value: "central", label: "中西部（四川湖南等，生活成本較低）", region: "中西部" },
      { value: "flexible", label: "不限地區", region: "不限" }
    ]
  },
  {
    id: 4,
    question: "你的家庭經濟狀況？",
    options: [
      { value: "good", label: "充裕，可負擔較高學費及生活費", needScholarship: false },
      { value: "ok", label: "一般，希望有資助計劃", needScholarship: true },
      { value: "tight", label: "較緊絀，需要獎學金支持", needScholarship: true }
    ]
  },
  {
    id: 5,
    question: "你對升學最重視什麼？",
    options: [
      { value: "ranking", label: "學校排名和名氣", priority: "排名" },
      { value: "major", label: "專業實力和就業前景", priority: "專業" },
      { value: "location", label: "地理位置和生活環境", priority: "地點" },
      { value: "cost", label: "學費和生活成本", priority: "費用" },
      { value: "culture", label: "文化適應和語言環境", priority: "文化" }
    ]
  }
];

const recommendations = {
  top_tier1: {
    title: "目標：頂尖985大學",
    universities: ["北京大學", "清華大學", "復旦大學", "浙江大學", "上海交通大學"],
    pathway: "DSE免試招生",
    tips: [
      "保持DSE成績4科17分以上",
      "準備個人陳述和推薦信",
      "可能需要參加面試",
      "提早關注各校招生簡章"
    ]
  },
  high_tier1: {
    title: "目標：985/211重點大學",
    universities: ["中山大學", "武漢大學", "南京大學", "廈門大學", "華中科技大學"],
    pathway: "DSE免試招生 或 港澳台聯招",
    tips: [
      "DSE爭取4科14分以上",
      "考慮聯招試作為備選",
      "選擇心儀專業及院校",
      "申請相關獎學金"
    ]
  },
  mid_tier1_tier2: {
    title: "目標：211大學 或 優質一本",
    universities: ["暨南大學", "華南理工大學", "深圳大學", "南京師範大學", "蘇州大學"],
    pathway: "DSE免試招生 為主",
    tips: [
      "確保DSE達到2-2-2-2",
      "選擇接受較低分數的院校",
      "考慮專業優先於排名",
      "了解各校特色專業"
    ]
  },
  low_tier2: {
    title: "目標：優質二本大學",
    universities: ["廣州大學", "華僑大學", "集美大學", "浙江工業大學", "杭州師範大學"],
    pathway: "DSE免試招生",
    tips: [
      "DSE達到2-2-1-1或以上即可",
      "選擇地理位置好的院校",
      "考慮就業導向專業",
      "申請學資處資助計劃"
    ]
  },
  联招_backup: {
    title: "建議：港澳台聯招作為主要途徑",
    universities: ["選擇範圍廣，可報考300+所院校"],
    pathway: "港澳台僑聯合招生考試",
    tips: [
      "參加聯招考試培訓課程",
      "考試難度相對DSE較低",
      "需提早準備文科或理科",
      "可同時申請DSE免試作為備選"
    ]
  }
};

export default function StudyPlanner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      calculateResult({ ...answers, [questionId]: answer });
    }
  };

  const calculateResult = (allAnswers) => {
    const q1 = allAnswers[1];
    let recommendation;

    if (q1.value === "top") {
      recommendation = recommendations.top_tier1;
    } else if (q1.value === "high") {
      recommendation = recommendations.high_tier1;
    } else if (q1.value === "mid") {
      recommendation = recommendations.mid_tier1_tier2;
    } else if (q1.value === "low") {
      recommendation = recommendations.low_tier2;
    } else {
      recommendation = recommendations.联招_backup;
    }

    setResult({
      ...recommendation,
      answers: allAnswers,
      scholarshipNeeded: allAnswers[4]?.needScholarship || false,
      interest: allAnswers[2]?.interest || "未定",
      region: allAnswers[3]?.region || "不限",
      priority: allAnswers[5]?.priority || "綜合"
    });
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <GraduationCap className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">升學規劃工具</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              5條問題，為你度身訂造升學建議
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Card className="max-w-3xl mx-auto shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">
                      問題 {step + 1} / {questions.length}
                    </CardTitle>
                    <div className="text-sm bg-white/20 px-4 py-2 rounded-full">
                      {Math.round(((step + 1) / questions.length) * 100)}%
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-8">
                        {questions[step].question}
                      </h3>
                      <div className="space-y-4">
                        {questions[step].options.map((option, index) => (
                          <motion.button
                            key={option.value}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleAnswer(questions[step].id, option)}
                            className="w-full text-left p-5 rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 group-hover:text-indigo-700 font-medium">
                                {option.label}
                              </span>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              {/* Result Header */}
              <Card className="mb-8 shadow-2xl border-4 border-indigo-500">
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-10">
                  <Star className="w-16 h-16 mx-auto mb-4" />
                  <CardTitle className="text-3xl mb-3">{result.title}</CardTitle>
                  <p className="text-indigo-100 text-lg">根據你的情況，以下是我們的建議</p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Recommended Pathway */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-indigo-600" />
                      推薦升學途徑
                    </h3>
                    <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200">
                      <p className="text-2xl font-bold text-indigo-700">{result.pathway}</p>
                    </div>
                  </div>

                  {/* Recommended Universities */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">推薦院校</h3>
                    <div className="flex flex-wrap gap-3">
                      {result.universities.map((uni, i) => (
                        <span
                          key={i}
                          className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium"
                        >
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">升學建議</h3>
                    <div className="space-y-3">
                      {result.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 mb-1">學科興趣</p>
                      <p className="font-bold text-gray-900">{result.interest}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 mb-1">地區偏好</p>
                      <p className="font-bold text-gray-900">{result.region}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 mb-1">最重視</p>
                      <p className="font-bold text-gray-900">{result.priority}</p>
                    </div>
                  </div>

                  {/* Scholarship Note */}
                  {result.scholarshipNeeded && (
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                      <p className="font-semibold text-amber-900 mb-2">💡 資助提示</p>
                      <p className="text-amber-800 text-sm">
                        建議申請「內地大學升學資助計劃」及各院校獎學金，每年可獲$5,000-$80,000資助。
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-8">
                    <Button onClick={restart} variant="outline" className="flex-1">
                      <RefreshCw className="w-5 h-5 mr-2" />
                      重新評估
                    </Button>
                    <Button
                      onClick={() => (window.location.href = '/MainlandUniDatabase')}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    >
                      查看大學資料庫
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}