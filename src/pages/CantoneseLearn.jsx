import React, { useState } from 'react';
import { MessageCircle, Volume2, RefreshCw, CheckCircle2, X, Sparkles, Trophy, Video, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { cantonese: "你好", pinyin: "nei5 hou2", mandarin: "你好", english: "Hello", category: "問候" },
  { cantonese: "多謝", pinyin: "do1 ze6", mandarin: "謝謝", english: "Thank you", category: "問候" },
  { cantonese: "唔該", pinyin: "m4 goi1", mandarin: "麻煩你/謝謝", english: "Please/Thank you", category: "問候" },
  { cantonese: "早晨", pinyin: "zou2 san4", mandarin: "早上好", english: "Good morning", category: "問候" },
  { cantonese: "拜拜", pinyin: "baai1 baai1", mandarin: "再見", english: "Bye bye", category: "問候" },
  { cantonese: "幾多錢", pinyin: "gei2 do1 cin2", mandarin: "多少錢", english: "How much?", category: "購物" },
  { cantonese: "唔係呀", pinyin: "m4 hai6 aa3", mandarin: "不是的", english: "That's not right", category: "購物" },
  { cantonese: "平啲得唔得", pinyin: "peng4 di1 dak1 m4 dak1", mandarin: "便宜點可以嗎", english: "Can you discount?", category: "購物" },
  { cantonese: "食飯未", pinyin: "sik6 faan6 mei6", mandarin: "吃飯了嗎", english: "Have you eaten?", category: "日常" },
  { cantonese: "好好味", pinyin: "hou2 hou2 mei6", mandarin: "很好吃", english: "Very delicious", category: "日常" },
  { cantonese: "冇問題", pinyin: "mou5 man6 tai4", mandarin: "沒問題", english: "No problem", category: "日常" },
  { cantonese: "去邊度", pinyin: "heoi3 bin1 dou6", mandarin: "去哪裡", english: "Where to go?", category: "日常" },
  { cantonese: "唔緊要", pinyin: "m4 gan2 jiu3", mandarin: "沒關係", english: "It's okay", category: "日常" },
  { cantonese: "好靚", pinyin: "hou2 leng3", mandarin: "好漂亮", english: "Very beautiful", category: "形容" },
  { cantonese: "好犀利", pinyin: "hou2 sai1 lei6", mandarin: "很厲害", english: "Very impressive", category: "形容" },
  { cantonese: "勁", pinyin: "ging6", mandarin: "厲害", english: "Awesome/Cool", category: "潮語" },
  { cantonese: "正", pinyin: "zeng3", mandarin: "棒/好", english: "Great", category: "潮語" },
  { cantonese: "打牙骹", pinyin: "daa2 ngaa4 gaau3", mandarin: "聊天", english: "Chat/Gossip", category: "潮語" },
];

// Situational scenarios
const scenarios = [
  {
    id: 1,
    title: "搭乘港鐵",
    icon: "🚇",
    description: "你剛到達香港，需要搭地鐵去旺角",
    dialogue: [
      { role: "你", text: "唔該，去旺角係搭邊條線？", translation: "請問，去旺角要搭哪條線？" },
      { role: "市民", text: "搭荃灣線，係紅色嘅。", translation: "搭荃灣線，是紅色的。" },
      { role: "你", text: "係呢個站落車係咪？", translation: "是在這個站下車嗎？" },
      { role: "市民", text: "係，旺角站落車就係喇。多謝你問。", translation: "是的，旺角站下車就是了。謝謝你問。" },
    ],
    keywords: ["唔該", "搭", "落車", "係"]
  },
  {
    id: 2,
    title: "茶餐廳點餐",
    icon: "🍳",
    description: "在本地茶餐廳點早餐",
    dialogue: [
      { role: "侍應", text: "靚仔/靚女，食乜呀？", translation: "你好，想吃什麼？" },
      { role: "你", text: "我要一個火腿蛋治，同埋一杯熱奶茶。", translation: "我要一個火腿蛋三明治，和一杯熱奶茶。" },
      { role: "侍應", text: "奶茶走唔走糖？", translation: "奶茶要不要糖？" },
      { role: "你", text: "少甜得唔得？", translation: "少一點糖可以嗎？" },
      { role: "侍應", text: "得！坐低等陣呀。", translation: "可以！請坐等一會。" },
    ],
    keywords: ["食乜", "同埋", "走糖", "得唔得"]
  },
  {
    id: 3,
    title: "買嘢（購物）",
    icon: "🛒",
    description: "在街市或商店購物",
    dialogue: [
      { role: "你", text: "呢件衫幾多錢？", translation: "這件衣服多少錢？" },
      { role: "老闆", text: "二百五，靚㗎！", translation: "250元，很漂亮的！" },
      { role: "你", text: "平啲得唔得？我買兩件。", translation: "便宜點可以嗎？我買兩件。" },
      { role: "老闆", text: "兩件四百，最平㗎喇！", translation: "兩件400元，已經最便宜了！" },
      { role: "你", text: "好，多謝晒。", translation: "好，非常感謝。" },
    ],
    keywords: ["幾多錢", "平啲", "多謝晒"]
  },
  {
    id: 4,
    title: "問路",
    icon: "🗺️",
    description: "在街上問路找目的地",
    dialogue: [
      { role: "你", text: "唔該，我想去中環站，係咪呢邊行？", translation: "請問，我想去中環站，是這邊走嗎？" },
      { role: "路人", text: "唔係，你要轉頭，行埋嗰邊。", translation: "不是，你要轉頭，走那邊。" },
      { role: "你", text: "要行幾耐？", translation: "要走多久？" },
      { role: "路人", text: "大概五分鐘，過條馬路就係喇。", translation: "大概五分鐘，過馬路就是了。" },
      { role: "你", text: "多謝你！", translation: "謝謝你！" },
    ],
    keywords: ["唔該", "係咪", "幾耐", "多謝"]
  },
];

// Videos with dubbed versions - using YouTube search-friendly links
const videos = [
  {
    title: "粵語日常對話 - 打招呼篇",
    desc: "學習日常問候語，包括早晨、再見、點呀等基本用語",
    withAudio: "https://www.youtube.com/results?search_query=%E5%B9%BC%E5%85%92%E7%B2%B5%E8%AA%9E%E6%97%A5%E5%B8%B8%E5%B0%8D%E8%A9%B1",
    noAudio: "https://www.youtube.com/results?search_query=%E7%B2%B5%E8%AA%9E%E5%AD%B8%E7%BF%92+%E6%8E%A5%E8%88%8C",
    category: "基礎",
    duration: "5-10分鐘",
    icon: "👋"
  },
  {
    title: "粵語購物對話",
    desc: "茶餐廳、超市、街市的常用廣東話，包含議價、點餐技巧",
    withAudio: "https://www.youtube.com/results?search_query=%E7%B2%B5%E8%AA%9E%E8%B3%BC%E7%89%A9%E5%B0%8D%E8%A9%B1",
    noAudio: "https://www.youtube.com/results?search_query=%E7%B2%B5%E8%AA%9E+%E8%8C%B6%E9%A4%90%E5%BB%B3+%E9%BB%9E%E9%A4%90",
    category: "生活",
    duration: "8-15分鐘",
    icon: "🛒"
  },
  {
    title: "香港文化與語言",
    desc: "透過香港流行文化、電影學習地道廣東話及文化背景",
    withAudio: "https://www.youtube.com/results?search_query=%E9%A6%99%E6%B8%AF%E6%96%87%E5%8C%96%E8%AA%9E%E8%A8%80%E5%8F%A3%E8%AA%9E",
    noAudio: "https://www.youtube.com/results?search_query=%E7%B2%B5%E8%AA%9E+cantopop+%E6%AD%8C%E8%A9%9E",
    category: "文化",
    duration: "10-20分鐘",
    icon: "🎬"
  },
  {
    title: "粵語數字及時間",
    desc: "學習廣東話的數字、時間、日期表達方式",
    withAudio: "https://www.youtube.com/results?search_query=%E7%B2%B5%E8%AA%9E%E6%95%B8%E5%AD%97%E6%99%82%E9%96%93%E5%AD%B8%E7%BF%92",
    noAudio: "https://www.youtube.com/results?search_query=%E5%AD%B8%E7%B2%B5%E8%AA%9E+%E6%95%B8%E5%AD%97",
    category: "基礎",
    duration: "5-10分鐘",
    icon: "🔢"
  },
  {
    title: "職場廣東話",
    desc: "工作場合的常用廣東話，包括開會、電話、日常溝通",
    withAudio: "https://www.youtube.com/results?search_query=%E8%81%B7%E5%A0%B4%E7%B2%B5%E8%AA%9E%E5%B0%8D%E8%A9%B1",
    noAudio: "https://www.youtube.com/results?search_query=%E7%B2%B5%E8%AA%9E+business+%E5%95%86%E5%8B%99",
    category: "職場",
    duration: "10-15分鐘",
    icon: "💼"
  },
  {
    title: "Cantopop 歌詞學廣東話",
    desc: "透過香港流行歌曲學習廣東話發音和詞彙，輕鬆愉快",
    withAudio: "https://www.youtube.com/results?search_query=cantopop+%E7%B2%B5%E8%AA%9E%E6%8C%87%E5%AF%BC",
    noAudio: "https://www.youtube.com/results?search_query=%E7%B2%B5%E8%AA%9E%E6%AD%8C+karaoke+%E4%B8%AD%E8%A9%9E",
    category: "娛樂",
    duration: "任意",
    icon: "🎵"
  },
];

const quizQuestions = [
  { question: "「多謝」用普通話怎麼說？", options: ["你好", "謝謝", "再見", "不客氣"], answer: 1 },
  { question: "「唔該」的意思是什麼？", options: ["對不起", "你好", "麻煩你/謝謝", "沒問題"], answer: 2 },
  { question: "「好靚」是什麼意思？", options: ["很貴", "很漂亮", "很醜", "很大"], answer: 1 },
  { question: "「勁」在廣東話中表示？", options: ["累", "厲害", "慢", "快"], answer: 1 },
  { question: "「食飯未」是什麼意思？", options: ["要不要吃飯", "吃飯了嗎", "在哪裡吃飯", "吃什麼飯"], answer: 1 },
  { question: "「幾多錢」怎麼翻譯？", options: ["在哪裡", "什麼時候", "多少錢", "為什麼"], answer: 2 },
  { question: "「冇問題」是什麼意思？", options: ["有問題", "沒問題", "什麼問題", "大問題"], answer: 1 },
  { question: "「去邊度」的意思是？", options: ["去哪裡", "怎麼去", "什麼時候去", "和誰去"], answer: 0 },
  { question: "在茶餐廳「走糖」是什麼意思？", options: ["不要冰", "不要糖", "不要奶", "外賣"], answer: 1 },
  { question: "「平啲得唔得」是什麼意思？", options: ["貴一點行嗎", "便宜一點行嗎", "換一個行嗎", "打折嗎"], answer: 1 },
];

export default function CantoneseLearn() {
  const [activeTab, setActiveTab] = useState("vocabulary"); // vocabulary | scenarios | videos | quiz
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const categories = ["全部", "問候", "日常", "購物", "形容", "潮語"];
  const filteredPhrases = selectedCategory === "全部" ? phrases : phrases.filter(p => p.category === selectedCategory);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    const correct = index === quizQuestions[currentQuestion].answer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(q => q + 1);
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

  const tabs = [
    { id: "vocabulary", label: "學習詞彙", icon: MessageCircle },
    { id: "scenarios", label: "情景對話", icon: Sparkles },
    { id: "videos", label: "配音影片", icon: Video },
    { id: "quiz", label: "小測驗", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-100 font-medium mb-4 block">語言學習</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">廣東話學習</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              詞彙學習、情景對話、影片學習及小測驗，全方位提升粵語能力
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-amber-50 border border-gray-200"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vocabulary Tab */}
        {activeTab === "vocabulary" && (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat ? "bg-amber-500 text-white" : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
                  }`}>{cat}</button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredPhrases.map((phrase, index) => (
                  <motion.div key={phrase.cantonese} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: index * 0.03 }}>
                    <Card className="hover:shadow-lg transition-shadow bg-white">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">{phrase.category}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{phrase.cantonese}</h3>
                        <p className="text-amber-600 font-medium mb-4">{phrase.pinyin}</p>
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
        )}

        {/* Scenarios Tab */}
        {activeTab === "scenarios" && (
          <div>
            {!selectedScenario ? (
              <>
                <p className="text-center text-gray-600 mb-8">選擇一個生活情景，學習實際應用的廣東話對話</p>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {scenarios.map((s, i) => (
                    <motion.button
                      key={s.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setSelectedScenario(s)}
                      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all text-left group"
                    >
                      <span className="text-4xl mb-4 block">{s.icon}</span>
                      <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-amber-600">{s.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{s.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {s.keywords.map(k => (
                          <span key={k} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">{k}</span>
                        ))}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
                <button onClick={() => setSelectedScenario(null)} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
                  ← 返回情景列表
                </button>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-6">
                    <span className="text-4xl mb-2 block">{selectedScenario.icon}</span>
                    <h2 className="text-2xl font-bold text-white">{selectedScenario.title}</h2>
                    <p className="text-amber-100 mt-1">{selectedScenario.description}</p>
                  </div>
                  <div className="p-6 space-y-4">
                    {selectedScenario.dialogue.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: line.role === "你" ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className={`flex gap-3 ${line.role === "你" ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                          line.role === "你" ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-600"
                        }`}>
                          {line.role === "你" ? "我" : line.role[0]}
                        </div>
                        <div className={`max-w-[75%] ${line.role === "你" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                          <span className="text-xs text-gray-400">{line.role}</span>
                          <div className={`rounded-2xl px-4 py-3 ${
                            line.role === "你" ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-900"
                          }`}>
                            <p className="font-medium text-lg">{line.text}</p>
                          </div>
                          <p className="text-xs text-gray-500 italic px-1">{line.translation}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-6 border-t bg-amber-50">
                    <p className="text-sm font-semibold text-amber-700 mb-2">本情景重點詞彙：</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedScenario.keywords.map(k => (
                        <span key={k} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">{k}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div>
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-2xl mx-auto">
                以下提供廣東話學習影片資源，分為<span className="text-amber-600 font-semibold">「有原聲版」</span>（有聲音示範）及
                <span className="text-orange-600 font-semibold">「無講野版」</span>（靜音跟讀練習）。
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-6 text-center">
                    <span className="text-4xl">{v.icon}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{v.category}</span>
                      <span className="text-xs text-gray-400">{v.duration}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{v.desc}</p>
                    <div className="space-y-2">
                      <a href={v.withAudio} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full bg-amber-500 text-white px-4 py-2.5 rounded-xl hover:bg-amber-600 transition-colors text-sm font-medium">
                        <Volume2 className="w-4 h-4" />
                        有原聲版（聽示範）
                      </a>
                      <a href={v.noAudio} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium">
                        <Play className="w-4 h-4" />
                        無講野版（跟讀練習）
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 bg-amber-50 rounded-2xl p-6 text-center max-w-2xl mx-auto">
              <p className="text-amber-800 font-medium mb-2">💡 學習小貼士</p>
              <p className="text-amber-700 text-sm">先用「有原聲版」聆聽正確發音，然後切換至「無講野版」自己跟讀練習，反覆練習可快速提升粵語能力！</p>
            </div>
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === "quiz" && (
          <div className="max-w-2xl mx-auto">
            {!showResult ? (
              <motion.div key={currentQuestion} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-500">問題 {currentQuestion + 1} / {quizQuestions.length}</span>
                  <span className="text-sm font-medium text-amber-600">得分：{score}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
                  <div className="bg-amber-500 h-2 rounded-full transition-all" style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{quizQuestions[currentQuestion].question}</h2>
                <div className="space-y-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => selectedAnswer === null && handleAnswer(index)} disabled={selectedAnswer !== null}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                        selectedAnswer === index
                          ? isCorrect ? "border-emerald-500 bg-emerald-50" : "border-red-500 bg-red-50"
                          : selectedAnswer !== null && index === quizQuestions[currentQuestion].answer
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-amber-300 hover:bg-amber-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {selectedAnswer === index && (isCorrect ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <X className="w-6 h-6 text-red-500" />)}
                        {selectedAnswer !== null && index === quizQuestions[currentQuestion].answer && selectedAnswer !== index && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl shadow-xl p-8 text-center">
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-12 h-12 text-amber-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">測驗完成！</h2>
                <p className="text-6xl font-bold text-amber-500 mb-2">{score}/{quizQuestions.length}</p>
                <p className="text-gray-600 mb-8">
                  {score === quizQuestions.length ? "太厲害了！滿分！繼續練習情景對話吧！" : score >= quizQuestions.length / 2 ? "做得好！繼續努力！" : "加油！多練習幾次！"}
                </p>
                <Button onClick={resetQuiz} className="bg-amber-500 hover:bg-amber-600 px-8 py-6 text-lg">
                  <RefreshCw className="w-5 h-5 mr-2" />再試一次
                </Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}