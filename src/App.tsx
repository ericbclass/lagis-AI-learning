/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { loadProgress, markLevelCompleted, resetProgress } from './utils/storage';
import { UserProgress } from './types';
import { Header } from './components/Header';
import { HomeHero } from './components/HomeHero';
import { CurriculumMap } from './components/CurriculumMap';
import { LevelViewer } from './components/LevelViewer';
import { ToolCatalog } from './components/ToolCatalog';
import { PromptPlayground } from './components/PromptPlayground';
import { ProgressModal } from './components/ProgressModal';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);
  const [currentTab, setCurrentTab] = useState<'home' | 'map' | 'level' | 'tools' | 'playground'>('home');
  const [activeLevelId, setActiveLevelId] = useState<number>(() => {
    const loaded = loadProgress();
    return loaded.currentLevel || 0;
  });
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);

  useEffect(() => {
    // Keep activeLevelId in sync with latest progression if user resets
    if (activeLevelId > 11) {
      setActiveLevelId(11);
    }
  }, [activeLevelId]);

  const handleSelectLevel = (levelId: number) => {
    setActiveLevelId(levelId);
    setCurrentTab('level');
  };

  const handleCompleteLevel = (levelId: number, score: number) => {
    const updated = markLevelCompleted(levelId, score);
    setProgress(updated);
  };

  const handleResetProgress = () => {
    const fresh = resetProgress();
    setProgress(fresh);
    setActiveLevelId(0);
    setCurrentTab('home');
    setIsProgressModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Header Contract */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        progress={progress}
        onOpenProgress={() => setIsProgressModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {currentTab === 'home' && (
          <HomeHero
            progress={progress}
            onStartLearning={() => {
              setActiveLevelId(progress.currentLevel);
              setCurrentTab('level');
            }}
            onNavigate={(tab) => {
              if (tab === 'level') {
                setActiveLevelId(progress.currentLevel);
              }
              setCurrentTab(tab);
            }}
          />
        )}

        {currentTab === 'map' && (
          <CurriculumMap
            progress={progress}
            onSelectLevel={handleSelectLevel}
          />
        )}

        {currentTab === 'level' && (
          <LevelViewer
            levelId={activeLevelId}
            onNavigateLevel={(nextId) => setActiveLevelId(nextId)}
            onCompleteLevel={handleCompleteLevel}
            progress={progress}
          />
        )}

        {currentTab === 'tools' && (
          <ToolCatalog />
        )}

        {currentTab === 'playground' && (
          <PromptPlayground />
        )}
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/80 py-8 text-slate-500 text-xs text-center space-y-2 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="font-semibold text-slate-300 block">AI 零基礎互動式教學網站</span>
            <span className="text-[11px] text-slate-500">專為新手打造的做中學實戰平台 · 邊做邊玩無門檻</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setCurrentTab('home')}
              className="hover:text-slate-200 transition-colors"
            >
              首頁
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('map')}
              className="hover:text-slate-200 transition-colors"
            >
              學習地圖
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('tools')}
              className="hover:text-slate-200 transition-colors"
            >
              工具探索
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('playground')}
              className="hover:text-slate-200 transition-colors"
            >
              Prompt 練習場
            </button>
          </div>

          <div className="text-right text-[11px] text-slate-500">
            <span>恪守資料安全規範 · 培養人機協作思維</span>
          </div>
        </div>
      </footer>

      {/* Progress & Certificate Modal */}
      <ProgressModal
        isOpen={isProgressModalOpen}
        onClose={() => setIsProgressModalOpen(false)}
        progress={progress}
        onReset={handleResetProgress}
      />
    </div>
  );
}
