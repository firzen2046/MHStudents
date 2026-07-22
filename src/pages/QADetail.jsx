import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Loader2, Send, MessageSquare, ThumbsUp } from 'lucide-react';
import AnswerCard from '@/components/qa/AnswerCard';

function timeAgo(dateStr) {
  const diff = (new Date() - new Date(dateStr)) / 1000;
  if (diff < 60) return '剛剛';
  if (diff < 3600) return `${Math.floor(diff / 60)}分鐘前`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}小時前`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}天前`;
  return new Date(dateStr).toLocaleDateString('zh-TW');
}

export default function QADetail() {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answerContent, setAnswerContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const questionId = urlParams.get('questionId');

  const load = async () => {
    if (!questionId) { setLoading(false); return; }
    try {
      const [q, ans] = await Promise.all([
        base44.entities.QAQuestion.get(questionId),
        base44.entities.QAAnswer.filter({ question_id: questionId }, '-created_date', 500),
      ]);
      setQuestion(q);
      setAnswers(ans);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, [questionId]);

  // Sort answers by upvotes descending, then by created_date
  const sortedAnswers = [...answers].sort((a, b) => {
    const diff = (b.upvotes || 0) - (a.upvotes || 0);
    if (diff !== 0) return diff;
    return new Date(b.created_date) - new Date(a.created_date);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!answerContent.trim()) return;
    setSubmitting(true);
    try {
      await base44.entities.QAAnswer.create({
        question_id: questionId,
        content: answerContent.trim(),
        author_name: authorName.trim() || '匿名港漂',
        upvotes: 0,
      });
      setAnswerContent('');
      setAuthorName('');
      load();
    } catch (e) {
      console.error(e);
    }
    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
      </div>
    );
  }

  if (!question) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 gap-4">
        <p className="text-gray-500">找不到此問題</p>
        <Link to="/PreArrivalQA">
          <Button variant="outline">返回問題列表</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 py-8 max-w-3xl">
        {/* Back Button */}
        <Link to="/PreArrivalQA" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回問題列表
        </Link>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-6 mb-8"
        >
          <div className="flex items-start gap-3 mb-4">
            {question.author_avatar ? (
              <img src={question.author_avatar} alt={question.author_name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {(question.author_name || '?')[0]}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900 dark:text-white">{question.author_name}</span>
                <span className="text-xs text-gray-400">· {timeAgo(question.created_date)}</span>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{question.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{question.content}</p>
        </motion.div>

        {/* Answers Header */}
        <div className="flex items-center gap-2 mb-5">
          <MessageSquare className="w-5 h-5 text-cyan-500" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {answers.length} 個解答
          </h2>
          <span className="text-xs text-gray-400 ml-auto flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" /> 按點讚數排序
          </span>
        </div>

        {/* Answers */}
        {answers.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-800 mb-8">
            <p className="text-gray-400 text-sm">暫時沒有解答，成為第一個回答的人吧！</p>
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {sortedAnswers.map((ans, i) => (
              <AnswerCard key={ans.id} answer={ans} rank={i + 1} />
            ))}
          </div>
        )}

        {/* Answer Form */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-6">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">你的解答</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              value={answerContent}
              onChange={(e) => setAnswerContent(e.target.value)}
              placeholder="分享你的經驗或解答，幫助新手港漂..."
              rows={4}
              required
            />
            <input
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="暱稱（留空則顯示「匿名港漂」）"
              className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white"
            />
            <Button type="submit" disabled={submitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
              {submitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
              發佈解答
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}