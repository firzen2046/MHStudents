import React from 'react';
import { Home, MapPin, Utensils, Bus, CreditCard, Heart, ShoppingBag, Smartphone, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const housingOptions = [
  {
    type: "學生宿舍",
    price: "$3,000-$6,000/月",
    pros: ["地點方便", "認識同學", "設施齊全", "相對安全"],
    cons: ["名額有限", "需抽籤", "規則較多"],
    tips: "大部分大學為港漂生提供優先住宿安排"
  },
  {
    type: "私人租房（雅房）",
    price: "$4,000-$8,000/月",
    pros: ["選擇多", "較自由", "可選地點"],
    cons: ["需簽合約", "可能較遠", "需自理水電"],
    tips: "建議先視察單位，注意合約條款"
  },
  {
    type: "私人租房（套房）",
    price: "$6,000-$12,000/月",
    pros: ["獨立空間", "私隱度高", "設備齊全"],
    cons: ["租金較貴", "需自理家務"],
    tips: "適合預算充足或與朋友合租"
  },
  {
    type: "寄宿家庭",
    price: "$5,000-$8,000/月",
    pros: ["體驗本地文化", "有人照顧", "包餐"],
    cons: ["較少私人空間", "需適應家庭規則"],
    tips: "適合初來港且希望快速融入的學生"
  }
];

const transportInfo = [
  {
    name: "八達通卡",
    desc: "香港最常用的交通卡",
    cost: "$50按金 + 儲值",
    tips: ["乘車有折扣", "可用於便利店", "可綁定手機支付"]
  },
  {
    name: "學生八達通",
    desc: "全日制學生專用",
    cost: "享半價優惠",
    tips: ["需向學校申請", "享地鐵半價", "有效期至畢業"]
  },
  {
    name: "月票計劃",
    desc: "MTR月票",
    cost: "$400/月（指定線路）",
    tips: ["經常乘地鐵可考慮", "需評估使用頻率"]
  }
];

const foodOptions = [
  {
    name: "學校飯堂",
    price: "$25-$40/餐",
    features: ["選擇多", "價格實惠", "方便快捷"]
  },
  {
    name: "茶餐廳",
    price: "$40-$60/餐",
    features: ["港式風味", "份量足", "選擇豐富"]
  },
  {
    name: "快餐店",
    price: "$30-$50/餐",
    features: ["快捷方便", "連鎖品牌", "標準化"]
  },
  {
    name: "街市/超市自煮",
    price: "$20-$30/餐",
    features: ["最省錢", "健康衛生", "需時間準備"]
  }
];

const paymentMethods = [
  {
    name: "八達通",
    usage: "交通、便利店、部分食肆",
    setup: "購買實體卡或使用手機版",
    icon: CreditCard
  },
  {
    name: "PayMe / 轉數快 (FPS)",
    usage: "朋友轉賬、網購",
    setup: "需香港銀行戶口",
    icon: Smartphone
  },
  {
    name: "支付寶HK / WeChat Pay HK",
    usage: "廣泛商戶接受",
    setup: "下載App並綁定銀行卡",
    icon: Smartphone
  },
  {
    name: "信用卡/扣賬卡",
    usage: "網購、大額消費",
    setup: "向銀行申請",
    icon: CreditCard
  }
];

const essentialTips = [
  {
    category: "證件辦理",
    tips: [
      "抵港後7日內辦理香港身份證",
      "保留回鄉證/港澳通行證有效期",
      "學生證隨身攜帶（享學生優惠）"
    ]
  },
  {
    category: "銀行開戶",
    tips: [
      "攜帶學生證、住址證明、身份證到銀行",
      "建議開設有學生優惠的戶口",
      "申請網上銀行方便理財"
    ]
  },
  {
    category: "手機通訊",
    tips: [
      "可選擇月費計劃或儲值卡",
      "學生可享電訊商優惠",
      "留意數據用量避免超額"
    ]
  },
  {
    category: "醫療保障",
    tips: [
      "學生可參加大學團體醫療保險",
      "了解公立醫院門診收費",
      "保留內地醫療保險（回鄉使用）"
    ]
  }
];

const pitfallGuide = [
  {
    category: "租房防騙",
    icon: Home,
    pitfalls: [
      { title: "假房源詐騙", desc: "網上房源價格異常低、要求先付定金再睇樓，極可能是騙局。務必實地看房並核實業主身份。", tip: "堅持先睇樓後付款，核實業主身份證及物業資料" },
      { title: "二房東轉租風險", desc: "租客未經業主同意擅自轉租，可能被業主收回單位。簽約前要求查看業主授權書。", tip: "要求直接與業主簽約，核實租約真偽" },
      { title: "合約陷阱", desc: "口頭承諾未寫入合約、隱藏收費條款（如地產代理費、維修費分擔）。務必逐條閱讀合約。", tip: "所有口頭承諾須白紙黑字寫入合約" },
      { title: "訂金陷阱", desc: "部分業主或代理以「多人爭租」為由催促交訂金，交錢後卻以各種理由不退還。", tip: "訂金收據須寫明用途及退款條件" },
    ]
  },
  {
    category: "醫療就診",
    icon: Heart,
    pitfalls: [
      { title: "急症室輪候時間長", desc: "公立醫院急症室非緊急個案可輪候4-8小時。非緊急情況建議看私家診所或門診。", tip: "普通門診可到地區診所或24小時診所就診" },
      { title: "不了解醫療保險保障範圍", desc: "很多港漂不清楚自己購買的醫療保險保障範圍，就診後才發現無法理賠。", tip: "就診前先了解保險保障範圍，保留所有單據" },
      { title: "語言溝通障礙", desc: "部分公立醫院醫護以英語/粵語溝通為主，普通話溝通可能有困難。", tip: "可要求普通話翻譯服務，或帶懂粵語的朋友同行" },
      { title: "藥物配藥差異", desc: "香港與內地藥物名稱和劑量可能不同，攜帶內地藥物入境需留意海關規定。", tip: "帶同內地病歷和藥物清單就診，方便醫生判斷" },
    ]
  },
  {
    category: "求職陷阱",
    icon: AlertCircle,
    pitfalls: [
      { title: "求職中介收費騙局", desc: "正規求職中介不向求職者收費。如中介要求繳交「介紹費」「培訓費」，需提高警覺。", tip: "正規中介向僱主收費，不向求職者收費" },
      { title: "虛假職位招聘", desc: "網上高薪低要求、要求預先繳費的職位多為騙局。核實公司背景和職位真實性。", tip: "面試前先查核公司註冊資料和網上評價" },
      { title: "合約條款不清晰", desc: "簽約前未仔細閱讀傭金條款、試用期條款和離職通知期，後續可能產生糾紛。", tip: "合約須明確列明薪酬、工時、假期及終止條款" },
    ]
  },
  {
    category: "消費陷阱",
    icon: ShoppingBag,
    pitfalls: [
      { title: "預繳式消費風險", desc: "健身房會籍、美容療程等預繳式消費，店鋪結業後難以追回款項。盡量選擇月費或短期合約。", tip: "避免大額預繳，選擇月費或按次收費" },
      { title: "網購退款爭議", desc: "跨境網購遇到假貨或貨不對辦時，退款流程複雜。建議使用有保障的支付方式。", tip: "使用信用卡支付可申請退款保障" },
    ]
  }
];

export default function LivingInfo() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-teal-200 font-medium mb-4 block">港漂資訊</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">生活資訊</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              港漂生活全方位指南，助你快速適應香港
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="housing" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-12">
            <TabsTrigger value="housing">住宿</TabsTrigger>
            <TabsTrigger value="transport">交通</TabsTrigger>
            <TabsTrigger value="food">飲食</TabsTrigger>
            <TabsTrigger value="essentials">必備</TabsTrigger>
            <TabsTrigger value="pitfalls">避坑</TabsTrigger>
          </TabsList>

          {/* 住宿 */}
          <TabsContent value="housing">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">住宿選擇</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {housingOptions.map((option, index) => (
                  <motion.div
                    key={option.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{option.type}</span>
                          <span className="text-lg text-teal-600 dark:text-teal-400">{option.price}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✓ 優點</p>
                            <ul className="space-y-1">
                              {option.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-rose-700 dark:text-rose-400 mb-2">✗ 缺點</p>
                            <ul className="space-y-1">
                              {option.cons.map((con, i) => (
                                <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3">
                            <p className="text-sm text-teal-800 dark:text-teal-300">
                              <strong>💡 貼士：</strong>{option.tips}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-900">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-blue-300 mb-2">租房注意事項</p>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• 簽約前仔細閱讀合約條款</li>
                        <li>• 檢查單位設施是否完好</li>
                        <li>• 了解水電煤費用分擔方式</li>
                        <li>• 保留租金收據作住址證明</li>
                        <li>• 可考慮與同學合租分擔成本</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 交通 */}
          <TabsContent value="transport">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">交通指南</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {transportInfo.map((transport, index) => (
                  <Card key={transport.name}>
                    <CardHeader>
                      <CardTitle>{transport.name}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{transport.desc}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-teal-600 dark:text-teal-400 mb-4">{transport.cost}</p>
                      <ul className="space-y-2">
                        {transport.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>常用交通工具</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">港鐵 (MTR)</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• 最常用交通工具，覆蓋全港</li>
                        <li>• 學生享半價優惠</li>
                        <li>• 班次頻密，準時可靠</li>
                        <li>• 可用八達通或手機支付</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">巴士</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• 路線覆蓋廣泛</li>
                        <li>• 價格相對便宜</li>
                        <li>• 可到達地鐵未覆蓋地區</li>
                        <li>• 有夜間巴士服務</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">小巴</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• 靈活快捷</li>
                        <li>• 路線固定但站點靈活</li>
                        <li>• 部分線路可用八達通</li>
                        <li>• 適合短途出行</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">的士</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li>• 分紅、綠、藍三種</li>
                        <li>• 24小時服務</li>
                        <li>• 價格較貴但便捷</li>
                        <li>• 可用現金或電子支付</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 飲食 */}
          <TabsContent value="food">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">飲食指南</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {foodOptions.map((option, index) => (
                  <Card key={option.name}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{option.name}</span>
                        <span className="text-teal-600 dark:text-teal-400">{option.price}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {option.features.map((feature, i) => (
                          <span key={i} className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-900">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-4">每月飲食預算參考</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">節儉型（主要學校飯堂 + 自煮）</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">$2,500-$3,500/月</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">一般型（飯堂 + 外出用餐）</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">$3,500-$5,000/月</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">豐富型（經常外出用餐）</span>
                      <span className="font-bold text-amber-600 dark:text-amber-400">$5,000-$7,000/月</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 生活必備 */}
          <TabsContent value="essentials">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">生活必備資訊</h2>

              {/* 支付方式 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>支付方式</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {paymentMethods.map((method, index) => (
                      <div key={method.name} className="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                            <method.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{method.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          <strong>適用：</strong>{method.usage}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {method.setup}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 必備事項 */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">抵港必辦事項</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {essentialTips.map((section, index) => (
                  <Card key={section.category}>
                    <CardHeader>
                      <CardTitle className="text-lg">{section.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-200 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 每月開支預算 */}
              <Card className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-teal-100 dark:border-teal-900">
                <CardHeader>
                  <CardTitle>每月生活開支預算</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">住宿</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$3,000-$8,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">飲食</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$2,500-$5,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">交通</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$400-$800</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">雜費（通訊、娛樂等）</span>
                      <span className="font-semibold text-gray-900 dark:text-white">$500-$1,500</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-teal-100 dark:bg-teal-900/30 rounded-lg border-2 border-teal-300 dark:border-teal-700">
                      <span className="font-bold text-gray-900 dark:text-white">總計</span>
                      <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">$6,400-$15,300</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* 生活避坑指南 */}
          <TabsContent value="pitfalls">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">生活避坑指南</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8">港漂實戰經驗分享，避開常見生活陷阱</p>
              <div className="space-y-10">
                {pitfallGuide.map((section) => (
                  <div key={section.category}>
                    <div className="flex items-center gap-2 mb-5">
                      <section.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.category}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.pitfalls.map((p, i) => (
                        <Card key={i} className="border-l-4 border-l-rose-400 dark:border-l-rose-500">
                          <CardContent className="p-5">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{p.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{p.desc}</p>
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-emerald-800 dark:text-emerald-300">{p.tip}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}