import React from 'react';
import { ExternalLink, GraduationCap, Users, CheckCircle2, Calendar, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Registration() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-purple-300 font-medium mb-4 block">加入我們</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              「聽見・漂行」報名
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              對象：18-40歲青年 · 費用全免 · 立即加入港漂夥伴計劃
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Key Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">截止日期</h3>
              <p className="text-2xl font-bold text-purple-600">2026年3月22日</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">費用</h3>
              <p className="text-2xl font-bold text-amber-600">全免</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">對象</h3>
              <p className="text-2xl font-bold text-emerald-600">18-40歲青年</p>
            </div>
          </div>
        </motion.div>

        {/* Registration Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Student Registration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">港漂夥伴報名</h2>
              <p className="text-purple-100">
                在港居住的內地青年（18-40歲）
              </p>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                加入「聽見・漂行」港漂夥伴計劃，透過遊戲破冰、結伴同行、學習香港文化，幫助你一步步找回歸屬感。
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2026年3月22日</p>
                    <p className="text-gray-600 text-sm">破冰啟航活動：認識第一批本地朋友</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">計劃期間</p>
                    <p className="text-gray-600 text-sm">粵語學習工作坊</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">計劃期間</p>
                    <p className="text-gray-600 text-sm">社區服務體驗</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">計劃期間</p>
                    <p className="text-gray-600 text-sm">中港兩地回饋項目 + 頒發活動策劃證書</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeIp0yz1Fkl914W4atjPILG79NdtQMe1BGrBU8-xn0nc5MFGA/viewform?usp=sharing&ouid=103639968181247151915"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-6 text-lg rounded-xl">
                  立即報名
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* HK Student Registration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">港漂生報名</h2>
              <p className="text-amber-100">
                在港就讀的內地大學生
              </p>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                想深入了解「聽見・漂行」計劃的完整內容、時間表及參與方式，請查閱計劃詳情。
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">計劃完整時間表</p>
                    <p className="text-gray-600 text-sm">從破冰到深度連結的全程活動安排</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">如何幫助港漂克服困境</p>
                    <p className="text-gray-600 text-sm">語言、文化、社交三大挑戰解決方案</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">活動策劃證書詳情</p>
                    <p className="text-gray-600 text-sm">主辦機構：半島青年商會</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://canva.link/ad1yi1or4uyfebe"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-6 text-lg rounded-xl">
                  查看計劃詳情
                   <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                  </a>
                  </div>
                  </motion.div>
                  </div>

                  {/* Additional Info */}
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto mt-16 text-center"
                  >
                  <div className="bg-purple-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">關於「聽見・漂行」港漂夥伴計劃</h3>
                  <p className="text-gray-600 mb-4">
                  完成計劃的參加者將獲得<strong>活動策劃證書</strong>，成為更有影響力的青年領袖。
                  </p>
                  <p className="text-gray-500 text-sm">
                  如有任何查詢，請聯絡馮先生：5409 6712 或電郵至 rio_fung@hkpjc.org
                  </p>
                  </div>
                  </motion.div>
                  </div>
                  </div>
                  );
                  }