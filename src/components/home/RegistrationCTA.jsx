import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function RegistrationCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            立即加入「聽見・漂行」
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            對象：18-40歲青年 · 費用全免 · 與我們一起用真誠的交流填補內心的空缺
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">港漂夥伴報名</h3>
            <p className="text-purple-200 mb-6">
              在港居住的內地青年（18-40歲），希望擴大社交圈、融入香港生活
            </p>
            <ul className="text-purple-100 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                3月22日破冰活動：認識第一批本地朋友
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                粵語學習工作坊：勇敢開口說廣東話
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                社區服務：深入了解香港文化
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                獲頒活動策劃證書
              </li>
            </ul>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIp0yz1Fkl914W4atjPILG79NdtQMe1BGrBU8-xn0nc5MFGA/viewform?usp=sharing&ouid=103639968181247151915"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-6 text-lg rounded-xl">
                立即報名
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">了解計劃詳情</h3>
            <p className="text-purple-200 mb-6">
              想深入了解「聽見・漂行」計劃的完整內容、時間表及參與方式
            </p>
            <ul className="text-purple-100 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                計劃完整時間表及內容
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                如何幫助港漂克服困境
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                活動策劃證書詳情
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                主辦機構：半島青年商會
              </li>
            </ul>
            <a 
              href="https://canva.link/ad1yi1or4uyfebe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-white text-purple-900 hover:bg-gray-100 py-6 text-lg rounded-xl">
                查看計劃詳情
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-purple-200">
            對象：<span className="text-amber-400 font-semibold">18-40歲青年</span>
          </p>
          <p className="text-purple-300 mt-2">
            費用：<span className="text-white font-semibold">全免</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}