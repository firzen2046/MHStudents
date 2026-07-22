import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ImagePlus, Loader2, Send } from 'lucide-react';

const categories = ['求職', '交友', '租房', '生活', '其他'];

export default function PostForm({ onCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('其他');
  const [authorName, setAuthorName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setImageUrl(file_url);
    } catch (err) {
      console.error(err);
    }
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setSubmitting(true);
    try {
      await base44.entities.ForumPost.create({
        title: title.trim(),
        content: content.trim(),
        category,
        author_name: authorName.trim() || '匿名',
        image_url: imageUrl || undefined,
        likes: 0,
      });
      setTitle('');
      setContent('');
      setAuthorName('');
      setImageUrl('');
      setCategory('其他');
      onCreated?.();
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-800 space-y-4"
    >
      <div>
        <Label htmlFor="post-title">帖文標題</Label>
        <Input
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="輸入標題..."
          required
        />
      </div>
      <div>
        <Label htmlFor="post-content">帖文內容</Label>
        <Textarea
          id="post-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="分享你的想法..."
          rows={4}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="post-category">分類標籤</Label>
          <select
            id="post-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="post-author">署名</Label>
          <Input
            id="post-author"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="匿名"
          />
        </div>
      </div>
      <div>
        <Label>圖片上傳（選填）</Label>
        <div className="flex items-center gap-3">
          <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            <ImagePlus className="w-4 h-4" />
            {uploading ? '上傳中...' : '選擇圖片'}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
          {imageUrl && (
            <img src={imageUrl} alt="preview" className="w-16 h-16 rounded-lg object-cover" />
          )}
        </div>
      </div>
      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white"
      >
        {submitting ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <Send className="w-4 h-4 mr-2" />
        )}
        發佈帖文
      </Button>
    </form>
  );
}