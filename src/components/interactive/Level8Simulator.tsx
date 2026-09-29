import React, { useState } from 'react';
import { Workflow, Play, CheckCircle2, ArrowRight, Bot, Bell, Database, Mail } from 'lucide-react';

export const Level8Simulator: React.FC = () => {
  const [trigger, setTrigger] = useState('收到客戶詢價 Email');
  const [readData, setReadData] = useState('解析附件 PDF 與料號清單');
  const [aiAction, setAiAction] = useState('AI Agent 自主決策：比對庫存並評估交期風險');
  const [execute, setExecute] = useState('自動在 ERP 建立報價草稿');
  const [notify, setNotify] = useState('發送 Slack 警報給業務經理確認');

  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([]);

  const runPipeline = () => {
    setIsRunning(true);
    setActiveStep(0);
    setLogs(['[00:00:01] ⚡ 觸發事件啟動：' + trigger]);

    const steps = [
      { step: 1, log: '[00:00:02] 📥 讀取資料完成：' + readData },
      { step: 2, log: '[00:00:03] 🧠 AI Agent 正在推理：' + aiAction },
      { step: 3, log: '[00:00:04] ⚙️ 執行下游動作：' + execute },
      { step: 4, log: '[00:00:05] 🔔 管道完成，發送通知：' + notify + '。耗時 1.2 秒。' },
    ];

    steps.forEach((s, idx) => {
      setTimeout(() => {
        setActiveStep(s.step);
        setLogs(prev => [...prev, s.log]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 700);
    });
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Workflow className="w-5 h-5 text-indigo-400" />
            n8n & AI Agent 流程拼圖工坊
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            把「觸發 → 讀取 → AI Agent 決策 → 執行 → 通知」串接成全自動工作管線！
          </p>
        </div>

        <button
          onClick={runPipeline}
          disabled={isRunning}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-md shadow-indigo-950 transition-all cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{isRunning ? '管線運作中...' : '測試執行自動化管線'}</span>
        </button>
      </div>

      {/* Visual Pipeline Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mb-6">
        {/* Node 1: Trigger */}
        <div className={`p-3 rounded-lg border text-xs transition-all ${
          activeStep >= 0 ? 'bg-indigo-950/80 border-indigo-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-300'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-semibold text-indigo-300">1. 觸發 (Trigger)</span>
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <select
            value={trigger}
            disabled={isRunning}
            onChange={(e) => setTrigger(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200 focus:outline-none"
          >
            <option>收到客戶詢價 Email</option>
            <option>每日清晨 09:00 排程</option>
            <option>接收 ERP Webhook 通知</option>
          </select>
        </div>

        {/* Node 2: Read Data */}
        <div className={`p-3 rounded-lg border text-xs transition-all ${
          activeStep >= 1 ? 'bg-indigo-950/80 border-indigo-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-300'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-semibold text-sky-300">2. 讀取資料</span>
            <Database className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <select
            value={readData}
            disabled={isRunning}
            onChange={(e) => setReadData(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200 focus:outline-none"
          >
            <option>解析附件 PDF 與料號清單</option>
            <option>查詢庫存 SQL 資料庫</option>
            <option>讀取 Google Sheet 專案表</option>
          </select>
        </div>

        {/* Node 3: AI Agent */}
        <div className={`p-3 rounded-lg border text-xs transition-all ${
          activeStep >= 2 ? 'bg-purple-950/80 border-purple-400 text-white ring-1 ring-purple-400/50' : 'bg-slate-900 border-slate-700 text-slate-300'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-semibold text-purple-300">3. AI Agent 決策</span>
            <Bot className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <select
            value={aiAction}
            disabled={isRunning}
            onChange={(e) => setAiAction(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200 focus:outline-none"
          >
            <option>比對庫存並評估交期風險</option>
            <option>意圖分類並撰寫回信草稿</option>
            <option>自動萃取發票統編與金額</option>
          </select>
        </div>

        {/* Node 4: Action */}
        <div className={`p-3 rounded-lg border text-xs transition-all ${
          activeStep >= 3 ? 'bg-indigo-950/80 border-indigo-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-300'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-semibold text-emerald-300">4. 執行動作</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <select
            value={execute}
            disabled={isRunning}
            onChange={(e) => setExecute(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200 focus:outline-none"
          >
            <option>自動在 ERP 建立報價草稿</option>
            <option>更新 Notion 專案看板</option>
            <option>歸檔 PDF 至公司雲端資料夾</option>
          </select>
        </div>

        {/* Node 5: Notify */}
        <div className={`p-3 rounded-lg border text-xs transition-all ${
          activeStep >= 4 ? 'bg-indigo-950/80 border-indigo-400 text-white' : 'bg-slate-900 border-slate-700 text-slate-300'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-semibold text-amber-300">5. 發送通知</span>
            <Bell className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <select
            value={notify}
            disabled={isRunning}
            onChange={(e) => setNotify(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200 focus:outline-none"
          >
            <option>發送 Slack 警報給業務經理確認</option>
            <option>發送 LINE 群組通知</option>
            <option>寄送審核確認信給 PM</option>
          </select>
        </div>
      </div>

      {/* Execution Console Terminal */}
      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 font-sans">管線即時執行記錄 (Execution Log)</span>
          </div>
          <span className="text-slate-500">Node.js / n8n Engine</span>
        </div>

        <div className="min-h-[90px] space-y-1.5 text-emerald-400/90 leading-relaxed">
          {logs.length === 0 ? (
            <span className="text-slate-600 font-sans">管線處於待命狀態，點選右上角「測試執行」觀看資料流水線流動...</span>
          ) : (
            logs.map((log, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-slate-500 select-none">&gt;</span>
                <span>{log}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
