import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Users, Trash2, CheckCircle2, XCircle, Clock, ChevronDown, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const statusConfig = {
  pending: { label: '待確認', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/30' },
  confirmed: { label: '已確認', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
  cancelled: { label: '已取消', icon: XCircle, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/30' },
};

export default function EventCard({ event, onUpdate }) {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showRegList, setShowRegList] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const load = async () => {
    try {
      const data = await base44.entities.EventRegistration.filter(
        { event_id: event.id },
        '-created_date',
        100
      );
      setRegistrations(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [event.id]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    try {
      const reg = await base44.entities.EventRegistration.create({
        event_id: event.id,
        participant_name: name.trim(),
        contact: contact.trim(),
        status: 'pending',
      });
      setRegistrations([reg, ...registrations]);
      setName('');
      setContact('');
    } catch (e) {
      console.error(e);
    }
  };

  const updateStatus = async (regId, status) => {
    try {
      await base44.entities.EventRegistration.update(regId, { status });
      setRegistrations(registrations.map((r) => (r.id === regId ? { ...r, status } : r)));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteEvent = async () => {
    if (!confirm('確定刪除此活動？所有報名記錄也會被刪除。')) return;
    try {
      await base44.entities.EventRegistration.deleteMany({ event_id: event.id });
      await base44.entities.UserEvent.delete(event.id);
      onUpdate?.();
    } catch (e) {
      console.error(e);
    }
  };

  const confirmedCount = registrations.filter((r) => r.status === 'confirmed').length;
  const statusIcons = statusConfig;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden">
      {event.image_url && (
        <img src={event.image_url} alt={event.title} className="w-full h-40 object-cover" />
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">主辦：{event.organizer_name}</p>
          </div>
          <span className="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex-shrink-0">
            {event.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{event.description}</p>
        <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
          {event.event_date && (
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(event.event_date).toLocaleDateString('zh-TW')}
            </span>
          )}
          {event.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {event.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {confirmedCount}/{event.capacity || '∞'} 已確認
          </span>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="flex flex-col sm:flex-row gap-2 mb-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="姓名"
            required
            className="flex-1"
          />
          <Input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="聯絡方式（電話/WhatsApp）"
            required
            className="flex-1"
          />
          <Button type="submit" size="sm" className="bg-indigo-500 hover:bg-indigo-600 text-white">
            <UserPlus className="w-4 h-4 mr-1" /> 報名
          </Button>
        </form>

        {/* Toggle Registration List */}
        <button
          onClick={() => setShowRegList(!showRegList)}
          className="w-full flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors pt-3 border-t border-gray-100 dark:border-gray-800"
        >
          <span>報名名單（{registrations.length}人）</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showRegList ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {showRegList && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-2">
                {loading ? (
                  <p className="text-sm text-gray-400 text-center py-2">載入中...</p>
                ) : registrations.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-2">暫時沒有報名</p>
                ) : (
                  registrations.map((r) => {
                    const cfg = statusIcons[r.status] || statusIcons.pending;
                    return (
                      <div
                        key={r.id}
                        className={`flex items-center gap-2 p-2 rounded-lg ${cfg.bg}`}
                      >
                        <cfg.icon className={`w-4 h-4 ${cfg.color} flex-shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {r.participant_name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {r.contact}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => updateStatus(r.id, 'confirmed')}
                            className="p-1 rounded hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                            title="確認"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          </button>
                          <button
                            onClick={() => updateStatus(r.id, 'cancelled')}
                            className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/50"
                            title="取消"
                          >
                            <XCircle className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={handleDeleteEvent}
          className="w-full mt-4 flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-3 h-3" /> 刪除活動
        </button>
      </div>
    </div>
  );
}