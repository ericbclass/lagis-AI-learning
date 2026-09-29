import React, { useState } from 'react';
import { UserProgress } from '../types';
import { COURSES } from '../data/courses';
import { X, Award, RotateCcw, CheckCircle2, Circle, Trophy } from 'lucide-react';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onReset: () => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  isOpen,
  onClose,
  progress,
  onReset
}) => {
  const [confirmReset, setConfirmReset] = useState(false);

  if (!isOpen) return null;

  const completedCount = progress.completedLevels.length;
  const isMaster = completedCount === 12;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/80 flex items-center justify-center text-indigo-400">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">我的學習進度與證書</h3>
            <p className="text-xs text-slate-400">進度即時自動保存於本機瀏覽器</p>
          </div>
        </div>

        {/* Progress summary box */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block">目前完成關卡</span>
            <span className="text-2xl font-bold font-mono text-white">
              {completedCount} <span className="text-sm font-normal text-slate-500">/ 12</span>
            </span>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block">成就徽章</span>
            <span className="text-xs font-semibold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 inline-block mt-1">
              {isMaster ? '🏆 AI 全能零基礎領航員' : completedCount >= 6 ? '🥈 AI 實戰進階者' : '🌱 AI 探索啟程者'}
            </span>
          </div>
        </div>

        {/* Completed list */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-400 block">全部關卡清單狀態：</span>
          <div className="divide-y divide-slate-800 max-h-56 overflow-y-auto pr-1">
            {COURSES.map((course) => {
              const isDone = progress.completedLevels.includes(course.id);
              const score = progress.quizScores[course.id];

              return (
                <div key={course.id} className="py-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                    )}
                    <span className={isDone ? 'text-white font-medium' : 'text-slate-400'}>
                      Level {course.id}：{course.title.replace(/^Level \d+：/, '')}
                    </span>
                  </div>
                  {isDone && score !== undefined && (
                    <span className="text-[11px] text-emerald-400 font-mono">
                      測驗 {score}/{course.step6Quiz.length}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Reset progress area */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重新開始學習（清除進度）</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-rose-300">確定重置全部進度？</span>
              <button
                onClick={() => {
                  onReset();
                  setConfirmReset(false);
                }}
                className="px-2.5 py-1 text-xs bg-rose-600 hover:bg-rose-500 text-white rounded font-medium transition-colors"
              >
                確認重置
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="px-2 py-1 text-xs text-slate-400 hover:text-white"
              >
                取消
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
};
