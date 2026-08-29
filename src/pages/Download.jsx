import React from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Smartphone, Apple, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

const APK_VIEW_URL = 'https://drive.google.com/file/d/1VxsGvWaL0J6164GBMxGolAAEnZNmT_o5/view?usp=drive_link';
const APK_DIRECT_URL = 'https://drive.google.com/uc?export=download&id=1VxsGvWaL0J6164GBMxGolAAEnZNmT_o5';
const APK_QR = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=8&data=${encodeURIComponent(APK_DIRECT_URL)}`;

export default function Download() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-700 text-white">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> 隨時隨地，陪伴你的漂行旅程
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">下載「聽見・漂行」APP</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              掃碼即可安裝，把港漂生活資源、廣東話學習、活動報名與社群論壇全部裝進口袋。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download cards */}
      <section className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Android */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/25">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Android 安卓</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">掃描二維碼或點擊下載 APK 安裝包</p>

            <div className="inline-block p-4 bg-white rounded-2xl border border-gray-100 shadow-sm mb-6">
              <img src={APK_QR} alt="Android APK 下載二維碼" className="w-52 h-52 mx-auto" />
            </div>

            <div className="space-y-3">
              <a
                href={APK_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/20"
              >
                <DownloadIcon className="w-5 h-5" /> 直接下載 APK
              </a>
              <a
                href={APK_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                <ExternalLink className="w-5 h-5" /> 在 Google Drive 開啟
              </a>
            </div>

            <div className="mt-6 flex items-start gap-2 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-left">
              <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                首次安裝 APK 時，系統會提示「未知來源」。請在設定中允許「從此來源安裝」即可完成安裝。
              </p>
            </div>
          </motion.div>

          {/* iOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-gray-500/25">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">iOS 蘋果</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">App Store 版本即將上架，敬請期待</p>

            <div className="inline-flex flex-col items-center justify-center w-52 h-52 mx-auto p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 mb-6">
              <Apple className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-3" />
              <p className="text-gray-400 dark:text-gray-500 font-medium">即將上架</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Coming Soon to App Store</p>
            </div>

            <button
              disabled
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 font-medium cursor-not-allowed"
            >
              <DownloadIcon className="w-5 h-5" /> App Store 連結待提供
            </button>

            <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                iPhone 用戶暫可透過瀏覽器使用網頁版，功能同樣完整。App Store 連結準備好後會即時更新於此。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tips */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-100 dark:border-purple-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 安裝小貼士
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>• Android 用戶掃碼後會直接下載 APK 檔，下載完成後點擊安裝即可。</li>
            <li>• 若下載後無法安裝，請檢查「設定 → 應用程式 → 允許來自此來源」是否開啟。</li>
            <li>• iOS 用戶現可使用網頁版，原生 App 上架後將支援推播通知與離線瀏覽。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}