import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight, Wand2 } from 'lucide-react';

export const Level1Simulator: React.FC = () => {
  const [goal, setGoal] = useState('向部門總監回報第四季新料件開模進度與延遲風險');
  const [audience, setAudience] = useState('工作忙碌、重視時程與應變策略的研發主管');
  const [format, setFormat] = useState('前言重點(50字) + 3項高風險料件清單表格 + 下一步因應行動');
  const [constraints, setConstraints] = useState('不超過 300 字、禁止透露真實廠商價格、專注在交期天數');
  const [hasData, setHasData] = useState(true);
  const [dataSample, setDataSample] = useState('料件A(延遲5天,待修模)、料件B(如期)、料件C(缺料暫緩7天)');
  const [copied, setCopied] = useState(false);

  // Calculate score based on inputs filled
  let score = 20; // base score for "幫我做報告"
  if (goal.trim().length > 5) score += 20;
  if (audience.trim().length > 3) score += 20;
  if (format.trim().length > 5) score += 20;
  if (constraints.trim().length > 5) score += 15;
  if (hasData && dataSample.trim().length > 5) score += 5;

  const fullPrompt = `你是一位資深的硬體專案管理（PM）顧問。
【任務目的】：${goal}
【目標讀者】：${audience}
${hasData ? `【輸入資料】：${dataSample}\n` : ''}【產出格式】：${format}
【嚴格限制】：${constraints}
請以專業、客觀且精準的繁體中文輸出。`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-indigo-400" />
            Prompt 改造遊戲機
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            從最原始的一句話「幫我做報告」，透過補充關鍵要素，變身為滿分指令！
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
          <span className="text-xs text-slate-400">提示詞質量分數：</span>
          <span className={`font-mono font-bold text-sm ${score >= 80 ? 'text-emerald-400' : 'text-amber-400'}`}>
            {score} / 100
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Modules */}
        <div className="space-y-4">
          <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-400 block mb-1">原始問題（0分階段）：</span>
            <span className="text-rose-300 font-mono line-through">「幫我做報告」</span>
            <p className="text-slate-500 mt-1 text-[11px]">太過含糊，AI 只能憑空瞎猜你的需求。</p>
          </div>

          <div>
            <label className="block text-xs font-medium text-indigo-300 mb-1">
              ① 補充【目的】：你想達成什麼具體目標？
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              placeholder="例如：向主管回報料件進度..."
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-indigo-300 mb-1">
              ② 補充【對象】：這份報告是給誰看？
            </label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              placeholder="例如：重視時程的主管、一般消費者..."
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-indigo-300 mb-1">
              ③ 補充【格式】：希望 AI 以什麼樣式呈現？
            </label>
            <input
              type="text"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              placeholder="例如：前言 + 3 欄表格 + 條列式因應方案..."
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-indigo-300 mb-1">
              ④ 補充【限制】：有什麼禁忌或邊界規範？
            </label>
            <input
              type="text"
              value={constraints}
              onChange={(e) => setConstraints(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
              placeholder="例如：300字以內、不提廠商價格..."
            />
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-indigo-300">
                ⑤ 補充【輸入資料】：提供事實依據
              </label>
              <label className="text-[11px] text-slate-400 flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasData}
                  onChange={(e) => setHasData(e.target.checked)}
                  className="rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-0"
                />
                附帶材料
              </label>
            </div>
            {hasData && (
              <textarea
                value={dataSample}
                onChange={(e) => setDataSample(e.target.value)}
                rows={2}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                placeholder="貼入你想讓 AI 整理的原始數據或片段..."
              />
            )}
          </div>
        </div>

        {/* Right: Assembled Prompt Output */}
        <div className="flex flex-col justify-between bg-slate-900 border border-slate-700/80 rounded-xl p-4">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                即時組裝成的高品質 Prompt
              </span>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '已複製' : '一鍵複製'}</span>
              </button>
            </div>

            <pre className="text-xs font-mono bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 text-indigo-200 whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-[280px]">
              {fullPrompt}
            </pre>
          </div>

          {/* Simulated Comparison */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              成果預測對照
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded bg-rose-950/20 border border-rose-900/40 text-rose-300">
                <span className="font-semibold block text-rose-200 mb-1">若用「幫我做報告」：</span>
                AI 吐出「尊敬的主管，關於本季度工作，我們全體同仁辛勤付出...」一堆空洞廢話。
              </div>
              <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-900/40 text-emerald-300">
                <span className="font-semibold block text-emerald-200 mb-1">若用改造後指令：</span>
                AI 直接產出 3 欄式乾淨表格，標註料件 A 延遲 5 天與 C 缺料暫緩，精準符合總監審視習慣！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
