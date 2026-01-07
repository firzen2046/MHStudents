import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Menu, 
  X, 
  Home, 
  Calendar, 
  UserPlus, 
  GraduationCap, 
  MessageCircle,
  Globe,
  Map,
  School,
  BookOpen,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: '主頁', page: 'Home', icon: Home },
  { name: '活動詳情', page: 'Activities', icon: Calendar },
  { name: '報名', page: 'Registration', icon: UserPlus },
  { name: '升學資訊', page: 'StudyInfo', icon: GraduationCap },
  { name: '廣東話', page: 'CantoneseLearn', icon: MessageCircle },
  { name: '交流園地', page: 'Exchange', icon: Globe },
  { name: '香港好去處', page: 'HKPlaces', icon: Map },
  { name: '內地大學', page: 'MainlandUni', icon: School },
  { name: '學科推介', page: 'Subjects', icon: BookOpen },
];

export default function Layout({ children, currentPageName }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (pageName) => {
    return currentPageName === pageName;
  };

  return (
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
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <p className="font-bold text-gray-900 text-lg leading-tight">中港同窗</p>
                <p className="text-xs text-gray-500">築夢同行</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 6).map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.page)
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* More dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all">
                  更多 ▾
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {navItems.slice(6).map((item) => (
                    <Link
                      key={item.page}
                      to={createPageUrl(item.page)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors first:rounded-t-xl last:rounded-b-xl ${
                        isActive(item.page)
                          ? 'bg-purple-50 text-purple-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl('Registration')}>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-500/25">
                  立即報名
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="container mx-auto px-6 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive(item.page)
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link 
                    to={createPageUrl('Registration')}
                    onClick={() => setIsOpen(false)}
                  >
                    <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium">
                      立即報名
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
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
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695e4e0ab89cc0629600e4ef/815a70c4c_image.png"
                  alt="中港同窗築夢同行"
                  className="h-16 w-auto"
                />
                <div>
                  <p className="font-bold text-xl">中港同窗 築夢同行</p>
                  <p className="text-gray-400 text-sm">主辦：半島青年商會</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695e4e0ab89cc0629600e4ef/8e8e83540_image.png"
                  alt="JCI Peninsula"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                促進香港與內地青年交流，讓中學生體驗內地教育，幫助港漂學生融入香港生活，共同建立持續的文化交流橋樑。
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
              <h3 className="font-semibold text-lg mb-4">快速連結</h3>
              <ul className="space-y-3">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">資源</h3>
              <ul className="space-y-3">
                {navItems.slice(5).map((item) => (
                  <li key={item.page}>
                    <Link
                      to={createPageUrl(item.page)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 JCI Peninsula. 版權所有。
            </p>
            <p className="text-gray-500 text-sm">
              「中港同窗 築夢同行」工作計劃
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}