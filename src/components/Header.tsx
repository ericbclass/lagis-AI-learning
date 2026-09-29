import React from 'react';
import { UserProgress } from '../types';
import { Sparkles, Compass, Wrench, Terminal, RotateCcw } from 'lucide-react';

interface HeaderProps {
  currentTab: 'home' | 'map' | 'level' | 'tools' | 'playground';
  setCurrentTab: (tab: 'home' | 'map' | 'level' | 'tools' | 'playground') => void;
  progress: UserProgress;
  onOpenProgress: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  progress,
  onOpenProgress
}) => {
  const completedCount = progress.completedLevels.length;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setCurrentTab('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            AI 零基礎學習地圖
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setCurrentTab('home')}
            className={`transition-colors hover:text-white cursor-pointer ${
              currentTab === 'home' ? 'text-indigo-400 font-semibold' : ''
            }`}
          >
            首頁總覽
          </button>
          <button
            onClick={() => setCurrentTab('map')}
            className={`transition-colors hover:text-white cursor-pointer ${
              currentTab === 'map' ? 'text-indigo-400 font-semibold' : ''
            }`}
          >
            學習地圖
          </button>
          <button
            onClick={() => setCurrentTab('tools')}
            className={`transition-colors hover:text-white cursor-pointer ${
              currentTab === 'tools' ? 'text-indigo-400 font-semibold' : ''
            }`}
          >
            工具探索
          </button>
          <button
            onClick={() => setCurrentTab('playground')}
            className={`transition-colors hover:text-white cursor-pointer ${
              currentTab === 'playground' ? 'text-indigo-400 font-semibold' : ''
            }`}
          >
            Prompt 練習場
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenProgress}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
          >
            <span className="text-emerald-400 font-mono font-semibold">{completedCount}/12</span>
            <span className="hidden sm:inline">學習進度</span>
          </button>

          <button
            onClick={() => setCurrentTab('level')}
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors whitespace-nowrap shadow-sm shadow-indigo-900 cursor-pointer"
          >
            {completedCount === 0 ? '開始學習' : '繼續課程'}
          </button>
        </div>
      </div>
    </header>
  );
};
