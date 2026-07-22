import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Circle, Loader2, ClipboardList } from 'lucide-react';

const phases = [
  {
    key: 'before_30',
    label: '出發前 30 天',
    subtitle: 'Before Departure (30 Days)',
    color: 'from-blue-500 to-cyan-500',
    accent: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    key: 'before_15',
    label: '出發前 15 天',
    subtitle: 'Before Departure (15 Days)',
    color: 'from-amber-500 to-orange-500',
    accent: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    key: 'after_3',
    label: '抵港後 3 天',
    subtitle: 'After Arrival (3 Days)',
    color: 'from-emerald-500 to-teal-500',
    accent: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
];

export default function ArrivalChecklist() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openPhase, setOpenPhase] = useState('before_30');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await base44.entities.ChecklistTask.list('order', 100);
        setTasks(data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    load();
  }, []);

  const toggleTask = async (task) => {
    const newVal = !task.is_completed;
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, is_completed: newVal } : t)));
    try {
      await base44.entities.ChecklistTask.update(task.id, { is_completed: newVal });
    } catch (e) {
      console.error(e);
      setTasks(tasks.map((t) => (t.id === task.id ? { ...t, is_completed: !newVal } : t)));
    }
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.is_completed).length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const tasksByPhase = (phaseKey) => tasks.filter((t) => t.phase === phaseKey);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-indigo-200 font-medium mb-4 block">赴港清單</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Arrival Checklist</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              一步一步完成赴港準備，輕鬆展開港漂生活
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">整體完成度</h2>
            </div>
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <div className="flex items-center justify-between mt-3 text-sm text-gray-500 dark:text-gray-400">
            <span>已完成 {completedTasks} / {totalTasks} 項任務</span>
            <span>
              {progress === 100
                ? '🎉 全部完成！歡迎來到香港！'
                : progress >= 50
                ? '加油！已過一半'
                : '繼續努力！'}
            </span>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        ) : (
          /* Accordion Phases */
          <div className="space-y-4">
            {phases.map((phase) => {
              const phaseTasks = tasksByPhase(phase.key);
              const phaseCompleted = phaseTasks.filter((t) => t.is_completed).length;
              const phaseProgress =
                phaseTasks.length > 0 ? Math.round((phaseCompleted / phaseTasks.length) * 100) : 0;
              const isOpen = openPhase === phase.key;

              return (
                <div
                  key={phase.key}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenPhase(isOpen ? null : phase.key)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                      >
                        {phaseCompleted}/{phaseTasks.length}
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {phase.label}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{phase.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-medium ${phase.accent} hidden sm:block`}>
                        {phaseProgress}%
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Mini progress bar */}
                  <div className="px-6 pb-2">
                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${phase.color} rounded-full transition-all duration-500`}
                        style={{ width: `${phaseProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-2 space-y-2">
                          {phaseTasks.length === 0 ? (
                            <p className="text-sm text-gray-400 text-center py-4">暫無任務</p>
                          ) : (
                            phaseTasks.map((task) => (
                              <div
                                key={task.id}
                                className={`flex items-start gap-3 p-4 rounded-xl transition-colors cursor-pointer ${
                                  task.is_completed
                                    ? `${phase.bg} opacity-75`
                                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                }`}
                                onClick={() => toggleTask(task)}
                              >
                                {task.is_completed ? (
                                  <CheckCircle2 className={`w-5 h-5 ${phase.accent} flex-shrink-0 mt-0.5`} />
                                ) : (
                                  <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p
                                    className={`font-medium ${
                                      task.is_completed
                                        ? 'text-gray-500 dark:text-gray-500 line-through'
                                        : 'text-gray-900 dark:text-white'
                                    }`}
                                  >
                                    {task.title}
                                  </p>
                                  {task.description && (
                                    <p
                                      className={`text-sm mt-1 ${
                                        task.is_completed
                                          ? 'text-gray-400 dark:text-gray-600'
                                          : 'text-gray-500 dark:text-gray-400'
                                      }`}
                                    >
                                      {task.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}