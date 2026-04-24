import React, { useState, createContext, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  Menu,
  X,
  Home,
  Calendar,
  UserPlus,
  MessageCircle,
  Globe,
  Map,
  Phone,
  Languages,
  Users,
  Briefcase,
  Building2,
  CreditCard,
  BookOpen,
  Heart } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 创建语言上下文
export const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return { lang: 'zh_TW', setLang: () => {} };
  }
  return context;
};

// 导航结构
const navGroups = {
  main: [
  { name: '主頁', page: 'Home', icon: Home },
  { name: '活動報名', page: 'Registration', icon: UserPlus },
  { name: '活動詳情', page: 'Activities', icon: Calendar }],

  resources: [
  { name: '求職', page: 'JobSearch', icon: Briefcase },
  { name: '住房', page: 'Housing', icon: Home },
  { name: '教育', page: 'Education', icon: BookOpen },
  { name: '銀行及保險服務', page: 'Banking', icon: CreditCard },
  { name: '商務及企業服務', page: 'Business', icon: Building2 },
  { name: '社群網絡', page: 'Community', icon: Heart }],

  learning: [
  { name: '廣東話學習', page: 'CantoneseLearn', icon: MessageCircle },
  { name: '香港好去處', page: 'HKPlaces', icon: Map },
  { name: '中港交流', page: 'Exchange', icon: Globe },
  { name: '支援機構', page: 'SupportOrganizations', icon: Users },
  { name: '生活資訊', page: 'LivingInfo', icon: Home }]

};

function Layout({ children, currentPageName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('zh_TW');
  const location = useLocation();

  const isActive = (pageName) => {
    return currentPageName === pageName;
  };

  const navLabels = {
    zh_TW: {
      home: '主頁',
      activities: '活動資訊',
      registration: '活動報名',
      activityDetails: '活動詳情',
      studyGuide: '升學指南',
      mainlandUni: '內地大學數據庫',
      pathways: '升學途徑',
      scholarships: '資助獎學金',
      hkUni: '香港大學',
      gangpiaoInfo: '港漂資訊',
      support: '支援機構',
      living: '生活資訊',
      learning: '學習資源',
      cantonese: '廣東話學習',
      exchange: '中港交流',
      subjects: '學科推介',
      hkPlaces: '香港好去處',
      more: '更多',
      registerNow: '立即報名'
    },
    zh_CN: {
      home: '主页',
      activities: '活动资讯',
      registration: '活动报名',
      activityDetails: '活动详情',
      studyGuide: '升学指南',
      mainlandUni: '内地大学数据库',
      pathways: '升学途径',
      scholarships: '资助奖学金',
      hkUni: '香港大学',
      gangpiaoInfo: '港漂资讯',
      support: '支援机构',
      living: '生活资讯',
      learning: '学习资源',
      cantonese: '广东话学习',
      exchange: '中港交流',
      subjects: '学科推介',
      hkPlaces: '香港好去处',
      more: '更多',
      registerNow: '立即报名'
    }
  };

  const t = (key) => navLabels[lang][key] || navLabels.zh_TW[key];

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695e4e0ab89cc0629600e4ef/815a70c4c_image.png"
                  alt="中港同窗築夢同行"
                  className="h-12 w-auto" />
                
              <div className="hidden sm:block">
                <p className="font-bold text-gray-900 text-lg leading-tight">聽見・漂行</p>
                <p className="text-xs text-gray-500">港漂夥伴計劃</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to={createPageUrl('Home')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('Home') ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>{t('home')}</Link>
              <Link to={createPageUrl('Registration')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive('Registration') ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>{t('registration')}</Link>
              
              {/* 港漂資源 Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all">
                  港漂資源 ▾
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {navGroups.resources.map((item, i) =>
                    <Link
                      key={item.page}
                      to={createPageUrl(item.page)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${i === 0 ? 'rounded-t-xl' : ''} ${i === navGroups.resources.length - 1 ? 'rounded-b-xl' : ''} ${
                      isActive(item.page) ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                      }>
                      
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                    )}
                </div>
              </div>

              {/* 學習資源 Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all">
                  學習資源 ▾
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {navGroups.learning.map((item, i) =>
                    <Link
                      key={item.page}
                      to={createPageUrl(item.page)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${i === 0 ? 'rounded-t-xl' : ''} ${i === navGroups.learning.length - 1 ? 'rounded-b-xl' : ''} ${
                      isActive(item.page) ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                      }>
                      
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                    )}
                </div>
              </div>

              {/* Language Switcher */}
              <div className="relative group ml-2">
                <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  {lang === 'zh_TW' ? '繁' : '简'}
                </button>
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <button onClick={() => setLang('zh_TW')} className={`w-full text-left px-4 py-3 text-sm transition-colors first:rounded-t-xl ${lang === 'zh_TW' ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`}>
                    繁體中文
                  </button>
                  <button onClick={() => setLang('zh_CN')} className={`w-full text-left px-4 py-3 text-sm transition-colors last:rounded-b-xl ${lang === 'zh_CN' ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`}>
                    简体中文
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl('Registration')}>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-500/25">
                  {t('registerNow')}
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen &&
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white">
              
              <div className="container mx-auto px-6 py-4 space-y-4">
                {/* Main Links */}
                {navGroups.main.map((item) =>
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive(item.page) ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`
                  }>
                  
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                )}

                {/* 港漂資源 Section */}
                <div className="border-t pt-2">
                  <p className="text-xs text-gray-500 px-4 mb-2">港漂資源</p>
                  {navGroups.resources.map((item) =>
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all ${
                    isActive(item.page) ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`
                    }>
                    
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  )}
                </div>

                {/* 學習資源 Section */}
                <div className="border-t pt-2">
                  <p className="text-xs text-gray-500 px-4 mb-2">學習資源</p>
                  {navGroups.learning.map((item) =>
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all ${
                    isActive(item.page) ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'}`
                    }>
                    
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  )}
                </div>

                {/* Language Switcher */}
                <div className="border-t pt-2">
                  <div className="flex gap-2 px-4">
                    <button
                      onClick={() => setLang('zh_TW')}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                      lang === 'zh_TW' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`
                      }>
                      
                      繁體中文
                    </button>
                    <button
                      onClick={() => setLang('zh_CN')}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                      lang === 'zh_CN' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`
                      }>
                      
                      简体中文
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            }
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://media.base44.com/images/public/695e4e0ab89cc0629600e4ef/cd06f3213___________3_.png"

                  alt="中港同窗築夢同行" className="h-16 w-auto" />

                  
                <div>
                  <p className="font-bold text-xl">聽見・漂行 港漂夥伴計劃</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695e4e0ab89cc0629600e4ef/0340f2ccd_image.png"
                    alt="JCI Peninsula"
                    className="h-16 w-auto opacity-80" />
                  
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                幫助在港內地青年（18-40歲）克服語言障礙、文化差異及社交侷限，透過遊戲破冰、結伴同行，共建美好港漂圈子。
              </p>
              <div className="flex items-center gap-6">
                <a href="tel:54096712" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  5409 6712
                </a>
                <a href="mailto:rio_fung@hkpjc.org" className="text-gray-400 hover:text-white transition-colors">
                  rio_fung@hkpjc.org
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">活動資訊</h3>
              <ul className="space-y-3">
                <li><Link to={createPageUrl('Registration')} className="text-gray-400 hover:text-white transition-colors">活動報名</Link></li>
                <li><Link to={createPageUrl('Activities')} className="text-gray-400 hover:text-white transition-colors">活動詳情</Link></li>
              </ul>
              <h3 className="font-semibold text-lg mb-4 mt-6">港漂資源</h3>
              <ul className="space-y-3">
                <li><Link to={createPageUrl('JobSearch')} className="text-gray-400 hover:text-white transition-colors">求職</Link></li>
                <li><Link to={createPageUrl('Housing')} className="text-gray-400 hover:text-white transition-colors">住房</Link></li>
                <li><Link to={createPageUrl('Education')} className="text-gray-400 hover:text-white transition-colors">教育</Link></li>
                <li><Link to={createPageUrl('Banking')} className="text-gray-400 hover:text-white transition-colors">銀行及保險</Link></li>
                <li><Link to={createPageUrl('Business')} className="text-gray-400 hover:text-white transition-colors">商務服務</Link></li>
                <li><Link to={createPageUrl('Community')} className="text-gray-400 hover:text-white transition-colors">社群網絡</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">學習資源</h3>
              <ul className="space-y-3">
                <li><Link to={createPageUrl('CantoneseLearn')} className="text-gray-400 hover:text-white transition-colors">廣東話學習</Link></li>
                <li><Link to={createPageUrl('Exchange')} className="text-gray-400 hover:text-white transition-colors">中港交流</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 JCI Peninsula. 版權所有。
            </p>
            <p className="text-gray-500 text-sm">
              「聽見・漂行」港漂夥伴計劃
            </p>
          </div>
        </div>
      </footer>
      </div>
    </LanguageContext.Provider>);

}

export default Layout;