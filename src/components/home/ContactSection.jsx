import React from 'react';
import { Phone, Mail, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            聯絡我們
          </h2>
          <p className="text-gray-600">
            如有任何查詢，歡迎與我們聯絡
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center gap-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695e4e0ab89cc0629600e4ef/815a70c4c_image.png"
                  alt="中港同窗築夢同行"
                  className="h-16 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">中港同窗 築夢同行</h3>
                  <p className="text-gray-600">促進中港青年交流</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-purple-200">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695e4e0ab89cc0629600e4ef/8e8e83540_image.png"
                  alt="JCI Peninsula"
                  className="h-12 w-auto"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">半島青年商會</h4>
                  <p className="text-gray-500 text-sm">JCI Peninsula</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">查詢電話</p>
                  <p className="text-lg font-semibold text-gray-900">5409 6712</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">電郵地址</p>
                  <a href="mailto:rio_fung@hkpjc.org" className="text-lg font-semibold text-purple-600 hover:text-purple-700">
                    rio_fung@hkpjc.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">查詢負責人</p>
                  <p className="text-lg font-semibold text-gray-900">馮先生</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}