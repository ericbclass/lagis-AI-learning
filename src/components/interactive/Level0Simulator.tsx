import React, { useState } from 'react';
import { Clock, Search, Sparkles, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

export const Level0Simulator: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'none' | 'manual' | 'search' | 'ai'>('none');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const startSimulation = (mode: 'manual' | 'search' | 'ai') => {
    setActiveMode(mode);
    setIsProcessing(true);
    setProgress(0);

    const duration = mode === 'manual' ? 3000 : mode === 'search' ? 1000 : 1500;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentPercent = Math.min(100, Math.round((currentStep / steps) * 100));
      setProgress(currentPercent);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsProcessing(false);
      }
    }, intervalTime);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            100 頁資料處理對決實驗室
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            目標：在 100 頁的年度營運報告中，找出所有「第四季料件延遲」的真正項目。
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>真實資料中藏有 5 處延遲</span>
        </div>
      </div>

      {/* Mode selection buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => startSimulation('manual')}
          disabled={isProcessing}
          className={`p-3.5 rounded-lg border text-left transition-all ${
            activeMode === 'manual'
              ? 'bg-amber-950/40 border-amber-500/80 text-white'
              : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
          }`}
        >
          <div className="flex items-center gap-2 font-medium text-amber-300 mb-1">
            <Clock className="w-4 h-4" />
            <span>模式 A：傳統人工肉眼翻閱</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            一頁一頁手動瀏覽，耗神費力，考驗耐力與眼力。
          </p>
        </button>

        <button
          onClick={() => startSimulation('search')}
          disabled={isProcessing}
          className={`p-3.5 rounded-lg border text-left transition-all ${
            activeMode === 'search'
              ? 'bg-blue-950/40 border-blue-500/80 text-white'
              : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
          }`}
        >
          <div className="flex items-center gap-2 font-medium text-blue-300 mb-1">
            <Search className="w-4 h-4" />
            <span>模式 B：Ctrl+F 關鍵字搜尋</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            搜尋「延遲」字串，速度快，但只能精確比對文字。
          </p>
        </button>

        <button
          onClick={() => startSimulation('ai')}
          disabled={isProcessing}
          className={`p-3.5 rounded-lg border text-left transition-all ${
            activeMode === 'ai'
              ? 'bg-indigo-950/40 border-indigo-500/80 text-white shadow-lg shadow-indigo-950/50'
              : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
          }`}
        >
          <div className="flex items-center gap-2 font-medium text-indigo-300 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>模式 C：AI 語意理解提取</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            理解同義詞、前後文脈絡，自動歸納異常原因。
          </p>
        </button>
      </div>

      {/* Progress / Status Bar */}
      {activeMode !== 'none' && (
        <div className="bg-slate-900/80 border border-slate-700/80 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="text-slate-400">
              {isProcessing ? '正在執行分析處理...' : '處理完成！'}
            </span>
            <span className="font-mono text-indigo-300">{progress}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-75 ${
                activeMode === 'ai'
                  ? 'bg-indigo-500'
                  : activeMode === 'search'
                  ? 'bg-blue-500'
                  : 'bg-amber-500'
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Results Deck */}
      {!isProcessing && activeMode !== 'none' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">處理耗時</span>
              <span className="text-lg font-semibold font-mono text-white">
                {activeMode === 'manual' ? '45 分鐘 (極度疲憊)' : activeMode === 'search' ? '1 秒' : '3 秒'}
              </span>
            </div>
            <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">找到延遲項目</span>
              <span className="text-lg font-semibold font-mono text-emerald-400">
                {activeMode === 'manual' ? '3 / 5 筆 (漏看2筆)' : activeMode === 'search' ? '2 / 5 筆 (漏掉3筆)' : '5 / 5 筆 (全部尋獲)'}
              </span>
            </div>
            <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">精確摘要產出</span>
              <span className="text-lg font-semibold text-indigo-300">
                {activeMode === 'ai' ? '自動生成 3 欄表格' : '需額外手動謄寫'}
              </span>
            </div>
          </div>

          {/* Detailed report table */}
          <div className="border border-slate-700/80 rounded-lg overflow-hidden bg-slate-900/50">
            <div className="p-3 bg-slate-800/60 border-b border-slate-700/80 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-200">文件隱藏之 5 筆料件狀態清單</span>
              <span className="text-slate-400">對照模式：{activeMode === 'manual' ? '人工' : activeMode === 'search' ? 'Ctrl+F' : 'AI 語意'}</span>
            </div>
            <div className="divide-y divide-slate-800 text-xs">
              <div className="p-3 flex items-start justify-between gap-3">
                <div>
                  <span className="font-semibold text-slate-200">第 14 頁：外殼模具 P-101</span>
                  <p className="text-slate-400 mt-0.5">內文原文：「試模尺寸超標，原定 10/12 交件展延至 10/25。」</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-[11px] shrink-0 ${
                  activeMode === 'search' ? 'bg-rose-950/60 text-rose-300 border border-rose-800/50' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                }`}>
                  {activeMode === 'search' ? '✕ 漏失（原文寫展延）' : '✓ 成功找出'}
                </span>
              </div>

              <div className="p-3 flex items-start justify-between gap-3">
                <div>
                  <span className="font-semibold text-slate-200">第 32 頁：MCU 控制晶片 C-204</span>
                  <p className="text-slate-400 mt-0.5">內文原文：「因港口罷工，預計出貨延遲 7 個工作天。」</p>
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] shrink-0 bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                  ✓ 成功找出（符合關鍵字）
                </span>
              </div>

              <div className="p-3 flex items-start justify-between gap-3">
                <div>
                  <span className="font-semibold text-slate-200">第 58 頁：矽膠按鍵 K-09</span>
                  <p className="text-slate-400 mt-0.5">內文原文：「廠商原料短缺，排程暫緩，等待二階段配方調校。」</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-[11px] shrink-0 ${
                  activeMode === 'ai' ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50' : 'bg-rose-950/60 text-rose-300 border border-rose-800/50'
                }`}>
                  {activeMode === 'ai' ? '✓ 成功找出（理解排程暫緩）' : '✕ 漏失（未包含延遲字眼）'}
                </span>
              </div>

              <div className="p-3 flex items-start justify-between gap-3">
                <div>
                  <span className="font-semibold text-slate-200">第 77 頁：散熱鋁片 H-301</span>
                  <p className="text-slate-400 mt-0.5">內文原文：「陽極處理產線滿載，交件日期遞延一週。」</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-[11px] shrink-0 ${
                  activeMode === 'search' ? 'bg-rose-950/60 text-rose-300 border border-rose-800/50' : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                }`}>
                  {activeMode === 'search' ? '✕ 漏失（原文寫遞延）' : '✓ 成功找出'}
                </span>
              </div>

              <div className="p-3 flex items-start justify-between gap-3">
                <div>
                  <span className="font-semibold text-slate-200">第 94 頁：外包裝彩盒 B-02</span>
                  <p className="text-slate-400 mt-0.5">內文原文：「印色色差問題已修正，確認無延遲，如期出貨。」</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-[11px] shrink-0 ${
                  activeMode === 'search' ? 'bg-amber-950/60 text-amber-300 border border-amber-800/50' : 'bg-blue-950/60 text-blue-300 border border-blue-800/50'
                }`}>
                  {activeMode === 'search' ? '⚠️ 誤判（搜尋命中但其實如期）' : '✓ AI 精準辨識「無延遲」'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-indigo-950/30 border border-indigo-500/30 rounded-lg text-xs text-indigo-200 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">實驗室結論：</span>
              AI 的真正力量不是「速度比打字快」，而是它具有<strong>「語意理解」</strong>能力。它懂得「展延」、「暫緩」、「遞延」都是交期風險，且能讀懂「無延遲」是否定句！
            </div>
          </div>
        </div>
      )}

      {activeMode === 'none' && (
        <div className="p-8 text-center border border-dashed border-slate-700 rounded-lg text-slate-400 text-xs">
          請點擊上方三種處理模式之一，開始進行對照模擬！
        </div>
      )}
    </div>
  );
};
