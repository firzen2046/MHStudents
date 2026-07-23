import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ImagePlus, Loader2, CalendarPlus } from 'lucide-react';
import MobileSelect from '@/components/MobileSelect';

const categories = ['社交', '學習', '運動', '其他'];

export default function EventForm({ onCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState(10);
  const [category, setCategory] = useState('社交');
  const [organizerName, setOrganizerName] = useState('');
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
    if (!title.trim() || !description.trim()) return;
    setSubmitting(true);
    try {
      await base44.entities.UserEvent.create({
        title: title.trim(),
        description: description.trim(),
        event_date: eventDate || undefined,
        location: location.trim() || undefined,
        capacity: Number(capacity) || 0,
        category,
        organizer_name: organizerName.trim() || '匿名',
        image_url: imageUrl || undefined,
      });
      setTitle('');
      setDescription('');
      setEventDate('');
      setLocation('');
      setCapacity(10);
      setCategory('社交');
      setOrganizerName('');
      setImageUrl('');
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
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="evt-title">活動名稱</Label>
          <Input
            id="evt-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="例如：周末行山活動"
            required
          />
        </div>
        <div>
          <Label htmlFor="evt-organizer">主辦人</Label>
          <Input
            id="evt-organizer"
            value={organizerName}
            onChange={(e) => setOrganizerName(e.target.value)}
            placeholder="匿名"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="evt-desc">活動簡介</Label>
        <Textarea
          id="evt-desc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="介紹你的活動內容..."
          rows={3}
          required
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="evt-date">活動日期</Label>
          <Input
            id="evt-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="evt-location">地點</Label>
          <Input
            id="evt-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="例如：中環"
          />
        </div>
        <div>
          <Label htmlFor="evt-capacity">名額上限</Label>
          <Input
            id="evt-capacity"
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            min={1}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="evt-category">活動分類</Label>
        <MobileSelect id="evt-category" value={category} onChange={setCategory} options={categories} />
      </div>
      <div>
        <Label>活動圖片（選填）</Label>
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
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
      >
        {submitting ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <CalendarPlus className="w-4 h-4 mr-2" />
        )}
        發佈活動
      </Button>
    </form>
  );
}