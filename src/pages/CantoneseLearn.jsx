import React, { useState } from 'react';
import { MessageCircle, Volume2, RefreshCw, CheckCircle2, X, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { cantonese: "你好", pinyin: "nei5 hou2", mandarin: "你好", english: "Hello", category: "問候" },
  { cantonese: "多謝", pinyin: "do1 ze6", mandarin: "謝謝", english: "Thank you", category: "問候" },
  { cantonese: "唔該", pinyin: "m4 goi1", mandarin: "麻煩你/謝謝", english: "Please/Thank you", category: "問候" },
  { cantonese: "早晨", pinyin: "zou2 san4", mandarin: "早上好", english: "Good morning", category: "問候" },
  { cantonese: "拜拜", pinyin: "baai1 baai1", mandarin: "再見", english: "Bye bye", category: "問候" },
  { cantonese: "幾多錢", pinyin: "gei2 do1 cin2", mandarin: "多少錢", english: "How much?", category: "購物" },
  { cantonese: "食飯未", pinyin: "sik6 faan6 mei6", mandarin: "吃飯了嗎", english: "Have you eaten?", category: "日常" },
  { cantonese: "好靚", pinyin: "hou2 leng3", mandarin: "好漂亮", english: "Very beautiful", category: "形容" },
  { cantonese: "好好味", pinyin: "hou2 hou2 mei6", mandarin: "很好吃", english: "Very delicious", category: "形容" },
  { cantonese: "冇問題", pinyin: "mou5 man6 tai4", mandarin: "沒問題", english: "No problem", category: "日常" },
  { cantonese: "勁", pinyin: "ging6", mandarin: "厲害", english: "Awesome/Cool", category: "潮語" },
  { cantonese: "正", pinyin: "zeng3", mandarin: "棒/好", english: "Great", category: "潮語" },
  { cantonese: "好犀利", pinyin: "hou2 sai1 lei6", mandarin: "很厲害", english: "Very impressive", category: "形容" },
  { cantonese: "去邊度", pinyin: "heoi3 bin1 dou6", mandarin: "去哪裡", english: "Where to go?", category: "日常" },
  { cantonese: "唔緊要", pinyin: "m4 gan2 jiu3", mandarin: "沒關係", english: "It's okay", category: "日常" },
  { cantonese: "食乜嘢", pinyin: "sik6 mat1 je5", mandarin: "吃什麼", english: "What to eat?", category: "日常" }
];

const quizQuestions = [
  { question: "「多謝」用普通話怎麼說？", options: ["你好", "謝謝", "再見", "不客氣"], answer: 1 },
  { question: "「唔該」的意思是什麼？", options: ["對不起", "你好", "麻煩你/謝謝", "沒問題"], answer: 2 },
  { question: "「好靚」是什麼意思？", options: ["很貴", "很漂亮", "很醜", "很大"], answer: 1 },
  { question: "「勁」在廣東話中表示？", options: ["累", "厲害", "慢", "快"], answer: 1 },
  { question: "「食飯未」是什麼意思？", options: ["要不要吃飯", "吃飯了嗎", "在哪裡吃飯", "吃什麼飯"], answer: 1 },
  { question: "「幾多錢」怎麼翻譯？", options: ["在哪裡", "什麼時候", "多少錢", "為什麼"], answer: 2 },
  { question: "「冇問題」是什麼意思？", options: ["有問題", "沒問題", "什麼問題", "大問題"], answer: 1 },
  { question: "「去邊度」的意思是？", options: ["去哪裡", "怎麼去", "什麼時候去", "和誰去"], answer: 0 }
];

export default function CantoneseLearn() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const categories = ["全部", "問候", "日常", "購物", "形容", "潮語"];
  
  const filteredPhrases = selectedCategory === "全部" 
    ? phrases 
    : phrases.filter(p => p.category === selectedCategory);

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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-100 font-medium mb-4 block">語言學習</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              廣東話學習
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              輕鬆學習日常廣東話，融入香港生活
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            onClick={() => setShowQuiz(false)}
            variant={!showQuiz ? "default" : "outline"}
            className={`px-8 py-6 text-lg ${!showQuiz ? "bg-amber-500 hover:bg-amber-600" : ""}`}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            學習詞彙
          </Button>
          <Button
            onClick={() => setShowQuiz(true)}
            variant={showQuiz ? "default" : "outline"}
            className={`px-8 py-6 text-lg ${showQuiz ? "bg-amber-500 hover:bg-amber-600" : ""}`}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            小測驗
          </Button>
        </div>

        {!showQuiz ? (
          <>
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-amber-500 text-white"
                      : "bg-white text-gray-700 hover:bg-amber-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Phrases Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredPhrases.map((phrase, index) => (
                  <motion.div
                    key={phrase.cantonese}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow bg-white">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                            {phrase.category}
                          </span>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-500">
                            <Volume2 className="w-5 h-5" />
                          </Button>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {phrase.cantonese}
                        </h3>
                        <p className="text-amber-600 font-medium mb-4">
                          {phrase.pinyin}
                        </p>
                        
                        <div className="space-y-2 pt-4 border-t">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 w-16">普通話</span>
                            <span className="text-gray-700">{phrase.mandarin}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 w-16">English</span>
                            <span className="text-gray-600">{phrase.english}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        ) : (
          /* Quiz Section */
          <div className="max-w-2xl mx-auto">
            {!showResult ? (
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
                  <span className="text-sm font-medium text-amber-600">
                    得分：{score}
                  </span>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
                  <div 
                    className="bg-amber-500 h-2 rounded-full transition-all"
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
                            : "border-gray-200 hover:border-amber-300 hover:bg-amber-50"
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
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-12 h-12 text-amber-500" />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  測驗完成！
                </h2>
                
                <p className="text-6xl font-bold text-amber-500 mb-2">
                  {score}/{quizQuestions.length}
                </p>
                <p className="text-gray-600 mb-8">
                  {score === quizQuestions.length 
                    ? "太厲害了！滿分！" 
                    : score >= quizQuestions.length / 2 
                      ? "做得好！繼續努力！" 
                      : "加油！多練習幾次！"}
                </p>

                <Button 
                  onClick={resetQuiz}
                  className="bg-amber-500 hover:bg-amber-600 px-8 py-6 text-lg"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  再試一次
                </Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}