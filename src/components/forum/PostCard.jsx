import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Heart, MessageSquare, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CommentSection from './CommentSection';

const categoryColors = {
  求職: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  交友: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
  租房: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  生活: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  其他: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const diff = Date.now() - d.getTime();
  if (diff < 60000) return '剛剛';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分鐘前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小時前`;
  return d.toLocaleDateString('zh-TW');
}

export default function PostCard({ post, onDelete }) {
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(() => {
    const arr = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    return arr.includes(post.id);
  });
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const handleLike = async () => {
    const arr = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
      localStorage.setItem('likedPosts', JSON.stringify(arr.filter((id) => id !== post.id)));
      await base44.entities.ForumPost.update(post.id, { likes: Math.max(0, likeCount - 1) });
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
      localStorage.setItem('likedPosts', JSON.stringify([...arr, post.id]));
      await base44.entities.ForumPost.update(post.id, { likes: likeCount + 1 });
    }
  };

  const handleDelete = async () => {
    if (!confirm('確定刪除此帖文？')) return;
    try {
      await base44.entities.ForumPost.delete(post.id);
      onDelete?.();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold flex-shrink-0">
          {(post.author_name || '?')[0]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 dark:text-white truncate">{post.author_name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(post.created_date)}</p>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            categoryColors[post.category] || categoryColors['其他']
          }`}
        >
          {post.category}
        </span>
        <button onClick={handleDelete} className="text-gray-400 hover:text-red-500 transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 whitespace-pre-wrap">{post.content}</p>
      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="rounded-xl w-full mb-3 max-h-96 object-cover"
        />
      )}
      <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-gray-800">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 text-sm transition-colors ${
            liked
              ? 'text-rose-500'
              : 'text-gray-500 dark:text-gray-400 hover:text-rose-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500' : ''}`} />
          {likeCount}
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          留言
        </button>
      </div>
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <CommentSection postId={post.id} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}