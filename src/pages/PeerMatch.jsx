import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Loader2, Plus, Users, Filter, X } from 'lucide-react';
import PeerMatchForm from '@/components/peer/PeerMatchForm';
import PeerMatchCard from '@/components/peer/PeerMatchCard';

const areas = [
  '中環', '灣仔', '銅鑼灣', '北角', '將軍澳', '旺角', '太子', '深水埗',
  '九龍城', '觀塘', '鑽石山', '沙田', '大埔', '荃灣', '屯門', '元朗',
  '天水圍', '東涌', '其他',
];

const genders = [
  { key: 'all', label: '全部' },
  { key: '男', label: '男' },
  { key: '女', label: '女' },
  { key: '其他', label: '其他' },
];

export default function PeerMatch() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [genderFilter, setGenderFilter] = useState('all');
  const [areaFilter, setAreaFilter] = useState('all');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await base44.entities.PeerMatch.list('-created_date', 100);
        setMatches(data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    load();
  }, []);

  const filtered = matches.filter((m) => {
    if (genderFilter !== 'all' && m.gender !== genderFilter) return false;
    if (areaFilter !== 'all' && m.target_area !== areaFilter) return false;
    return true;
  });

  const hasFilters = genderFilter !== 'all' || areaFilter !== 'all';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-violet-200 font-medium mb-4 block">找室友 / 搭檔</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Peer Match</h1>
            <p className="text-xl text-violet-100 max-w-2xl mx-auto">
              找到志同道合的港漂夥伴，一起展開香港生活
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 pb-24">
        {/* Filters */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-md border border-gray-100 dark:border-gray-800 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-violet-500" />
            <span className="font-semibold text-gray-900 dark:text-white text-sm">篩選</span>
            {hasFilters && (
              <button
                onClick={() => { setGenderFilter('all'); setAreaFilter('all'); }}
                className="ml-auto text-xs text-gray-400 hover:text-violet-500 flex items-center gap-1"
              >
                <X className="w-3 h-3" /> 清除
              </button>
            )}
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">性別</p>
              <div className="flex flex-wrap gap-2">
                {genders.map((g) => (
                  <button
                    key={g.key}
                    onClick={() => setGenderFilter(g.key)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      genderFilter === g.key
                        ? 'bg-violet-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-violet-50'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1.5">目標區域</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setAreaFilter('all')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    areaFilter === 'all'
                      ? 'bg-violet-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-violet-50'
                  }`}
                >
                  全部
                </button>
                {areas.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAreaFilter(a)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      areaFilter === a
                        ? 'bg-violet-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-violet-50'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 text-center shadow-md border border-gray-100 dark:border-gray-800">
            <Users className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              {hasFilters ? '沒有符合篩選條件的需求' : '暫時沒有需求'}
            </p>
            <p className="text-gray-400 text-sm">點擊右下角按鈕發佈你的需求吧！</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((match) => (
              <PeerMatchCard key={match.id} match={match} onDelete={() => load()} />
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-20 right-6 lg:bottom-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-xl shadow-violet-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        aria-label="發佈需求"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Post Request Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>發佈需求</DialogTitle>
          </DialogHeader>
          <PeerMatchForm onCreated={() => { load(); setShowForm(false); }} />
        </DialogContent>
      </Dialog>
    </div>
  );

  async function load() {
    try {
      const data = await base44.entities.PeerMatch.list('-created_date', 100);
      setMatches(data);
    } catch (e) {
      console.error(e);
    }
  }
}