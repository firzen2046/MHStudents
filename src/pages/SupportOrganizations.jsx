import React from 'react';
import { Users, Heart, Phone, Mail, MapPin, ExternalLink, Briefcase, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const organizations = [
  {
    name: "香港港漂互助會",
    type: "民間組織",
    description: "為在港內地學生提供全方位支援服務，包括生活適應、就業輔導等",
    services: ["生活適應工作坊", "就業指導", "社交活動", "緊急援助"],
    contact: {
      wechat: "港漂互助會",
      phone: "3956 9403",
      email: "info@gpqhk.com"
    },
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "青年港漂總會",
    type: "民間組織",
    description: "促進港漂青年融入香港社會，提供各類支援和活動",
    services: ["迎新活動", "職業發展", "文化交流", "會員福利"],
    contact: {
      wechat: "青年港漂總會"
    },
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "香港內地學生學者聯誼會",
    type: "學生組織",
    description: "服務在港內地學生學者，促進交流與合作",
    services: ["學術交流", "就業資訊", "聯誼活動", "權益保障"],
    contact: {
      email: "contact@cssahk.org"
    },
    color: "from-emerald-500 to-emerald-600"
  },
  {
    name: "各大學內地學生會",
    type: "校內組織",
    description: "各大學內設有內地學生會，為內地同學提供校內支援",
    services: ["迎新活動", "學習支援", "文化活動", "校內權益"],
    contact: {
      note: "請聯絡各大學學生事務處查詢"
    },
    color: "from-rose-500 to-rose-600"
  },
  {
    name: "香港青年協會",
    type: "政府資助機構",
    description: "為青年提供多元化服務，包括港漂學生支援",
    services: ["青年輔導", "就業培訓", "義工服務", "社區融入"],
    contact: {
      phone: "2395 0323",
      website: "https://hkfyg.org.hk"
    },
    color: "from-amber-500 to-amber-600"
  }
];

const supportPrograms = [
  {
    title: "香港特區政府計劃",
    programs: [
      { name: "學友社內地升學資訊", desc: "提供免費升學諮詢服務" },
      { name: "教育局內地升學資訊", desc: "官方升學指引及資訊" },
      { name: "學資處資助計劃", desc: "各類經濟資助計劃" }
    ]
  },
  {
    title: "就業支援計劃",
    programs: [
      { name: "大灣區青年就業計劃", desc: "協助港漂畢業生在大灣區就業" },
      { name: "各大學就業輔導中心", desc: "提供職業規劃及求職支援" },
      { name: "內地實習計劃", desc: "暑期實習機會" }
    ]
  },
  {
    title: "社區融入計劃",
    programs: [
      { name: "鄰舍層面社區發展計劃", desc: "協助融入社區" },
      { name: "文化交流活動", desc: "促進中港青年交流" },
      { name: "義工服務計劃", desc: "參與社區服務" }
    ]
  }
];

export default function SupportOrganizations() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-200 font-medium mb-4 block">港漂資訊</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">支援機構與計劃</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              各類支援機構及計劃，助你順利適應香港生活
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Organizations */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">支援機構</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${org.color} text-white`}>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    <div>
                      <p className="text-xl">{org.name}</p>
                      <p className="text-sm opacity-90 font-normal mt-1">{org.type}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">{org.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">提供服務</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {org.services.map((service, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <Heart className="w-4 h-4 text-rose-500" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    {org.contact.phone && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        {org.contact.phone}
                      </div>
                    )}
                    {org.contact.email && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        {org.contact.email}
                      </div>
                    )}
                    {org.contact.wechat && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        微信：{org.contact.wechat}
                      </div>
                    )}
                    {org.contact.note && (
                      <p className="text-gray-600 italic">{org.contact.note}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Support Programs */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">支援計劃</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {supportPrograms.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.programs.map((program, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-xl">
                        <p className="font-medium text-gray-900 mb-1">{program.name}</p>
                        <p className="text-sm text-gray-600">{program.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}