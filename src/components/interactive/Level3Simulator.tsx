import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, ExternalLink } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  tag: string;
  matchedTool: string;
  whyThisTool: string;
  whyNotOthers: string;
  practicalTip: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 's1',
    title: '我有 10 份幾十頁的研發規格書與內部作業規範，想快速查閱並標出原文依據',
    tag: '知識研讀與文件問答',
    matchedTool: 'NotebookLM',
    whyThisTool: 'NotebookLM 專注在「以你提供的資料作為唯一教材」，且每次回答都提供來源段落註腳 [1] [2]，絕不胡亂瞎掰。',
    whyNotOthers: '普通 ChatGPT 容易超出範圍產生「幻覺」，且貼入 10 份大文件容易被截斷或涉及隱私外洩。',
    practicalTip: '也可以直接貼入 YouTube 演講連結，它會自動抓取逐字稿幫你整理出精簡筆記！'
  },
  {
    id: 's2',
    title: '我不是工程師，但我今天想在瀏覽器裡做出一個讓同事查料件進度的互動網頁',
    tag: 'Web App / 網頁原型製作',
    matchedTool: 'Google AI Studio',
    whyThisTool: '具備極強的程式碼生成與單頁應用架構能力，只要用白話文描述需求，AI 能直接生成可即時執行的前端互動頁面。',
    whyNotOthers: '純筆記工具（如 Notion）無法生成客製化前端程式互動邏輯；影片工具更是完全不相干。',
    practicalTip: '發布（Publish）網頁前，務必確認網頁裡沒有偷放真實資料庫密碼或公司核心 API Key。'
  },
  {
    id: 's3',
    title: '需要把一份新產品重點摘要，快速製作成 30 秒帶有旁白與分鏡的宣傳短影片',
    tag: 'AI 影片與故事板',
    matchedTool: 'Google Vids',
    whyThisTool: 'Workspace 生態中專為工作簡報與短片設計的工具，能將 Google Docs 筆記一鍵拆分成分鏡、合成擬真人聲與自動匹配素材。',
    whyNotOthers: '文字對話 AI 只能寫出劇本文字，無法直接輸出帶有音軌與視訊畫面的影片檔案。',
    practicalTip: '記住「前 3 秒鉤子」法則，短影音務必開門見山點出痛點，觀眾才不會滑走。'
  },
  {
    id: 's4',
    title: '每天收到廠商報價信，要自動抓取附件 PDF、提取金額寫入試算表，並通知 Slack',
    tag: '工作流程自動化與 Agent',
    matchedTool: 'n8n',
    whyThisTool: 'n8n 像樂高積木一樣能將不同軟體串聯起來，配合 AI Agent 節點能自主決策、解析附件與執行條件分流。',
    whyNotOthers: '單次對話框 AI 只能被動等你複製貼上，無法 24 小時守在背景自動監聽 Email 事件。',
    practicalTip: 'AI Agent 節點一定要設定例外處理（Fallback），遇到看不懂的特殊報價單時，應發送警報由人工接手。'
  },
  {
    id: 's5',
    title: '專案資料涉及國家專利與未公開機密，公司規定「絕對不能連外網，必須拔掉網路線」',
    tag: '地端本機安全 AI',
    matchedTool: 'LM Studio',
    whyThisTool: 'LM Studio 可將開源大模型直接下載到本機硬碟與記憶體中，在完全斷網狀態下本機離線運算，封包零外流。',
    whyNotOthers: 'ChatGPT、Google AI Studio 等都是雲端運算，封包必須穿過公開網際網路傳到第三方資料中心。',
    practicalTip: '本機跑 AI 取決於電腦的 RAM/VRAM 與顯卡，普通筆電建議選擇 7B~8B 左右經過量化（Q4/Q8）的模型。'
  },
  {
    id: 's6',
    title: '想為專案的「料件試模驗收與工程變更」畫一張邏輯嚴密的流程圖，不想手動對齊箭頭',
    tag: '代碼化流程圖',
    matchedTool: 'Mermaid + draw.io',
    whyThisTool: 'Mermaid 用純文字描述步驟（如 A --> B），軟體自動幫你排出整齊漂亮的向量圖形，修改步驟只需改一行文字！',
    whyNotOthers: '用 Word 或 PowerPoint 拉線，多加一個步驟就要手動重新對齊 20 個方塊，痛苦至極。',
    practicalTip: '先請 AI 幫你寫出 Mermaid 語法，預覽確認無誤後，可直接匯入 draw.io 進行客製化上色與匯出向量圖。'
  }
];

export const Level3Simulator: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === selectedId) || SCENARIOS[0];

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            情境工具智慧配對盤
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            先定義目標，再選工具！點擊不同職場需求，看看為什麼這個情境最適合它。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Scenarios list */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-xs font-semibold text-slate-400 block mb-2">
            選擇你要解決的工作情境：
          </span>
          {SCENARIOS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`w-full text-left p-3 rounded-lg border transition-all text-xs ${
                selectedId === item.id
                  ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-indigo-300">
                  {item.tag}
                </span>
                {selectedId === item.id && (
                  <span className="text-indigo-400 text-[11px] flex items-center gap-1">
                    當前查看 <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </div>
              <p className="leading-relaxed line-clamp-2">{item.title}</p>
            </button>
          ))}
        </div>

        {/* Right: Matched Tool Analysis */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-700/80 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div>
                <span className="text-xs text-slate-400 block">推薦最佳工具首選</span>
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-0.5">
                  <span className="text-indigo-400">★</span>
                  {activeScenario.matchedTool}
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                最佳情境適配
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                <span className="font-semibold text-emerald-300 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  為什麼這個情境適合 {activeScenario.matchedTool}？
                </span>
                <p className="text-slate-300 leading-relaxed pl-5">
                  {activeScenario.whyThisTool}
                </p>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                <span className="font-semibold text-amber-300 flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  為什麼其他工具容易踩坑或效率低下？
                </span>
                <p className="text-slate-300 leading-relaxed pl-5">
                  {activeScenario.whyNotOthers}
                </p>
              </div>

              <div className="p-3 bg-indigo-950/30 rounded-lg border border-indigo-900/40">
                <span className="font-semibold text-indigo-300 flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-4 h-4 text-indigo-400 shrink-0" />
                  新手避坑與高階實戰建議
                </span>
                <p className="text-indigo-200/90 leading-relaxed pl-5">
                  {activeScenario.practicalTip}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>記住金律：沒有最強的萬能工具，只有最符合當下目標的武器。</span>
          </div>
        </div>
      </div>
    </div>
  );
};
