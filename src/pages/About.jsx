import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Map, MessageCircle, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    { icon: BookOpen, title: '升學與進修', desc: '整合香港高校資訊、專業培訓課程及升學途徑，協助青年規劃學業與事業發展。' },
    { icon: Users, title: '就業與社群', desc: '提供求職平台、行業需求分析、支援機構網絡，並以論壇與活動促進港漂互助。' },
    { icon: Map, title: '生活與住房', desc: '涵蓋租房指南、銀行開戶、交通餐飲與城市地圖，讓新生快速融入香港生活。' },
    { icon: MessageCircle, title: '語言與文化', desc: '廣東話學習模組、兩地潮語對照及文化交流活動，打破語言障礙、建立歸屬感。' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-700 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> 港漂夥伴計劃
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">關於「聽見・漂行」</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              「聽見・漂行」是一個專為在港內地青年打造的综合支援平台，由國際青年商會半島分會（JCI Peninsula）發起的港漂夥伴計劃主辦。
              我們陪伴每一位來到香港追夢的年輕人，跨越語言與文化的門檻，在這座城市找到歸屬、建立圈子、成就自我。
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="container mx-auto px-6 py-16 lg:py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">我們做什麼</h2>
          <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              「聽見・漂行」匯聚了在港內地青年所需的核心資源於一站。平台涵蓋就業求職、住房租賃、教育進修、
              銀行保險、商務服務與社群網絡六大板塊，並提供簽證政策解讀、赴港清單、遙距租房指南及防騙避坑手冊，
              讓初來乍到的青年有章可循、有路可走。
            </p>
            <p>
              我們特別構建了廣東話學習模組，結合生活場景對話、影音教學與潮語對照，幫助內地青年快速融入粵語環境。
              同時透過互動地圖、全年活動日程、社區論壇與找室友搭檔功能，把陌生的城市變成熟絡的社區，
              讓每一位港漂都能找到同行者。
            </p>
            <p>
              平台以五大核心活動為骨幹——破冰遊戲、粵語工作坊、社區服務、青年交流及跨界回饋，
              透過遊戲破冰、結伴同行，共建溫暖而活躍的港漂圈子。
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-5xl">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 py-16 lg:py-20 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">服務對象</h2>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              平台服務18至40歲、正在香港升學、工作或生活的內地青年——他們常被稱為「港漂」。
              無論你是即將赴港的新生、初到步的求職者，還是已在港定居但仍想拓展圈子的青年，
              這裏都有為你量身打造的資源、活動與夥伴。我們理解語言障礙、文化差異與社交侷限帶來的孤獨感，
              因此以同行者的姿態，陪你走過從「漂」到「行」的每一步。
            </p>
          </div>
        </div>
      </section>

      {/* Who builds it */}
      <section className="container mx-auto px-6 py-16 lg:py-20 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">由誰建立</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          「聽見・漂行」港漂夥伴計劃由國際青年商會半島分會（JCI Peninsula）策劃與主辦。
          作為國際青年商會網絡的一員，JCI Peninsula 匯聚具使命感的青年領袖，致力於推動青年發展、
          社會進步與跨界協作。本平台集結商會成員與志願者的專業知識與在地經驗，
          以非營利的初心持續服務港漂社群，與青年一起共建更包容、更連結的香港。
        </p>
        <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-medium">
          <Sparkles className="w-5 h-5" />
          聽見你的聲音，陪伴你的漂行旅程
        </div>
      </section>
    </div>
  );
}