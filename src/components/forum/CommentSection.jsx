import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const load = async () => {
    try {
      const data = await base44.entities.ForumComment.filter({ post_id: postId }, '-created_date', 50);
      setComments(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      const newComment = await base44.entities.ForumComment.create({
        post_id: postId,
        content: text.trim(),
        author_name: author.trim() || '匿名',
      });
      setComments([newComment, ...comments]);
      setText('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="pt-4 mt-3 border-t border-gray-100 dark:border-gray-800 space-y-3">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="署名"
          className="w-24"
        />
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="寫下你的留言..."
          className="flex-1"
        />
        <Button type="submit" size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
          <Send className="w-4 h-4" />
        </Button>
      </form>
      {loading ? (
        <p className="text-sm text-gray-400 text-center py-2">載入中...</p>
      ) : comments.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-2">暫時沒有留言，成為第一個留言的人吧！</p>
      ) : (
        comments.map((c) => (
          <div key={c.id} className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300 flex-shrink-0">
              {(c.author_name || '?')[0]}
            </div>
            <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{c.author_name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{c.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}