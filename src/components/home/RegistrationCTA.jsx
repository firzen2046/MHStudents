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
            立即報名參加
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            成為中港同窗大使，與港漂大學生組合，互相學習，共同體驗
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
            <h3 className="text-2xl font-bold text-white mb-4">中學生報名</h3>
            <p className="text-purple-200 mb-6">
              有意在內地升讀大學的香港中學生，歡迎報名參加交流大使計劃
            </p>
            <ul className="text-purple-100 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                認識日：結伴同行
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                學習日：互相學習廣東話
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                義工日：服務社會
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                內地大學體驗交流團
              </li>
            </ul>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIp0yz1Fkl914W4atjPILG79NdtQMe1BGrBU8-xn0nc5MFGA/viewform?usp=sharing&ouid=103639968181247151915"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-6 text-lg rounded-xl">
                中學生報名
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
            <h3 className="text-2xl font-bold text-white mb-4">港漂生報名</h3>
            <p className="text-purple-200 mb-6">
              各位港漂大學生，歡迎加入交流大使計劃，協助他人融入香港社會
            </p>
            <ul className="text-purple-100 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                認識日：結伴同行
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                學習日：分享留學經驗
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                義工日：服務社會
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                閉幕禮：頒發嘉許證書
              </li>
            </ul>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScjBEJEe2v98yjUFmGgyf654aCUSm8vNur5i4iswCm5Cm3g5g/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-white text-purple-900 hover:bg-gray-100 py-6 text-lg rounded-xl">
                港漂生報名
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
            截止報名日期：<span className="text-amber-400 font-semibold">2026年2月28日</span>
          </p>
          <p className="text-purple-300 mt-2">
            費用：<span className="text-white font-semibold">全免</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}