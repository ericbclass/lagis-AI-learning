import React, { useState } from 'react';
import { Copy, Check, CheckCircle2, AlertCircle, BookMarked } from 'lucide-react';

interface Preset {
  name: string;
  current: string;
  target: string;
  barrier: string;
  constraint: string;
}

const PRESETS: Preset[] = [
  {
    name: '範例 1：料件開模進度追蹤',
    current: '我手上有 50 筆新開模零件進度表，欄位有品名、料號、預計試模日、實際試模日、檢驗狀態。',
    target: '找出哪些料件有延遲風險，並按「塑膠射出」與「金屬沖壓」分類整理成主管彙報表格。',
    barrier: '資料格式雜亂，有的日期寫 2026/03，有的只寫 3月中旬，且缺少天數相減的自動計算。',
    constraint: '嚴禁更動原始料號編碼，不可出現任何真實供應商報價，結果需繁體中文且附帶公式說明。'
  },
  {
    name: '範例 2：試模委託單與製令比對',
    current: '研發部門開立了 10 張試模委託單，但生產端回報的製令單號與規格有些微衝突。',
    target: '精確列出兩份清單中「規格不符」與「尚未完成放行」的異常單號對照表。',
    barrier: '手動逐筆核對容易漏掉版本號（例如 Rev.A vs Rev.B），肉眼比對耗費整個下午。',
    constraint: '僅分析規格與單號，請勿對責任歸屬進行揣測，輸出需可直接貼入 Excel。'
  },
  {
    name: '範例 3：跨部門會議待辦事項提煉',
    current: '一段長達 45 分鐘的專案啟動會議錄音逐字稿，發言者有產品經理、硬體、軟體與業務。',
    target: '整理出清晰的 Action Items（待辦清單），標明指派負責人與本週五前需完成之項目。',
    barrier: '發言過程多處閒聊與重複插話，重點分散在不同段落。',
    constraint: '若某項目在會中未明確指派負責人，請標記為【待確認】，切勿自行編造負責人。'
  }
];

export const Level2Simulator: React.FC = () => {
  const [current, setCurrent] = useState(PRESETS[0].current);
  const [target, setTarget] = useState(PRESETS[0].target);
  const [barrier, setBarrier] = useState(PRESETS[0].barrier);
  const [constraint, setConstraint] = useState(PRESETS[0].constraint);
  const [copied, setCopied] = useState(false);

  const loadPreset = (preset: Preset) => {
    setCurrent(preset.current);
    setTarget(preset.target);
    setBarrier(preset.barrier);
    setConstraint(preset.constraint);
  };

  const assembledPrompt = `【現況】：${current}
【目標】：${target}
【障礙】：${barrier}
【限制】：${constraint}

請依據以上四維框架，以資深專家角度提供具體執行步驟與直接可用之繁體中文成果。`;

  const copyPrompt = () => {
    navigator.clipboard.writeText(assembledPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Check completeness
  const checks = [
    { label: '現況清楚（有交代手頭素材）', passed: current.length >= 10 },
    { label: '目標具體（有量化產出樣態）', passed: target.length >= 10 },
    { label: '障礙明確（指出卡點與難處）', passed: barrier.length >= 8 },
    { label: '限制分明（劃定資安與格式紅線）', passed: constraint.length >= 10 },
  ];

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
            四維提示詞互動組裝機（現況 → 目標 → 障礙 → 限制）
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            職場最強結構化思維！只要將這四項寫好，AI 不可能給出離題的回答。
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-slate-400">快速填入範例：</span>
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => loadPreset(p)}
              className="text-[11px] px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:border-indigo-500 text-slate-300 transition-colors"
            >
              範例 {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Inputs */}
        <div className="space-y-4 text-xs">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-sky-300 flex items-center gap-1.5">
                <span>1. 【現況】你手上有什麼資料？目前情境是什麼？</span>
              </label>
              <span className="text-[11px] text-slate-500 font-mono">{current.length} 字</span>
            </div>
            <textarea
              rows={2}
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-sky-500"
              placeholder="例如：我手上有 50 筆 Excel 料件進度..."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-emerald-300 flex items-center gap-1.5">
                <span>2. 【目標】你希望 AI 產出什麼成果？解決什麼問題？</span>
              </label>
              <span className="text-[11px] text-slate-500 font-mono">{target.length} 字</span>
            </div>
            <textarea
              rows={2}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              placeholder="例如：找出延遲高風險零件，產出 3 欄表格..."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-amber-300 flex items-center gap-1.5">
                <span>3. 【障礙】你目前被什麼卡住？資料有什麼痛點？</span>
              </label>
              <span className="text-[11px] text-slate-500 font-mono">{barrier.length} 字</span>
            </div>
            <textarea
              rows={2}
              value={barrier}
              onChange={(e) => setBarrier(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
              placeholder="例如：日期格式雜亂、缺少公式..."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-rose-300 flex items-center gap-1.5">
                <span>4. 【限制】有什麼絕不能違反的紅線與規格？</span>
              </label>
              <span className="text-[11px] text-slate-500 font-mono">{constraint.length} 字</span>
            </div>
            <textarea
              rows={2}
              value={constraint}
              onChange={(e) => setConstraint(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-rose-500"
              placeholder="例如：不可洩漏機密底價、不可變更料號編碼..."
            />
          </div>
        </div>

        {/* Right Output */}
        <div className="flex flex-col justify-between bg-slate-900 border border-slate-700/80 rounded-xl p-4">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-200">
                自動生成的黃金 Prompt
              </span>
              <button
                onClick={copyPrompt}
                className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '已複製' : '一鍵複製'}</span>
              </button>
            </div>

            <pre className="text-xs font-mono bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-[300px]">
              {assembledPrompt}
            </pre>
          </div>

          {/* AI Check Status Indicators */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 block mb-2">
              四維完整度體檢
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {checks.map((chk, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-1.5 p-1.5 rounded ${
                    chk.passed
                      ? 'text-emerald-400 bg-emerald-950/20'
                      : 'text-amber-400 bg-amber-950/20'
                  }`}
                >
                  {chk.passed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  )}
                  <span className="text-[11px] truncate">{chk.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
