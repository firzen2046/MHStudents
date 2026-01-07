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
              活動報名
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              成為中港同窗大使，開啟你的交流之旅
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
              <p className="text-2xl font-bold text-purple-600">2026年2月28日</p>
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
              <h3 className="font-semibold text-gray-900 mb-2">報名單位</h3>
              <p className="text-2xl font-bold text-emerald-600">學校或個人</p>
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
              <h2 className="text-2xl font-bold text-white mb-2">中學生報名</h2>
              <p className="text-purple-100">
                有意在內地升讀大學的香港中學生
              </p>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                歡迎加入我們的中港同窗交流大使計劃，與港漂大學生組合，「你」協助「他」融入香港社會，「他」協助「你」內地升學，共同體驗：
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2026年3月份</p>
                    <p className="text-gray-600 text-sm">認識日：認識彼此，結伴同行</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2026年4月份</p>
                    <p className="text-gray-600 text-sm">學習日：互相學習，你授與廣東話，他授與國內留學經驗及心得</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2025年5月份</p>
                    <p className="text-gray-600 text-sm">義工日：服務社會，訓練自己</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2025年7月上旬</p>
                    <p className="text-gray-600 text-sm">內地大學體驗交流團</p>
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
                各位港漂大學生，歡迎加入我們的中港同窗交流大使計劃，與港漂大學生組合，「你」協助「他」內地升學，「他」協助「你」融入香港社會，共同體驗：
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2026年3月份</p>
                    <p className="text-gray-600 text-sm">認識日：認識彼此，結伴同行</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2026年4月份</p>
                    <p className="text-gray-600 text-sm">學習日：互相學習，他授與廣東話，你授與國內留學經驗及心得</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2025年5月份</p>
                    <p className="text-gray-600 text-sm">義工日：服務社會，訓練自己</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">2025年7月上旬</p>
                    <p className="text-gray-600 text-sm">內地大學體驗交流團</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScjBEJEe2v98yjUFmGgyf654aCUSm8vNur5i4iswCm5Cm3g5g/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-6 text-lg rounded-xl">
                  立即報名
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">完成計劃的參加者</h3>
            <p className="text-gray-600 mb-4">
              將會獲得嘉許證書
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