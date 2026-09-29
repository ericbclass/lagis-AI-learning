import React from 'react';
import { COURSES } from '../data/courses';
import { UserProgress } from '../types';
import { CheckCircle2, Circle, PlayCircle, Clock, ArrowRight } from 'lucide-react';

interface CurriculumMapProps {
  progress: UserProgress;
  onSelectLevel: (levelId: number) => void;
}

export const CurriculumMap: React.FC<CurriculumMapProps> = ({
  progress,
  onSelectLevel
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          AI 零基礎完整學習地圖
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          你可以自由選擇有興趣的章節，也可以遵循推薦順序循序漸進。點擊任何關卡即可立即進入！
        </p>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-3">
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 font-bold flex items-center justify-center text-xs">✓</span>
            <span>已完成</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-indigo-950 border border-indigo-500 text-indigo-400 font-bold flex items-center justify-center text-xs">●</span>
            <span>目前學習</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 text-slate-500 font-bold flex items-center justify-center text-xs">○</span>
            <span>尚未開始</span>
          </span>
        </div>
      </div>

      {/* Curriculum Path List */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-6">
        {COURSES.map((course) => {
          const isCompleted = progress.completedLevels.includes(course.id);
          const isCurrent = progress.currentLevel === course.id;

          let statusSymbol = '○';
          let nodeBg = 'bg-slate-900 border-slate-700 text-slate-500';

          if (isCompleted) {
            statusSymbol = '✓';
            nodeBg = 'bg-emerald-950 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/40';
          } else if (isCurrent) {
            statusSymbol = '●';
            nodeBg = 'bg-indigo-950 border-indigo-500 text-indigo-300 ring-4 ring-indigo-500/20 shadow-md shadow-indigo-950/40';
          }

          return (
            <div key={course.id} className="relative group">
              {/* Timeline Node Badge */}
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-bold font-mono transition-transform group-hover:scale-110 ${nodeBg}`}
              >
                {statusSymbol}
              </div>

              {/* Course Card */}
              <div
                onClick={() => onSelectLevel(course.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-slate-800/90 border-indigo-500/80 shadow-lg shadow-indigo-950/30'
                    : isCompleted
                    ? 'bg-slate-800/60 border-slate-700/80 hover:border-emerald-500/60'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-900 text-indigo-400 border border-slate-800">
                      Level {course.id}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {course.title.replace(/^Level \d+：/, '')}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.estimatedMinutes} 分鐘
                    </span>
                    <span className="text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                      進入單元 <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {course.subtitle}
                </p>

                {/* Sub-steps breadcrumb preview */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-800/80 overflow-x-auto">
                  <span>① 先想一想</span>
                  <span>·</span>
                  <span>② 看懂概念</span>
                  <span>·</span>
                  <span>③ 看範例</span>
                  <span>·</span>
                  <span className="text-indigo-400 font-medium">④ 自己試試看</span>
                  <span>·</span>
                  <span>⑤ AI 檢查</span>
                  <span>·</span>
                  <span>⑥ 小測驗</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
