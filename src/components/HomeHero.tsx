import React from 'react';
import { UserProgress } from '../types';
import { ArrowRight, Map, Wrench, Terminal, CheckCircle2, Play, Sparkles, Shield, Cpu, BookOpen } from 'lucide-react';

interface HomeHeroProps {
  progress: UserProgress;
  onStartLearning: () => void;
  onNavigate: (tab: 'map' | 'tools' | 'playground' | 'level') => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  progress,
  onStartLearning,
  onNavigate
}) => {
  const completedCount = progress.completedLevels.length;
  const percentage = Math.round((completedCount / 12) * 100);

  return (
    <div className="space-y-12 py-6">
      {/* Hero Headline Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>專為完全新手設計的互動式實戰課程</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          AI 零基礎學習地圖
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          不用懂程式，也可以一步一步學會使用 AI。<br className="hidden sm:inline" />
          告別枯燥的電子書閱讀，透過「概念 → 示範 → 自己操作 → 測驗」邊做邊玩。
        </p>

        {/* 4 Primary Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onStartLearning}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-950/50 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{completedCount === 0 ? '開始第一課 (Level 0)' : `繼續學習 (Level ${progress.currentLevel})`}</span>
          </button>

          <button
            onClick={() => onNavigate('map')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm transition-all cursor-pointer"
          >
            <Map className="w-4 h-4 text-indigo-400" />
            <span>學習地圖</span>
          </button>

          <button
            onClick={() => onNavigate('tools')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm transition-all cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-emerald-400" />
            <span>工具探索</span>
          </button>

          <button
            onClick={() => onNavigate('playground')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>Prompt 練習場</span>
          </button>
        </div>
      </section>

      {/* Progress Card Section */}
      <section className="max-w-4xl mx-auto bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              目前個人進度
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold font-mono text-white">{completedCount}</span>
              <span className="text-slate-400 text-xs">/ 12 個關卡已解鎖完成</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-indigo-300 font-medium">總體進度：{percentage}%</span>
            <button
              onClick={() => onNavigate('map')}
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium cursor-pointer"
            >
              檢視完整地圖 <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden p-0.5 border border-slate-700/80">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${Math.max(4, percentage)}%` }}
          ></div>
        </div>

        {/* Level Nodes Mini Roadmap */}
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5 mt-5">
          {Array.from({ length: 12 }).map((_, i) => {
            const isCompleted = progress.completedLevels.includes(i);
            const isCurrent = progress.currentLevel === i;
            return (
              <button
                key={i}
                onClick={() => onNavigate('level')}
                className={`py-2 rounded-lg border text-center text-xs font-mono transition-all cursor-pointer ${
                  isCompleted
                    ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-300 font-semibold'
                    : isCurrent
                    ? 'bg-indigo-950 border-indigo-500 text-white ring-2 ring-indigo-500/50'
                    : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700'
                }`}
                title={`Level ${i}`}
              >
                {isCompleted ? '✓' : isCurrent ? '●' : '○'}
                <span className="block text-[10px] text-slate-400 font-sans mt-0.5">L{i}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3 Pillars Curriculum Highlight */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-xl font-bold text-white text-center">三大進階學習階段</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all">
            <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-indigo-400 mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1.5">階段一：思維與 Prompt 基礎</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              理解 AI 與搜尋的差異、告別「幫我做報告」空洞提問。掌握「現況、目標、障礙、限制」黃金四維公式。
            </p>
            <div className="text-[11px] text-indigo-300 space-y-1">
              <div>· Level 0：AI 是什麼與資料整理對決</div>
              <div>· Level 1：Prompt 改造遊戲機</div>
              <div>· Level 2：四維提示詞組裝法</div>
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all">
            <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800 flex items-center justify-center text-sky-400 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1.5">階段二：核心工具與多模態實戰</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              依情境選工具。用 Google AI Studio 打造互動 App、Google Vids 拆解短影音、NotebookLM 研讀專屬文件、Mermaid 畫圖。
            </p>
            <div className="text-[11px] text-sky-300 space-y-1">
              <div>· Level 3：AI 工具怎麼選決策樹</div>
              <div>· Level 4：Google AI Studio APP 需求產生器</div>
              <div>· Level 5：AI 影片與三視圖一致性</div>
              <div>· Level 6 & 7：NotebookLM 與 Mermaid</div>
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1.5">階段三：自動化、資安與工作落地</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              用 n8n 打造 AI Agent 自動管線、LM Studio 本機地端 AI 斷網運行、PII 機密資安裁決、以及新產品專案進度管理實戰。
            </p>
            <div className="text-[11px] text-emerald-300 space-y-1">
              <div>· Level 8：n8n 與 AI Agent 流程拼圖</div>
              <div>· Level 9：地端本機 AI 資料旅行</div>
              <div>· Level 10：AI × 公司資料資安裁決</div>
              <div>· Level 11：料件進度人機協作全閉環</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
