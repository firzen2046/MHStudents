import React from 'react';
import { User, Calendar, Award, Settings, Bell, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/components/ui/use-toast';

export default function Profile() {
  const { toast } = useToast();
  const stats = [
    { label: '已報名活動', value: '3', icon: Calendar, color: 'from-purple-500 to-indigo-500' },
    { label: '已完成活動', value: '1', icon: Award, color: 'from-emerald-500 to-teal-500' },
    { label: '討論帖', value: '5', icon: Bell, color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">歡迎回來</h1>
          <p className="text-purple-200 mt-1">港漂夥伴計劃成員</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-md border border-gray-100 dark:border-gray-800"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-3`}
              >
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden">
          {[
            { icon: User, label: '個人資料', desc: '編輯你的個人信息' },
            { icon: Calendar, label: '我的活動', desc: '查看已報名的活動' },
            { icon: Bell, label: '通知設定', desc: '管理推送通知' },
            { icon: Settings, label: '系統設定', desc: '隱私及其他設置' },
          ].map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800 last:border-0"
            >
              <item.icon className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <div className="text-left flex-1">
                <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Delete Account */}
        <div className="mt-8 bg-red-50 dark:bg-red-950/30 rounded-2xl p-6 border border-red-100 dark:border-red-900">
          <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">刪除帳戶</h3>
          <p className="text-sm text-red-600/80 dark:text-red-300/80 mb-4">
            刪除後將永久移除你的個人資料、活動報名紀錄及論壇帖文，且無法恢復。請謹慎考慮後再操作。
          </p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="select-none inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors">
                <Trash2 className="w-4 h-4" /> 申請刪除帳戶
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>確認刪除帳戶？</AlertDialogTitle>
                <AlertDialogDescription>
                  此操作將永久刪除你的帳戶及所有相關資料，包括：個人資料、已報名活動、論壇帖文與留言。刪除後無法恢復。確認後我們將為你登出並轉交支援團隊處理。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    toast({
                      title: '已收到刪除申請',
                      description: '請聯繫支援團隊完成帳戶刪除。',
                    });
                  }}
                >
                  確認刪除
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}