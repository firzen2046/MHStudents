import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home, Calendar, MessageSquare, User } from 'lucide-react';

const items = [
  { name: '首頁', page: 'Home', icon: Home },
  { name: '活動', page: 'Activities', icon: Calendar },
  { name: '討論區', page: 'Forum', icon: MessageSquare },
  { name: '個人中心', page: 'Profile', icon: User },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 lg:hidden">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => {
          const active = location.pathname === createPageUrl(item.page);
          return (
            <Link key={item.page} to={createPageUrl(item.page)} className="flex flex-col items-center gap-1 py-2 px-4">
              <item.icon
                className={`w-6 h-6 transition-colors ${active ? 'text-purple-600' : 'text-gray-400 dark:text-gray-500'}`}
              />
              <span
                className={`text-xs transition-colors ${
                  active ? 'text-purple-600 font-medium' : 'text-gray-400 dark:text-gray-500'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}