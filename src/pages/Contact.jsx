import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Users, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`【聽見・漂行】來自 ${form.name || '訪客'} 的查詢`);
    const body = encodeURIComponent(`姓名：${form.name}\n電郵：${form.email}\n\n內容：\n${form.message}`);
    window.location.href = `mailto:rio_fung@hkpjc.org?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contacts = [
    { icon: Mail, label: '電郵', value: 'rio_fung@hkpjc.org', href: 'mailto:rio_fung@hkpjc.org' },
    { icon: Phone, label: '電話', value: '5409 6712', href: 'tel:54096712' },
    { icon: Users, label: '主辦單位', value: 'JCI Peninsula 國際青年商會半島分會', href: null },
    { icon: MapPin, label: '服務地區', value: '香港', href: null }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-700 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" /> 歡迎聯絡
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">聯絡我們</h1>
            <p className="text-lg text-white/90 leading-relaxed">
              無論你是想參與活動、查詢資源、成為夥伴，還是單純想聊聊在香港的生活，
              我們都很樂意聆聽。留下你的訊息，或透過以下方式直接聯繫我們。
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
          {/* Contact methods */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">聯絡方式</h2>
            <div className="space-y-4">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-gray-900 dark:text-white font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors break-all">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800">
              <p className="text-teal-800 dark:text-teal-200 text-sm leading-relaxed">
                💡 提交查詢表單後，會自動開啟你的電郵應用程式並預填收件地址與內容，直接發送即可。
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">查詢表單</h2>
            <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">姓名</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="你的稱呼"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">電郵</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">訊息內容</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="想跟我們說什麼？"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg shadow-teal-500/20"
              >
                <Send className="w-4 h-4" /> 發送查詢
              </button>
              {sent && (
                <p className="text-sm text-teal-600 dark:text-teal-400 text-center">
                  已為你開啟電郵應用程式，請確認發送。
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}