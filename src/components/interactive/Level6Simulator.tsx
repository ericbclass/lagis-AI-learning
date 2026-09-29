import React, { useState } from 'react';
import { BookOpen, FileText, Video, CheckCircle2, Search, Sparkles, Quote } from 'lucide-react';

interface MockSource {
  id: string;
  name: string;
  type: 'pdf' | 'youtube' | 'doc';
  pagesOrDuration: string;
  keyExcerpt: string;
}

const SOURCES: MockSource[] = [
  {
    id: 's-pdf',
    name: '2026 研發開模與試模驗收作業程序.pdf',
    type: 'pdf',
    pagesOrDuration: '共 48 頁',
    keyExcerpt: '【第四條 試模異常處置】：若連續兩次（T1及T2）試模皆發生尺寸公差超出 ±0.05mm 之關鍵異常，工程師應於 24 小時內通報研發副總，並召集模具廠召開模流分析（Moldflow）檢討會，非經書面簽核不得擅自進行 T3 試模。'
  },
  {
    id: 's-yt',
    name: 'YouTube 專案管理研習會：如何避免零件庫存呆滯 (影片逐字稿)',
    type: 'youtube',
    pagesOrDuration: '長度 52 分鐘',
    keyExcerpt: '【演講段落 18:24】：演講者指出，很多團隊之所以積壓大量報廢料件，是因為在規格變更（ECN）時沒有同步凍結請購單。最佳解方是建立「設計變更即時連動看板」，一旦圖面改版，舊料號立即轉為【待審核凍結】狀態。'
  },
  {
    id: 's-doc',
    name: '新專案核心供應商合作與交期違約罰則協議.docx',
    type: 'doc',
    pagesOrDuration: '共 12 頁',
    keyExcerpt: '【第七條 違約罰則】：除不可抗力天然災害外，供應商若因排程疏失導致料件交付遲延，每逾一日，應按該批料件總採購金額之千分之三計付違約金；逾期超過十五日者，本公司有權無條件終止訂單並要求賠償產線停工之全額損失。'
  }
];

export const Level6Simulator: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [highlightedSourceId, setHighlightedSourceId] = useState<string | null>(null);

  const QA_PAIRS = [
    {
      q: '試模如果連續兩次發生尺寸嚴重超差，標準規定該找誰？能否直接開第三次模？',
      sourceId: 's-pdf',
      sourceName: '2026 研發開模與試模驗收作業程序.pdf (第 14 頁)',
      answer: '依據作業程序第四條規定 [1]，若連續兩次（T1及T2）試模尺寸超差超出 ±0.05mm：\n1. 工程師必須在 24 小時內通報【研發副總】。\n2. 召集模具廠召開模流分析檢討會。\n3. 【嚴禁】擅自直接進行 T3 試模，必須取得書面簽核後方可進行。',
      citationIndex: 1
    },
    {
      q: '研討會演講者建議如何避免規格變更時產生大量呆滯報廢料件？',
      sourceId: 's-yt',
      sourceName: 'YouTube 專案管理研習會逐字稿 (時間點 18:24)',
      answer: '根據演講者分享 [1]，避免料件呆滯的核心在於「設計變更（ECN）與請購單同步聯動」。一旦工程圖面有改版，系統應立即將舊版料號標記為【待審核凍結】，防止採購端繼續下單。',
      citationIndex: 1
    },
    {
      q: '廠商如果交期延誤，每天的違約金比例是多少？超過幾天可以退單？',
      sourceId: 's-doc',
      sourceName: '新專案核心供應商合作協議.docx (第七條)',
      answer: '依據協議第七條 [1]：\n- 每日延遲違約金為該批料件總採購金額之【千分之三】。\n- 若逾期超過【15 日】，我方有權無條件解除訂單，並可追償停工損失。',
      citationIndex: 1
    }
  ];

  const currentQA = QA_PAIRS[selectedQuestion];

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            NotebookLM 專屬資料庫模擬實驗室
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            資料來源 → AI 深度研讀 → 帶出處註腳 [1] 精準回答。體驗 0 幻覺的 Grounded AI！
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Document Sources Viewer */}
        <div className="lg:col-span-6 space-y-3">
          <span className="text-xs font-semibold text-slate-400 block">
            已載入的專屬學習材料庫（3 份文件）：
          </span>

          {SOURCES.map((source) => {
            const isTarget = highlightedSourceId === source.id || (!highlightedSourceId && currentQA.sourceId === source.id);
            return (
              <div
                key={source.id}
                className={`p-3.5 rounded-lg border transition-all text-xs ${
                  isTarget
                    ? 'bg-slate-900 border-indigo-500 shadow-md shadow-indigo-950/40 ring-1 ring-indigo-500/50'
                    : 'bg-slate-900/50 border-slate-800 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 font-medium text-white">
                    {source.type === 'pdf' ? (
                      <FileText className="w-4 h-4 text-rose-400 shrink-0" />
                    ) : source.type === 'youtube' ? (
                      <Video className="w-4 h-4 text-red-400 shrink-0" />
                    ) : (
                      <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                    )}
                    <span className="line-clamp-1">{source.name}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 shrink-0">{source.pagesOrDuration}</span>
                </div>

                <div className="mt-2 p-2 bg-slate-950/80 rounded border border-slate-800/80 text-slate-300 font-serif leading-relaxed text-[11px]">
                  <Quote className="w-3 h-3 text-indigo-400 inline mr-1" />
                  {source.keyExcerpt}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Interactive Grounded QA Engine */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between text-xs">
          <div>
            <span className="text-slate-400 block mb-2 font-semibold">
              挑選一個問題進行測試提問：
            </span>
            <div className="space-y-2 mb-4">
              {QA_PAIRS.map((qa, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedQuestion(index);
                    setHighlightedSourceId(qa.sourceId);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                    selectedQuestion === index
                      ? 'bg-indigo-950/70 border-indigo-500 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="font-semibold text-indigo-300 mr-1.5">Q{index + 1}:</span>
                  {qa.q}
                </button>
              ))}
            </div>

            {/* Answer Display */}
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800">
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  NotebookLM 引用來源作答
                </span>
                <span className="text-slate-500">嚴格依據上傳材料</span>
              </div>

              <div className="text-slate-200 whitespace-pre-line leading-relaxed text-xs">
                {currentQA.answer}
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <button
                  onClick={() => setHighlightedSourceId(currentQA.sourceId)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800 text-indigo-300 hover:bg-indigo-900 transition-colors"
                >
                  <span>點擊查看來源出處 [1]：</span>
                  <span className="underline">{currentQA.sourceName}</span>
                </button>
                <span className="text-emerald-400">✓ 100% 事實查證</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-indigo-950/20 border border-indigo-900/30 rounded-lg text-indigo-200 text-[11px]">
            <strong>核心心法：</strong> AI 不用自己懂全天下的知識。只要把材料準備好餵給 NotebookLM，它就是你身邊最嚴謹、隨時能報出頁碼的隨身研究員！
          </div>
        </div>
      </div>
    </div>
  );
};
