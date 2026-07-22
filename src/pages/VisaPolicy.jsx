import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Award,
  UserCheck,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Calendar,
} from 'lucide-react';

const visaTypes = [
  {
    name: '學生簽證',
    subtitle: 'Student Visa',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    description:
      '適用於獲香港院校取錄的內地學生。需持有效錄取通知書，由學校協助向入境事務處申請學生簽證/進入許可標籤。',
    application: {
      requirements: [
        '香港院校正式錄取通知書',
        '有效旅行證件（回鄉證/港澳通行證）',
        '經濟證明（學費及生活費）',
        '住宿安排證明',
      ],
      steps: [
        '收到院校錄取通知書',
        '向院校遞交簽證申請表格（ID995A）',
        '院校協助轉交入境處審批',
        '獲發學生簽證標籤（約4-6週）',
        '貼於通行證上，抵港後辦理身份證',
      ],
    },
    renewal: {
      timeline: '簽證到期前4週申請',
      steps: [
        '向院校國際事務處索取續簽表格',
        '提交最新成績單及在學證明',
        '更新經濟證明',
        '遞交至入境處，約2-3週獲批',
      ],
    },
  },
  {
    name: 'IANG 簽證',
    subtitle: 'Immigration Arrangements for Non-local Graduates',
    icon: UserCheck,
    color: 'from-emerald-500 to-teal-500',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b27?w=800&q=80',
    description:
      '適用於在香港修讀全日制經本地評審課程並畢業的非本地學生。畢業後可申請留港工作，首次簽證有效期1年。',
    application: {
      requirements: [
        '香港院校畢業證書或畢業證明信',
        '有效旅行證件',
        '在學期間的簽證記錄',
      ],
      steps: [
        '畢業後向院校申請畢業證明',
        '填寫申請表格（ID990A）',
        '畢業後6個月內申請無需工作證明',
        '6個月後申請需提供工作證明',
        '獲發IANG簽證，有效期1年',
      ],
    },
    renewal: {
      timeline: '到期前4週申請續簽',
      steps: [
        '填寫續簽表格（ID91）',
        '提交在職證明及薪酬證明',
        '提交最新稅單或強積金記錄',
        '獲批後通常延長2-3年',
      ],
    },
  },
  {
    name: '優才計劃',
    subtitle: 'Quality Migrant Admission Scheme (QMAS)',
    icon: Award,
    color: 'from-purple-500 to-indigo-500',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    description:
      '適用於具備卓越才能或專業技能的人士。採用計分制（綜合計分制或成就計分制），無需先獲聘即可申請來港。',
    application: {
      requirements: [
        '年齡18歲以上',
        '具備良好學歷及專業資格',
        '通過計分制評核（綜合計分制80分以上）',
        '具備良好中文或英文能力',
      ],
      steps: [
        '在入境處網上系統遞交申請',
        '上傳學歷、工作經驗及成就證明',
        '入境處審核及甄選（約6-9個月）',
        '獲發原則上批准通知書',
        '抵港辦理簽證及身份證手續',
      ],
    },
    renewal: {
      timeline: '首個簽證有效期24個月',
      steps: [
        '提交在港居住及工作證明',
        '提供入息稅單或僱主信',
        '以「3年+3年+2年」模式續簽',
        '滿7年可申請香港永久居民',
      ],
    },
  },
  {
    name: '專才計劃',
    subtitle: 'Admission Scheme for Mainland Talents and Professionals',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-500',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    description:
      '適用於具備香港所需專業技能的內地人才。需先獲香港僱主聘用，由僱主擔保申請來港工作。',
    application: {
      requirements: [
        '已獲香港僱主聘用',
        '具備相關專業資格及經驗',
        '薪酬達市場水平',
        '職位未能輕易由本地人才填補',
      ],
      steps: [
        '僱主填寫申請表格（ID990B）',
        '申請人填寫（ID990A）',
        '提交學歷、工作經驗及聘書',
        '入境處審批（約4週）',
        '獲發工作簽證標籤',
      ],
    },
    renewal: {
      timeline: '到期前4週申請',
      steps: [
        '提交續簽表格（ID91）',
        '提供在職證明及最新稅單',
        '僱主確認繼續聘用',
        '獲批後延長2-3年',
      ],
    },
  },
];

const policyUpdates = [
  {
    date: '2026年3月',
    tag: '政策更新',
    title: 'IANG簽證適用範圍擴大',
    desc: 'IANG計劃適用院校及課程範圍擴大，更多非本地畢業生可受惠於留港工作安排。',
  },
  {
    date: '2026年1月',
    tag: '審批提速',
    title: '優才計劃審批時間縮短',
    desc: '入境處優化審批流程，優才計劃審批時間由原來9個月縮短至約6個月。',
  },
  {
    date: '2025年11月',
    tag: '新措施',
    title: '高端人才通行證計劃',
    desc: '新增「高才通」計劃，年薪達250萬港元或全球百強大學畢業生可直接申請來港。',
  },
  {
    date: '2025年9月',
    tag: '續簽須知',
    title: '專才續簽需提供稅務記錄',
    desc: '專才計劃續簽申請需附上最新年度稅單及強積金供款記錄，以證明在港實質工作。',
  },
];

export default function VisaPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-indigo-200 font-medium mb-4 block">簽證與政策</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Visa & Policy</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              學生簽證、IANG、優才、專才申請與續簽完整教學
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Visa Type Cards */}
        <div className="space-y-12 mb-20">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={visa.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              {/* Top: Image + Title */}
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={visa.image}
                    alt={visa.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${visa.color} opacity-30`} />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${visa.color} flex items-center justify-center mb-4`}>
                    <visa.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{visa.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{visa.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {visa.description}
                  </p>
                </div>
              </div>

              {/* Bottom: Application + Renewal */}
              <div className="grid md:grid-cols-2 gap-0 border-t border-gray-100 dark:border-gray-800">
                {/* Application Process */}
                <div className="p-8 border-r border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-5">
                    <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">申請流程</h3>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">申請條件</p>
                    <ul className="space-y-1.5">
                      {visa.application.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">申請步驟</p>
                    <ol className="space-y-2.5">
                      {visa.application.steps.map((step, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Renewal Process */}
                <div className="p-8 bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">續簽流程</h3>
                  </div>
                  <div className="mb-5 inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm text-amber-700 dark:text-amber-300 font-medium">{visa.renewal.timeline}</span>
                  </div>
                  <ol className="space-y-2.5">
                    {visa.renewal.steps.map((step, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Government Policy Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 border border-indigo-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">政府政策更新</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">最新入境及簽證政策動態</p>
              </div>
            </div>

            <div className="space-y-4">
              {policyUpdates.map((update, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-4"
                >
                  <div className="flex sm:flex-col items-start gap-2 sm:w-32 flex-shrink-0">
                    <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full font-medium whitespace-nowrap">
                      {update.tag}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{update.date}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{update.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{update.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl p-4 flex items-center gap-3">
              <ExternalLink className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                更多詳情請參考
                <a
                  href="https://www.immd.gov.hk/eng/services/visas-stay-permits.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline ml-1"
                >
                  香港入境事務處官方網站
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}