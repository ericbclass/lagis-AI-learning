import React, { useState } from 'react';
import { Copy, Check, Sparkles, Smartphone, Search, Filter, ShieldAlert } from 'lucide-react';

export const Level4Simulator: React.FC = () => {
  const [problem, setProblem] = useState('生管與研發工程師常因料件開模進度不同步，不知道哪些單子卡在檢驗。');
  const [targetUser, setTargetUser] = useState('忙碌的硬體 PM、工廠品保檢驗員與生管排程同仁');
  const [features, setFeatures] = useState([
    { id: 'f1', label: '頂部關鍵字搜尋（支援料號與模具代碼）', checked: true },
    { id: 'f2', label: '狀態標籤快速篩選（待驗收 / 合格放行 / 異常需修改）', checked: true },
    { id: 'f3', label: '點擊卡片滑出「尺寸公差與試模記錄」詳細抽屜', checked: true },
    { id: 'f4', label: '一鍵匯出當前篩選之 CSV 報表', checked: false },
    { id: 'f5', label: '針對落後超過 7 天之項目顯示高亮警示燈號', checked: true },
  ]);
  const [inputData, setInputData] = useState('料號代碼（如 Part-101）、試模次數（T0~T3）、預計驗收日');
  const [outputResult, setOutputResult] = useState('單頁式儀表板卡片清單，直觀呈現綠（合格）、黃（待驗）、紅（超標延遲）');
  const [copied, setCopied] = useState(false);

  // Mock interactive state for the live preview
  const [mockSearch, setMockSearch] = useState('');
  const [mockFilter, setMockFilter] = useState<'all' | 'pending' | 'passed' | 'failed'>('all');
  const [selectedMockItem, setSelectedMockItem] = useState<any>(null);

  const toggleFeature = (id: string) => {
    setFeatures(features.map(f => f.id === id ? { ...f, checked: !f.checked } : f));
  };

  const selectedFeatureTexts = features.filter(f => f.checked).map(f => f.label);

  const generatedPrompt = `請使用 React + Tailwind CSS 製作一個專業乾淨的單頁式 Web 應用程式原型。
【專案背景與解決問題】：${problem}
【主要使用者】：${targetUser}
【核心輸入資料】：${inputData}
【預期輸出與呈現】：${outputResult}

【具體功能需求清單】：
${selectedFeatureTexts.map((f, i) => `${i + 1}. ${f}`).join('\n')}

【設計風格與規範】：
- 遵循深色現代儀表板風格，字體高清晰，具備完全響應式佈局。
- 狀態請採用「雙重編碼」（顏色 + 明確文字標籤），符合無障礙標準。
- 提供擬真模擬資料以供立即操作驗證，純前端執行無外部敏感依賴。`;

  const copyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Mock data for live mockup preview
  const mockItems = [
    { id: 'M-101', name: '上蓋主機板外殼 (ABS)', status: 'failed', statusText: '異常修改', days: '超期 5 天', mold: 'Mold-A1', tolerance: '+0.15mm (超差)' },
    { id: 'M-204', name: '散熱鋁擠支架 (AL6061)', status: 'pending', statusText: '待驗收中', days: '尚餘 2 天', mold: 'Mold-B2', tolerance: '等待三次元量測' },
    { id: 'M-308', name: '防水矽膠按鍵圈', status: 'passed', statusText: '合格放行', days: '如期完成', mold: 'Mold-C1', tolerance: '±0.02mm (合格)' },
  ];

  const filteredMockItems = mockItems.filter(item => {
    const matchesSearch = item.name.includes(mockSearch) || item.id.toLowerCase().includes(mockSearch.toLowerCase());
    const matchesStatus = mockFilter === 'all' || item.status === mockFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Google AI Studio APP 需求產生器
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            回答 5 個通俗問題，即時生成可直接貼進 AI Studio 的高規格 Prompt，並附帶互動 Prototype 預覽！
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 5 Guided Questions */}
        <div className="lg:col-span-6 space-y-3.5 text-xs">
          <div>
            <label className="font-medium text-indigo-300 block mb-1">
              Q1. 你想解決什麼具體問題或痛點？
            </label>
            <input
              type="text"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="font-medium text-indigo-300 block mb-1">
              Q2. 誰會使用這個小工具？（目標受眾）
            </label>
            <input
              type="text"
              value={targetUser}
              onChange={(e) => setTargetUser(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="font-medium text-indigo-300 block mb-1.5">
              Q3. 畫面上希望勾選哪些核心功能？
            </label>
            <div className="space-y-1.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/80">
              {features.map((f) => (
                <label key={f.id} className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white">
                  <input
                    type="checkbox"
                    checked={f.checked}
                    onChange={() => toggleFeature(f.id)}
                    className="rounded bg-slate-800 border-slate-600 text-indigo-600 focus:ring-0"
                  />
                  <span>{f.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-medium text-indigo-300 block mb-1">
                Q4. 使用者會輸入什麼資料？
              </label>
              <input
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="font-medium text-indigo-300 block mb-1">
                Q5. 預期呈現什麼結果？
              </label>
              <input
                type="text"
                value={outputResult}
                onChange={(e) => setOutputResult(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Security Alert about Publish */}
          <div className="p-3 bg-amber-950/20 border border-amber-900/40 rounded-lg text-amber-300/90 text-[11px] flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-200">Share 與 Publish 資安提醒：</span>
              AI Studio 產出的前端網頁若點選「Publish」公開發布，全世界任何人都能檢視網頁原始碼。切勿在需求中要求 AI 將真正的內部帳號密碼寫死在代碼中！
            </div>
          </div>
        </div>

        {/* Right: Assembled Prompt & Interactive Prototype Mockup */}
        <div className="lg:col-span-6 space-y-4">
          {/* Assembled Prompt */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-200">
                可貼入 Google AI Studio 的需求 Prompt
              </span>
              <button
                onClick={copyPrompt}
                className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '已複製' : '一鍵複製'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-slate-300 whitespace-pre-wrap max-h-36 overflow-y-auto">
              {generatedPrompt}
            </pre>
          </div>

          {/* Live Interactive Prototype Mockup Sandbox */}
          <div className="bg-slate-900 border border-indigo-500/40 rounded-xl p-4 shadow-lg shadow-indigo-950/30">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                所見即所得：即時互動 Prototype 預覽
              </span>
              <span className="text-[11px] text-slate-500">可實際點擊操作</span>
            </div>

            {/* Mockup internal UI */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs space-y-3">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
                  <input
                    type="text"
                    value={mockSearch}
                    onChange={(e) => setMockSearch(e.target.value)}
                    placeholder="搜尋料號或品名..."
                    className="w-full bg-slate-900 border border-slate-700 rounded pl-8 pr-2 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <select
                  value={mockFilter}
                  onChange={(e: any) => setMockFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded px-2 text-slate-300 text-xs focus:outline-none"
                >
                  <option value="all">全部狀態</option>
                  <option value="failed">異常需修改</option>
                  <option value="pending">待驗收中</option>
                  <option value="passed">合格放行</option>
                </select>
              </div>

              {/* Cards List */}
              <div className="space-y-2">
                {filteredMockItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMockItem(item)}
                    className="p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-indigo-500/70 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-semibold text-white">{item.id}</span>
                        <span className="text-slate-300 text-[11px]">{item.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-500">模號：{item.mold} · 時程：{item.days}</span>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                      item.status === 'failed'
                        ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60'
                        : item.status === 'pending'
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                        : 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                    }`}>
                      {item.statusText}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mock Details Drawer */}
              {selectedMockItem && (
                <div className="p-2.5 bg-slate-900/90 border border-indigo-500/50 rounded text-[11px] space-y-1">
                  <div className="flex justify-between items-center font-semibold text-white">
                    <span>料件詳細檢驗資訊：{selectedMockItem.id}</span>
                    <button onClick={() => setSelectedMockItem(null)} className="text-slate-400 hover:text-white">✕</button>
                  </div>
                  <p className="text-slate-300">公差檢驗紀錄：<span className="font-mono text-indigo-300">{selectedMockItem.tolerance}</span></p>
                  <p className="text-slate-400">目前進度狀態：{selectedMockItem.days}，負責工程師已收到簽核提醒。</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
