import React, { useState } from 'react';
import { Briefcase, AlertTriangle, CheckCircle2, UserCheck, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface PartRecord {
  code: string;
  name: string;
  type: string;
  status: 'critical' | 'normal' | 'passed' | 'warning';
  stage: string;
  delayDays: number;
  note: string;
}

const INITIAL_PARTS: PartRecord[] = [
  {
    code: 'Part-M101',
    name: 'ABS+PC 上蓋機構外殼',
    type: '塑膠開模 (BOM-01)',
    status: 'critical',
    stage: '試模委託單 T3',
    delayDays: 8,
    note: '第三次試模卡榫公差超出 +0.12mm，組裝干涉'
  },
  {
    code: 'Part-M102',
    name: '純銅導熱散熱底座',
    type: '金屬沖壓 (BOM-02)',
    status: 'normal',
    stage: '試模委託單 T1',
    delayDays: 0,
    note: '廠商回報樣品製作如期，預計 3 天後送品保檢驗'
  },
  {
    code: 'Part-E201',
    name: '32-bit 主控 MCU 晶片',
    type: '電子元件 (BOM-03)',
    status: 'warning',
    stage: '研發採購製令',
    delayDays: 12,
    note: '原廠晶圓封測排程塞車，交期通知展延 12 個工作天'
  },
  {
    code: 'Part-K301',
    name: '雙色導電矽膠按鍵',
    type: '矽膠射出 (BOM-04)',
    status: 'passed',
    stage: '驗收單已簽核',
    delayDays: 0,
    note: 'T2 尺寸與手感阻尼通過，工程師已完成簽樣'
  },
  {
    code: 'Part-P401',
    name: '絕緣導熱雙面膠片',
    type: '包裝耗材 (BOM-05)',
    status: 'normal',
    stage: '請購單已下單',
    delayDays: 0,
    note: '供應商庫存充足，提早 2 天到貨入庫待檢驗'
  }
];

export const Level11Simulator: React.FC = () => {
  const [aiAnalysisResult, setAiAnalysisResult] = useState<string | null>(null);
  const [activeAnalysisType, setActiveAnalysisType] = useState<'anomaly' | 'summary' | 'action' | null>(null);
  const [humanDecision, setHumanDecision] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const runAnalysis = (type: 'anomaly' | 'summary' | 'action') => {
    setActiveAnalysisType(type);
    if (type === 'anomaly') {
      setAiAnalysisResult(`【AI 異常偵測診斷報告】：
1. 🔴 高度危急：Part-M101 (上蓋外殼) 已進入 T3（第三次試模），卡榫仍有 +0.12mm 尺寸干涉。若未解決將導致整機組裝斷線！
2. 🟡 時程預警：Part-E201 (MCU 晶片) 原廠展延 12 天，已逼近下月試產 Critical Path（要徑）的安全緩衝期。
其餘 3 項料件處於如期或已完成簽樣狀態。`);
    } else if (type === 'summary') {
      setAiAnalysisResult(`【主管週會專案管理彙報摘要 (草案)】：
- 總進度概況：專案 5 大核心物料中，3 項如期（佔比 60%），2 項存在交期與技術風險（佔比 40%）。
- 關鍵瓶頸：M101 機構模具重複超差；E201 晶片交期受阻。
- 專案經理建議：暫緩全線量產採購，優先召集模具檢討會，並啟動 MCU 替代料評估。`);
    } else {
      setAiAnalysisResult(`【建議應變措施與備案 (供工程師決策參考)】：
- 針對 M101：由機構工程師與模具廠召開模流檢討，評估修模或公差重新配對可行性。
- 針對 E201：採購部同步向代理商現貨市場調貨（Spot Market），或研發部評估相容 Pin-to-Pin 替代晶片。`);
    }
  };

  const handleConfirmDecision = () => {
    if (!humanDecision) return;
    setConfirmed(true);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            新產品料件進度追蹤與人機協作沙盒
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            資料雜訊交給 AI 篩檢與摘要；關鍵技術裁決與簽核永遠由人類負責（Human-in-the-loop）！
          </p>
        </div>
      </div>

      {/* Project Material Tracking Table */}
      <div className="border border-slate-700/80 rounded-lg overflow-hidden bg-slate-900/60 mb-5">
        <div className="p-3 bg-slate-800/60 border-b border-slate-700 flex items-center justify-between text-xs">
          <span className="font-semibold text-white">專案 Project Alpha：核心料件與開模進度表（脫敏資料）</span>
          <span className="text-slate-400">涵蓋試模委託單、製令、驗收單</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/60 text-slate-400 text-[11px] border-b border-slate-800">
              <tr>
                <th className="p-2.5">料號代碼</th>
                <th className="p-2.5">零件名稱 / 分類</th>
                <th className="p-2.5">當前單據與進度階段</th>
                <th className="p-2.5">交期影響</th>
                <th className="p-2.5">現場工程備註說明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {INITIAL_PARTS.map((part) => (
                <tr key={part.code} className="hover:bg-slate-800/30">
                  <td className="p-2.5 font-mono font-medium text-slate-200">{part.code}</td>
                  <td className="p-2.5">
                    <span className="text-white block font-medium">{part.name}</span>
                    <span className="text-[11px] text-slate-500">{part.type}</span>
                  </td>
                  <td className="p-2.5">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                      part.status === 'critical'
                        ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60'
                        : part.status === 'warning'
                        ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60'
                        : part.status === 'passed'
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {part.stage}
                    </span>
                  </td>
                  <td className="p-2.5 font-mono">
                    {part.delayDays > 0 ? (
                      <span className="text-rose-400 font-semibold">延遲 +{part.delayDays} 天</span>
                    ) : (
                      <span className="text-emerald-400">如期 (0 天)</span>
                    )}
                  </td>
                  <td className="p-2.5 text-slate-300 text-[11px] max-w-xs">{part.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Assistant Action Buttons */}
      <div className="mb-5">
        <span className="text-xs font-semibold text-slate-400 block mb-2">
          ① 第一步：讓 AI 扮演你的專案助理，處理繁雜分析
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => runAnalysis('anomaly')}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              activeAnalysisType === 'anomaly'
                ? 'bg-indigo-600 border-indigo-500 text-white'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>AI 異常偵測與風險排查</span>
          </button>

          <button
            onClick={() => runAnalysis('summary')}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              activeAnalysisType === 'summary'
                ? 'bg-indigo-600 border-indigo-500 text-white'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>AI 產生主管彙報摘要</span>
          </button>

          <button
            onClick={() => runAnalysis('action')}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 ${
              activeAnalysisType === 'action'
                ? 'bg-indigo-600 border-indigo-500 text-white'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI 擬定供應商應變對策草案</span>
          </button>
        </div>

        {/* AI Output Card */}
        {aiAnalysisResult && (
          <div className="mt-3 p-4 bg-slate-950 rounded-lg border border-indigo-500/40 text-xs">
            <pre className="font-sans text-indigo-100 whitespace-pre-wrap leading-relaxed">
              {aiAnalysisResult}
            </pre>
          </div>
        )}
      </div>

      {/* Human-in-the-loop Final Decision Panel */}
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-white flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            ② 第二步：人類工程專家最終簽核與決策（Human-in-the-loop）
          </span>
          <span className="text-[11px] text-slate-400">AI 負責分析，責任永遠由人承擔</span>
        </div>

        <div className="space-y-2">
          <label className={`block p-2.5 rounded-lg border cursor-pointer transition-all ${
            humanDecision === 'review_vendor' ? 'bg-indigo-950/70 border-indigo-500 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-300'
          }`}>
            <input
              type="radio"
              name="decision"
              value="review_vendor"
              checked={humanDecision === 'review_vendor'}
              onChange={() => setHumanDecision('review_vendor')}
              className="mr-2"
            />
            <span className="font-semibold text-emerald-300">決策 A（推薦）：</span>
            批准召開 M101 模具檢討會要求廠商修模，並由採購部洽詢 MCU 替代現貨。
          </label>

          <label className={`block p-2.5 rounded-lg border cursor-pointer transition-all ${
            humanDecision === 'force_production' ? 'bg-indigo-950/70 border-indigo-500 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-300'
          }`}>
            <input
              type="radio"
              name="decision"
              value="force_production"
              checked={humanDecision === 'force_production'}
              onChange={() => setHumanDecision('force_production')}
              className="mr-2"
            />
            <span className="font-semibold text-amber-300">決策 B（高風險）：</span>
            要求設計端放寬公差硬性放行量產。（有整機卡榫斷裂與退貨客訴風險）
          </label>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={handleConfirmDecision}
            disabled={!humanDecision || confirmed}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-medium text-xs transition-colors cursor-pointer"
          >
            {confirmed ? '✓ 專案決策已核准存檔' : '確認簽署專案決策'}
          </button>

          {confirmed && (
            <span className="text-emerald-400 font-medium flex items-center gap-1.5 text-xs">
              <CheckCircle2 className="w-4 h-4" />
              完成人機協作全閉環！成功化解專案危機。
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
