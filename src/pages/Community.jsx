import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ExternalLink, Plus, Loader2, MessageCircle } from 'lucide-react';
import PostForm from '@/components/forum/PostForm';
import PostCard from '@/components/forum/PostCard';

const onlineCommunities = [
  { platform: '小紅書', icon: '📕', groups: ['香港港漂生活', '香港打工仔', '香港生活攻略', '香港租房'], desc: '最多港漂使用的平台，生活資訊分享、問答互動活躍', url: 'https://www.xiaohongshu.com' },
  { platform: '微信群組', icon: '💬', groups: ['港漂互助群', '各區生活群', '行業交流群', '家長交流群'], desc: '加入各類微信群，獲取即時資訊及互助支援', url: null },
  { platform: 'Facebook群組', icon: '📘', groups: ['香港港漂互助群', 'HK Expats', '香港租房', '二手物品交換'], desc: '部分港漂及在港外籍人士社群，英粵中三語均有使用', url: 'https://www.facebook.com' },
  { platform: 'Telegram群組', icon: '✈️', groups: ['香港港漂資訊', '各行業群', '新移民交流'], desc: '即時資訊發布，包括就業機會、租房資訊等', url: 'https://telegram.org' },
  { platform: '領英 LinkedIn', icon: '💼', groups: ['Hong Kong Mainland Professionals', 'HK Tech Community'], desc: '職場社群，適合建立專業人際網絡', url: 'https://www.linkedin.com' },
];

const organizations = [
  { name: '青年港漂總會 (YEA)', desc: '香港最大的港漂青年組織，定期舉辦活動、提供資源及倡議', url: 'https://www.yea.org.hk', services: ['社交活動', '就業支援', '法律諮詢', '心理支援'], icon: '🏆' },
  { name: '半島青年商會 (JCI Peninsula)', desc: '主辦「聽見·漂行」計劃，推動港漂融入香港社區', url: 'https://www.hkpjc.org', services: ['破冰活動', '粵語學習', '社區服務', '領袖培訓'], icon: '🌟' },
  { name: '新來港人士服務中心', desc: '政府資助的社會服務，協助新移民融入香港生活', url: 'https://www.swd.gov.hk', services: ['輔導服務', '語言課程', '就業輔助', '社區適應'], icon: '🏠' },
  { name: '東華三院', desc: '提供多元社會服務，包括家庭、就業及社區服務', url: 'https://www.tungwah.org.hk', services: ['緊急援助', '社區服務', '培訓課程', '醫療服務'], icon: '🌺' },
];

const categories = ['全部', '求職', '交友', '租房', '生活', '其他'];

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [showForm, setShowForm] = useState(false);

  const loadPosts = async () => {
    try {
      const data = await base44.entities.ForumPost.list('-created_date', 50);
      setPosts(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const filteredPosts =
    activeCategory === '全部' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-teal-200 font-medium mb-4 block">港漂交流</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">綜合互動討論區</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              發佈帖文、留言互動、按讚交流 — 求職、交友、租房一站式社群
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Forum Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">最新帖文</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-2.5 rounded-xl font-medium hover:from-teal-600 hover:to-cyan-600 transition-all"
            >
              <Plus className="w-4 h-4" /> 發佈帖文
            </button>
          </div>

          {showForm && (
            <div className="mb-6">
              <PostForm onCreated={() => { loadPosts(); setShowForm(false); }} />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-teal-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 text-center shadow-md border border-gray-100 dark:border-gray-800">
              <MessageCircle className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 mb-2">暫時沒有帖文</p>
              <p className="text-gray-400 text-sm">成為第一個發帖的人吧！</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} onDelete={loadPosts} />
              ))}
            </div>
          )}
        </div>

        {/* Online Communities */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">網上社群平台</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineCommunities.map((c) => (
              <div key={c.platform} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{c.icon}</span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{c.platform}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{c.desc}</p>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 text-sm hover:text-teal-700">
                    前往平台 <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Organizations */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">港漂支援組織</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((o) => (
              <div key={o.name} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{o.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">{o.name}</h3>
                      {o.url && (
                        <a href={o.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-teal-500 flex-shrink-0" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{o.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {o.services.map((s) => (
                        <span key={s} className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-2 py-1 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}