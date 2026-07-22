import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, DollarSign, Trash2, User, Copy, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const genderColors = {
  男: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  女: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
  其他: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
};

const typeColors = {
  找室友: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  找同行: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
};

export default function PeerMatchCard({ match, onDelete }) {
  const [showMessage, setShowMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  const isWhatsApp = /^\d[\d\s-]+$/.test(match.contact || '');
  const waLink = isWhatsApp ? `https://wa.me/${match.contact.replace(/\D/g, '')}` : null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(match.contact || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = async () => {
    if (!confirm('確定刪除此需求？')) return;
    try {
      await base44.entities.PeerMatch.delete(match.id);
      onDelete?.();
    } catch (e) {
      console.error(e);
    }
  };

  const formatBudget = () => {
    const min = match.budget_min || 0;
    const max = match.budget_max || 0;
    if (min && max) return `$${min.toLocaleString()} - $${max.toLocaleString()}/月`;
    if (min) return `$${min.toLocaleString()}+/月`;
    if (max) return `≤$${max.toLocaleString()}/月`;
    return '面議';
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col"
      >
        {/* Header: Avatar + Name + Badges */}
        <div className="p-5 flex items-start gap-3">
          {match.avatar_url ? (
            <img src={match.avatar_url} alt={match.user_name} className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {(match.user_name || '?')[0]}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-900 dark:text-white truncate">{match.user_name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${genderColors[match.gender] || genderColors['其他']}`}>
                {match.gender}
              </span>
            </div>
            <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${typeColors[match.type] || typeColors['找室友']}`}>
              {match.type}
            </span>
          </div>
          <button onClick={handleDelete} className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Details */}
        <div className="px-5 pb-3 space-y-2 flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
            <span>{match.target_area}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <DollarSign className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{formatBudget()}</span>
          </div>
        </div>

        {/* Bio */}
        <div className="px-5 pb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">{match.bio}</p>
        </div>

        {/* Message Button */}
        <div className="px-5 pb-5">
          <Button
            onClick={() => setShowMessage(true)}
            className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            私訊
          </Button>
        </div>
      </motion.div>

      {/* Message Dialog */}
      <Dialog open={showMessage} onOpenChange={setShowMessage}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {match.avatar_url ? (
                <img src={match.avatar_url} alt={match.user_name} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {(match.user_name || '?')[0]}
                </div>
              )}
              聯絡 {match.user_name}
            </DialogTitle>
            <DialogDescription>
              透過以下方式與對方聯絡：
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">聯絡方式</p>
              <p className="font-mono font-medium text-gray-900 dark:text-white break-all">{match.contact}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCopy} variant="outline" className="flex-1">
                {copied ? <><CheckCircle2 className="w-4 h-4 mr-1 text-emerald-500" />已複製</> : <><Copy className="w-4 h-4 mr-1" />複製</>}
              </Button>
              {waLink && (
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                    <MessageCircle className="w-4 h-4 mr-1" />WhatsApp
                  </Button>
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}