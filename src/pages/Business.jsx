import React from 'react';
import { Building2, ExternalLink, CheckCircle2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const businessTypes = [
  { type: "獨資經營", icon: "👤", desc: "個人開業，手續簡單，但個人需承擔無限法律責任", suitable: "自由職業、顧問、個人工作室" },
  { type: "合夥", icon: "🤝", desc: "兩人或以上合夥，共同承擔責任及利潤", suitable: "合夥律師、會計師事務所" },
  { type: "有限公司", icon: "🏢", desc: "最常見形式，股東責任以出資額為限，信譽較高", suitable: "大部分商業企業" },
  { type: "外地公司分支", icon: "🌐", desc: "內地企業在港設立辦事處或分公司", suitable: "希望拓展香港市場的內地企業" },
];

const registrationSteps = [
  { step: 1, title: "選擇公司名稱", desc: "中英文名稱均可，在公司註冊處查冊確認名稱未被使用", link: "https://www.icris.cr.gov.hk" },
  { step: 2, title: "登記公司", desc: "向公司註冊處申請，費用約$1,720（網上申請）或$1,980（書面申請）", link: "https://www.cr.gov.hk" },
  { step: 3, title: "領取商業登記證", desc: "向稅務局申請商業登記證，每年費用$2,150", link: "https://www.ird.gov.hk" },
  { step: 4, title: "開設商業銀行帳戶", desc: "選擇適合的銀行，需提供公司文件、身份證明及地址證明", link: null },
  { step: 5, title: "申請MPF計劃", desc: "若有員工，需在開業後60天內為員工登記MPF計劃", link: "https://www.mpfa.org.hk" },
];

const supportOrgs = [
  { name: "香港貿易發展局 (HKTDC)", desc: "協助企業拓展國際市場，提供展覽及商貿配對", url: "https://www.hktdc.com", tag: "貿易" },
  { name: "香港投資推廣署 (InvestHK)", desc: "協助外資企業在港設立或擴展業務", url: "https://www.investhk.gov.hk", tag: "投資" },
  { name: "數碼港", desc: "支援科技及創業企業，提供辦公室、培訓及投資配對", url: "https://www.cyberport.hk", tag: "科技" },
  { name: "香港科學園", desc: "科技企業孵化及加速計劃，提供實驗室及辦公設施", url: "https://www.hkstp.org", tag: "科技" },
  { name: "青年創業軍 (YEC)", desc: "支援18-45歲青年創業，提供導師計劃及資助", url: "https://www.yec.hk", tag: "創業" },
  { name: "香港工業總會", desc: "為製造及工業企業提供支援及政策倡議", url: "https://www.fhki.org.hk", tag: "工業" },
  { name: "中國香港(地區)商會", desc: "橋接內地與香港商業關係，提供商業配對", url: "https://www.cgcc.org.hk", tag: "兩地" },
  { name: "香港生產力促進局", desc: "提供科技應用、企業諮詢及培訓服務", url: "https://www.hkpc.org", tag: "生產力" },
];

const taxes = [
  { type: "利得稅", rate: "首$2M: 8.25%；其後: 16.5%（有限公司）", note: "適用於香港境內產生的利潤" },
  { type: "薪俸稅", rate: "累進稅率 2%-17%，標準稅率 15%", note: "以較低者為準" },
  { type: "物業稅", rate: "15%", note: "適用於香港物業租金收入" },
  { type: "印花稅", rate: "視乎物業類型及買賣而定", note: "股份及物業轉讓時徵收" },
];

export default function Business() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-gray-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-slate-300 font-medium mb-4 block">港漂資源</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">商務及企業服務</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              在港創業、開公司及企業支援的完整指引
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Business Types */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">商業組織形式</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {businessTypes.map((b, i) => (
              <div key={b.type} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{b.icon}</span>
                  <h3 className="font-bold text-gray-900 text-lg">{b.type}</h3>
                </div>
                <p className="text-gray-600 mb-3">{b.desc}</p>
                <p className="text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                  <span className="font-medium">適合：</span>{b.suitable}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Steps */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">公司登記步驟</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {registrationSteps.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-slate-600">{s.step}</div>
                <div className="bg-white rounded-2xl p-5 shadow-md flex-1 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{s.desc}</p>
                  {s.link && (
                    <a href={s.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-600 text-xs hover:text-slate-800">
                      前往官網 <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Organizations */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">企業支援機構</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportOrgs.map((o, i) => (
              <a key={o.name} href={o.url} target="_blank" rel="noopener noreferrer"
                className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{o.tag}</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-slate-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-slate-700">{o.name}</h3>
                <p className="text-gray-500 text-xs">{o.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Tax Overview */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">香港稅制概覽</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm">香港採用地域來源徵稅原則，只對香港境內產生的利潤徵稅，沒有增值稅或資產增值稅，稅制簡單。</p>
            </div>
            {taxes.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t.type}</h3>
                    <p className="text-slate-600 font-medium text-sm">{t.rate}</p>
                  </div>
                  <span className="text-xs text-gray-500 text-right max-w-[200px]">{t.note}</span>
                </div>
              </div>
            ))}
            <div className="text-center">
              <a href="https://www.ird.gov.hk" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors">
                香港稅務局官網 <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}