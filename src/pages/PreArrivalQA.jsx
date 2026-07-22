import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus, MessageCircle, Loader2, ChevronRight, HelpCircle } from 'lucide-react';
import QuestionForm from '@/components/qa/QuestionForm';

function timeAgo(dateStr) {
  const diff = (new Date() - new Date(dateStr)) / 1000;
  if (diff < 60) return '剛剛';
  if (diff < 3600) return `${Math.floor(diff / 60)}分鐘前`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}小時前`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}天前`;
  return new Date(dateStr).toLocaleDateString('zh-TW');
}

export default function PreArrivalQA() {
  const [questions, setQuestions] = useState([]);
  const [answerCounts, setAnswerCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const load = async () => {
    try {
      const [qs, answers] = await Promise.all([
        base44.entities.QAQuestion.list('-created_date', 100),
        base44.entities.QAAnswer.list('-created_date', 500),
      ]);
      setQuestions(qs);
      const counts = {};
      answers.forEach((a) => {
        counts[a.question_id] = (counts[a.question_id] || 0) + 1;
      });
      setAnswerCounts(counts);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-cyan-200 font-medium mb-4 block">新手答疑</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Pre-arrival Q&A</h1>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              任何關於來港生活的疑問，在這裡找到答案
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-3xl">
        {/* Ask Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">最新問題</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">瀏覽及解答新手提問</p>
          </div>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            我要提問
          </Button>
        </div>

        {/* Question List */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
          </div>
        ) : questions.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 text-center shadow-md border border-gray-100 dark:border-gray-800">
            <HelpCircle className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-2">暫時沒有問題</p>
            <p className="text-gray-400 text-sm">點擊「我要提問」發佈第一個問題！</p>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link to={`/QADetail?questionId=${q.id}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-5 hover:shadow-md hover:border-cyan-200 dark:hover:border-cyan-800 transition-all group cursor-pointer">
                    <div className="flex items-start gap-3">
                      {/* Author Avatar */}
                      {q.author_avatar ? (
                        <img src={q.author_avatar} alt={q.author_name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                          {(q.author_name || '?')[0]}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-1">
                          {q.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
                          {q.content}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span>{q.author_name}</span>
                          <span>·</span>
                          <span>{timeAgo(q.created_date)}</span>
                        </div>
                      </div>
                      {/* Reply Count */}
                      <div className="flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-cyan-500 mb-0.5" />
                        <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                          {answerCounts[q.id] || 0}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-cyan-500 mt-4 transition-colors flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Ask Question Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>我要提問</DialogTitle>
          </DialogHeader>
          <QuestionForm onCreated={() => { load(); setShowForm(false); }} />
        </DialogContent>
      </Dialog>
    </div>
  );
}