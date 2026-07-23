import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Send } from 'lucide-react';
import MobileSelect from '@/components/MobileSelect';

const areas = [
  '中環', '灣仔', '銅鑼灣', '北角', '將軍澳', '旺角', '太子', '深水埗',
  '九龍城', '觀塘', '鑽石山', '沙田', '大埔', '荃灣', '屯門', '元朗',
  '天水圍', '東涌', '其他',
];

export default function PeerMatchForm({ onCreated }) {
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('男');
  const [type, setType] = useState('找室友');
  const [targetArea, setTargetArea] = useState('旺角');
  const [budgetMin, setBudgetMin] = useState(4000);
  const [budgetMax, setBudgetMax] = useState(8000);
  const [bio, setBio] = useState('');
  const [contact, setContact] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName.trim() || !bio.trim()) return;
    setSubmitting(true);
    try {
      await base44.entities.PeerMatch.create({
        user_name: userName.trim(),
        gender,
        type,
        target_area: targetArea,
        budget_min: Number(budgetMin) || 0,
        budget_max: Number(budgetMax) || 0,
        bio: bio.trim(),
        contact: contact.trim() || '未提供',
      });
      setUserName(''); setBio(''); setContact('');
      onCreated?.();
    } catch (e) {
      console.error(e);
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="pm-name">暱稱</Label>
          <Input id="pm-name" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="你的名字" required />
        </div>
        <div>
          <Label htmlFor="pm-gender">性別</Label>
          <MobileSelect id="pm-gender" value={gender} onChange={setGender} options={['男', '女', '其他']} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="pm-type">需求類型</Label>
          <MobileSelect id="pm-type" value={type} onChange={setType} options={['找室友', '找同行']} />
        </div>
        <div>
          <Label htmlFor="pm-area">目標區域</Label>
          <MobileSelect id="pm-area" value={targetArea} onChange={setTargetArea} options={areas} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="pm-min">預算下限（HK$/月）</Label>
          <Input id="pm-min" type="number" value={budgetMin} onChange={(e) => setBudgetMin(e.target.value)} min={0} />
        </div>
        <div>
          <Label htmlFor="pm-max">預算上限（HK$/月）</Label>
          <Input id="pm-max" type="number" value={budgetMax} onChange={(e) => setBudgetMax(e.target.value)} min={0} />
        </div>
      </div>
      <div>
        <Label htmlFor="pm-bio">自我介紹</Label>
        <Textarea id="pm-bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="簡單介紹自己，例如生活習慣、興趣、期望..." rows={3} required />
      </div>
      <div>
        <Label htmlFor="pm-contact">聯絡方式（WhatsApp號碼 / WeChat ID）</Label>
        <Input id="pm-contact" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="例如：85251234567 或 wechat_id" />
      </div>
      <Button type="submit" disabled={submitting}
        className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white">
        {submitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
        發佈需求
      </Button>
    </form>
  );
}