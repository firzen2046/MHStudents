import React, { useState } from 'react';
import { Plus, Heart, Reply } from 'lucide-react';
import { motion } from 'framer-motion';

const initialPosts = [
  {
    id: 1,
    author: '港漂小明',
    time: '2小時前',
    title: '初來香港，有冇好嘅租屋建議？',
    content: '剛到香港工作，想搵九龍區嘅平價租盤，有冇過來人分享經驗？',
    likes: 12,
    replies: 5,
    tag: '住房',
  },
  {
    id: 2,
    author: '阿強',
    time: '5小時前',
    title: '廣東話學習心得分享',
    content: '學咗三個月廣東話，發現睇 TVB 劇集好有幫助！大家有冇其他方法？',
    likes: 28,
    replies: 12,
    tag: '語言',
  },
  {
    id: 3,
    author: 'Lucy',
    time: '1日前',
    title: '求職面試經驗交流',
    content: '最近面試咗幾間公司，分享下面試流程同注意事項。',
    likes: 15,
    replies: 8,
    tag: '求職',
  },
];

export default function Forum() {
  const [posts] = useState(initialPosts);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">討論區</h1>
          <p className="text-xl text-indigo-100">港漂交流社區</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <button className="w-full mb-8 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all">
          <Plus className="w-5 h-5" /> 發佈新帖
        </button>
        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center text-white font-bold">
                  {post.author[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{post.author}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{post.time}</p>
                </div>
                <span className="ml-auto text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                  {post.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.content}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <button className="flex items-center gap-1 hover:text-rose-500 transition-colors">
                  <Heart className="w-4 h-4" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                  <Reply className="w-4 h-4" />
                  {post.replies}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}