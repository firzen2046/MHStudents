import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { ChevronUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

function timeAgo(dateStr) {
  const diff = (new Date() - new Date(dateStr)) / 1000;
  if (diff < 60) return '剛剛';
  if (diff < 3600) return `${Math.floor(diff / 60)}分鐘前`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}小時前`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}天前`;
  return new Date(dateStr).toLocaleDateString('zh-TW');
}

export default function AnswerCard({ answer, rank }) {
  const [upvotes, setUpvotes] = useState(answer.upvotes || 0);
  const [hasUpvoted, setHasUpvoted] = useState(() => {
    const upvoted = JSON.parse(localStorage.getItem('qa_upvoted') || '[]');
    return upvoted.includes(answer.id);
  });
  const [voting, setVoting] = useState(false);

  const handleUpvote = async () => {
    if (hasUpvoted || voting) return;
    setVoting(true);
    const upvoted = JSON.parse(localStorage.getItem('qa_upvoted') || '[]');
    upvoted.push(answer.id);
    localStorage.setItem('qa_upvoted', JSON.stringify(upvoted));
    try {
      await base44.entities.QAAnswer.update(answer.id, { upvotes: upvotes + 1 });
      setUpvotes(upvotes + 1);
      setHasUpvoted(true);
    } catch (e) {
      console.error(e);
      upvoted.pop();
      localStorage.setItem('qa_upvoted', JSON.stringify(upvoted));
    }
    setVoting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border p-5 transition-all ${
        rank === 1
          ? 'border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-900/10'
          : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900'
      }`}
    >
      {rank === 1 && upvotes > 0 && (
        <div className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 mb-2">
          <CheckCircle2 className="w-3.5 h-3.5" /> 熱門解答
        </div>
      )}
      <div className="flex items-start gap-3">
        {/* Upvote Button */}
        <button
          onClick={handleUpvote}
          disabled={hasUpvoted || voting}
          className={`flex flex-col items-center justify-center w-12 py-2 rounded-xl transition-all flex-shrink-0 ${
            hasUpvoted
              ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
              : 'bg-gray-50 dark:bg-gray-800 text-gray-400 hover:bg-cyan-50 hover:text-cyan-500'
          }`}
        >
          <ChevronUp className="w-5 h-5" />
          <span className="text-sm font-bold mt-0.5">{upvotes}</span>
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {answer.author_avatar ? (
              <img src={answer.author_avatar} alt={answer.author_name} className="w-7 h-7 rounded-full object-cover" />
            ) : (
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                {(answer.author_name || '?')[0]}
              </div>
            )}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{answer.author_name}</span>
            <span className="text-xs text-gray-400">· {timeAgo(answer.created_date)}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{answer.content}</p>
        </div>
      </div>
    </motion.div>
  );
}