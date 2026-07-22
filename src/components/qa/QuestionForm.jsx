import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Send } from 'lucide-react';

export default function QuestionForm({ onCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setSubmitting(true);
    try {
      await base44.entities.QAQuestion.create({
        title: title.trim(),
        content: content.trim(),
        author_name: authorName.trim() || '匿名港漂',
      });
      setTitle(''); setContent(''); setAuthorName('');
      onCreated?.();
    } catch (e) {
      console.error(e);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="q-title">問題標題</Label>
        <Input id="q-title" value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder="例如：內地學歷點樣喺香港認證？" required />
      </div>
      <div>
        <Label htmlFor="q-content">問題內容</Label>
        <Textarea id="q-content" value={content} onChange={(e) => setContent(e.target.value)}
          placeholder="詳細描述你的問題..." rows={4} required />
      </div>
      <div>
        <Label htmlFor="q-author">你的暱稱</Label>
        <Input id="q-author" value={authorName} onChange={(e) => setAuthorName(e.target.value)}
          placeholder="留空則顯示「匿名港漂」" />
      </div>
      <Button type="submit" disabled={submitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
        {submitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
        發佈問題
      </Button>
    </form>
  );
}