import React, { useState } from 'react';
import { Copy, Check, Sparkles, Wand2, Plus, ArrowRight, RefreshCw, Layers } from 'lucide-react';

interface PromptBlock {
  id: 'goal' | 'role' | 'context' | 'constraint' | 'format';
  name: string;
  placeholder: string;
  defaultText: string;
  active: boolean;
  content: string;
}

export const PromptPlayground: React.FC = () => {
  const [rawQuestion, setRawQuestion] = useState('幫我寫信給客戶說明零件延遲');
  const [copied, setCopied] = useState(false);

  const [blocks, setBlocks] = useState<PromptBlock[]>([
    {
      id: 'role',
      name: '【加入角色】',
      placeholder: '例如：你是一位有 10 年資歷的製造業資深專案經理...',
      defaultText: '你是一位專業、同理心且具備強大溝通技巧的高科技硬體專案經理（PM）。',
      active: true,
      content: '你是一位專業、同理心且具備強大溝通技巧的高科技硬體專案經理（PM）。'
    },
    {
      id: 'goal',
      name: '【加入目標】',
      placeholder: '例如：向海外 VIP 客戶說明因模具修整展延 4 天，並安撫客戶...',
      defaultText: '向海外長期合作之 VIP 客戶說明新產品外殼因模具卡榫微調需展延 4 天交付，確保客戶理解並接受補救排程。',
      active: true,
      content: '向海外長期合作之 VIP 客戶說明新產品外殼因模具卡榫微調需展延 4 天交付，確保客戶理解並接受補救排程。'
    },
    {
      id: 'context',
      name: '【加入背景】',
      placeholder: '例如：這批訂單數量 5000 件，原本預計週五出貨，已安排週末全線加班驗收...',
      defaultText: '訂單首批 1000 套，目前原廠正於週末安排加開兩班產線進行全檢，保證下週三以前空運抵達客戶倉庫。',
      active: true,
      content: '訂單首批 1000 套，目前原廠正於週末安排加開兩班產線進行全檢，保證下週三以前空運抵達客戶倉庫。'
    },
    {
      id: 'constraint',
      name: '【加入限制】',
      placeholder: '例如：字數 200 字以內、不可透露供應商內部報價、語氣誠懇但不可過度貶損自身技術能力...',
      defaultText: '信件正文 200 字以內，語氣誠懇客觀，嚴禁指責特定外包廠商，強調公司嚴格把關品質的負責態度。',
      active: true,
      content: '信件正文 200 字以內，語氣誠懇客觀，嚴禁指責特定外包廠商，強調公司嚴格把關品質的負責態度。'
    },
    {
      id: 'format',
      name: '【加入輸出格式】',
      placeholder: '例如：信件標題 + 開頭問候 + 現況與原因 + 補救承諾與具體時程 + 結尾簽名檔...',
      defaultText: '格式：專業商務信件格式（含精簡吸睛主旨、問題簡述、3 點補救措施與明確交付時間表、結尾署名）。',
      active: true,
      content: '格式：專業商務信件格式（含精簡吸睛主旨、問題簡述、3 點補救措施與明確交付時間表、結尾署名）。'
    }
  ]);

  const toggleBlock = (id: PromptBlock['id']) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, active: !b.active } : b));
  };

  const updateBlockContent = (id: PromptBlock['id'], value: string) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content: value } : b));
  };

  // Compile improved prompt
  const activeBlocks = blocks.filter(b => b.active);
  const improvedPrompt = `${activeBlocks.map(b => `${b.name}：\n${b.content}`).join('\n\n')}

【我的原始任務內容】：
${rawQuestion}

請依據上述角色、目標、背景、限制與格式，輸出高品質繁體中文成果。`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(improvedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Score calculation
  const score = Math.min(100, 20 + activeBlocks.length * 16);

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
          <Wand2 className="w-6 h-6 text-indigo-400" />
          獨立 Prompt 練習場
        </h2>
        <p className="text-sm text-slate-300">
          左邊原始問題 · 中間五大模組加料 · 右邊即時生成滿分 Prompt！
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Raw Question (4 cols) */}
        <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-rose-300">
                左邊：我的原始問題 (草稿)
              </span>
              <span className="text-[11px] text-slate-400">新手日常問法</span>
            </div>
            <textarea
              rows={6}
              value={rawQuestion}
              onChange={(e) => setRawQuestion(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
              placeholder="在此輸入你平常跟 AI 說的原始問題，例如：幫我寫篇貼文、幫我分析銷售額..."
            />
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              單純只給一句話時，AI 容易給出千篇一律、平淡無奇的罐頭文字。透過中間的模組為它加料吧！
            </p>
          </div>

          {/* Quick preset chips */}
          <div className="pt-3 border-t border-slate-700/80">
            <span className="text-[11px] text-slate-400 block mb-1.5">快速代入其他日常情境：</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                '幫我寫信給客戶說明零件延遲',
                '幫我把會議紀錄整理成待辦',
                '幫我寫新產品社群文案',
                '幫我抓出 Excel 專案落後清單'
              ].map((sample, i) => (
                <button
                  key={i}
                  onClick={() => setRawQuestion(sample)}
                  className="text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-700 hover:border-indigo-500 text-slate-300 transition-colors"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: 5 Modular Booster Buttons (4 cols) */}
        <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-700">
            <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              中間：五大加料模組開關
            </span>
            <span className="text-[11px] text-slate-400">點擊切換啟用</span>
          </div>

          <div className="space-y-3">
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`p-3 rounded-lg border transition-all text-xs ${
                  block.active
                    ? 'bg-slate-900/90 border-indigo-500/80 ring-1 ring-indigo-500/30'
                    : 'bg-slate-900/40 border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-semibold ${block.active ? 'text-indigo-300' : 'text-slate-400'}`}>
                    {block.name}
                  </span>
                  <button
                    onClick={() => toggleBlock(block.id)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                      block.active
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {block.active ? '已啟用' : '+ 點擊加入'}
                  </button>
                </div>

                {block.active && (
                  <textarea
                    rows={2}
                    value={block.content}
                    onChange={(e) => updateBlockContent(block.id, e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white text-[11px] focus:outline-none focus:border-indigo-500 mt-1"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Improved Prompt Output (4 cols) */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-700 rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  右邊：改善後的黃金 Prompt
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  架構質量評分：<strong className="text-emerald-400 font-mono">{score}/100</strong>
                </span>
              </div>

              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '已複製' : '一鍵複製'}</span>
              </button>
            </div>

            <pre className="text-xs font-mono bg-slate-950 p-3.5 rounded-lg border border-slate-800 text-indigo-100 whitespace-pre-wrap leading-relaxed max-h-[360px] overflow-y-auto">
              {improvedPrompt}
            </pre>
          </div>

          <div className="p-3 bg-emerald-950/20 border border-emerald-900/30 rounded-lg text-emerald-300 text-[11px]">
            <strong>直接貼給 AI 體驗效果：</strong> 複製這段已結構化的 Prompt 貼入 ChatGPT 或 Google AI Studio，產出精準度立刻提升 5~10 倍！
          </div>
        </div>
      </div>
    </div>
  );
};
