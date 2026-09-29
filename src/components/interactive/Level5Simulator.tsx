import React, { useState } from 'react';
import { Film, User, Eye, Copy, Check, Sparkles, ChevronRight } from 'lucide-react';

interface Scene {
  number: number;
  timeRange: string;
  role: string; // Hook, Problem, Solution, CTA
  title: string;
  visualPrompt: string;
  camera: string;
  voiceover: string;
}

export const Level5Simulator: React.FC = () => {
  const [topic, setTopic] = useState('智慧工廠：30秒看懂料件異常如何自動通報');
  const [duration, setDuration] = useState<'15s' | '30s' | '60s'>('30s');
  const [audience, setAudience] = useState('忙碌的製造業主管與工程經理');
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);
  const [characterName, setCharacterName] = useState('資深製程工程師 Alex');
  const [copied, setCopied] = useState(false);
  const [copiedChar, setCopiedChar] = useState(false);

  // Dynamic scenes based on duration and topic
  const scenes: Scene[] = [
    {
      number: 1,
      timeRange: '0:00 - 0:03',
      role: '【前3秒黃金鉤子 Hook】',
      title: '突顯工廠生產停擺的緊急痛點',
      visualPrompt: '特寫鏡頭：整條現代化電子產線突然亮起紅色警示燈，工程師 Alex 焦慮地看著手中的缺料報表，神情凝重。',
      camera: '超近特寫 (Extreme Close-up) 快速拉遠至全身',
      voiceover: '「產線又因為一個小零件試模卡關，整整停工 3 天了嗎？」'
    },
    {
      number: 2,
      timeRange: '0:04 - 0:12',
      role: '【痛點放大 Problem】',
      title: '揭露傳統跨部門溝通的資訊孤島',
      visualPrompt: '分割畫面：左邊生管手動翻閱大量紙本委託單，右邊品保工程師在 Excel 來回剪貼，數據完全不同步。',
      camera: '左右雙分割畫面 (Split Screen)，字卡標記「資訊落差」',
      voiceover: '「手動抄寫單號、各部門 Excel 數字對不攏，等到發現延遲，損失早就無法挽回。」'
    },
    {
      number: 3,
      timeRange: '0:13 - 0:22',
      role: '【核心解方 Solution】',
      title: 'AI 智慧比對系統登場',
      visualPrompt: 'Alex 在平板電腦上輕點一下，螢幕上閃爍著即時料件 3D 模型與綠色合格進度條，高風險項目被 AI 自動標出並推送手機。',
      camera: '平板螢幕主觀視角 (POV) + 平順軌道平移運鏡 (Smooth Tracking)',
      voiceover: '「現在有了 AI 即時監控，自動抓出試模異常與交期風險，提早 7 天發出預警！」'
    },
    {
      number: 4,
      timeRange: '0:23 - 0:30',
      role: '【行動呼籲 CTA】',
      title: '產線恢復順暢，邀請體驗',
      visualPrompt: '產線機器人手臂高速穩定運作，Alex 與團隊露出自信笑容，畫面浮現專案試用連結與 QR Code。',
      camera: '中景 (Medium Shot) 緩慢升起帶出全景',
      voiceover: '「告別被動滅火！點擊下方連結，立即預約新一代智慧工程管理展示。」'
    }
  ];

  const characterConsistencyPrompt = `【角色外觀特徵錨點】：
姓名/身分：${characterName}，30 歲亞洲男性，短黑俐落髮型，佩戴黑色方框無反光眼鏡。
服裝設定：深海軍藍長袖工程防靜電制服，胸前有簡約銀色識別證夾，深灰工裝長褲，黑色安全鞋。
【三視圖 (Character Sheet 3-Views) 生成 Prompt】：
"Character design sheet of a 30-year-old Asian male manufacturing engineer named Alex, clean short black hair, wearing black thin-frame glasses, dark navy blue technical work uniform, white clean background. Three views: Full-body front view, 90-degree side profile view, and full-body back view. Neutral standing pose, consistent lighting, realistic style, 8k resolution, crisp line work, --ar 16:9"`;

  const copyScript = () => {
    const fullText = scenes.map(s => `Scene ${s.number} (${s.timeRange}) ${s.role} - ${s.title}\n[畫面]: ${s.visualPrompt}\n[鏡頭]: ${s.camera}\n[旁白]: ${s.voiceover}\n`).join('\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyCharPrompt = () => {
    navigator.clipboard.writeText(characterConsistencyPrompt);
    setCopiedChar(true);
    setTimeout(() => setCopiedChar(false), 2000);
  };

  const activeScene = scenes[selectedSceneIndex];

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Film className="w-5 h-5 text-indigo-400" />
            短影音分鏡腳本與人物一致性工作台
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            長片拆成短腳本、掌握前 3 秒 Hook、並用「三視圖」固定角色外觀，AI 影片絕不翻車！
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Script Settings & Scene Selector */}
        <div className="lg:col-span-5 space-y-4 text-xs">
          <div>
            <label className="font-medium text-slate-300 block mb-1">主題與故事主軸：</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-medium text-slate-300 block mb-1">時長規格：</label>
              <div className="flex gap-1">
                {(['15s', '30s', '60s'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setDuration(t)}
                    className={`flex-1 py-1.5 rounded border text-xs ${
                      duration === t ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-900 border-slate-700 text-slate-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="font-medium text-slate-300 block mb-1">主角命名：</label>
              <input
                type="text"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Scene cards list */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-slate-400">點擊切換查看各分鏡（Scene）：</span>
              <button
                onClick={copyScript}
                className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? '已複製全部腳本' : '複製全分鏡'}
              </button>
            </div>
            <div className="space-y-2">
              {scenes.map((scene, idx) => (
                <div
                  key={scene.number}
                  onClick={() => setSelectedSceneIndex(idx)}
                  className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                    selectedSceneIndex === idx
                      ? 'bg-indigo-950/60 border-indigo-500 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-semibold text-indigo-300">
                      Scene {scene.number} ({scene.timeRange})
                    </span>
                    <span className="text-[11px] text-slate-400">{scene.role}</span>
                  </div>
                  <p className="mt-1 line-clamp-1 text-slate-200">{scene.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Active Scene Breakdown & Character Anchor */}
        <div className="lg:col-span-7 space-y-4">
          {/* Active Scene details */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 text-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <span className="font-bold text-white text-sm flex items-center gap-2">
                <Eye className="w-4 h-4 text-indigo-400" />
                分鏡詳細指令：Scene {activeScene.number} ({activeScene.timeRange})
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[11px] border border-indigo-800/50">
                {activeScene.role}
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800">
                <span className="font-semibold text-emerald-300 block mb-1">
                  🎬 視覺畫面提示詞 (Visual Prompt)：
                </span>
                <p className="text-slate-200 leading-relaxed">{activeScene.visualPrompt}</p>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800">
                <span className="font-semibold text-sky-300 block mb-1">
                  🎥 鏡頭語言與運鏡 (Camera Shot)：
                </span>
                <p className="text-slate-300">{activeScene.camera}</p>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800">
                <span className="font-semibold text-amber-300 block mb-1">
                  🎙️ 旁白音軌 (Voiceover Script)：
                </span>
                <p className="text-slate-200 italic font-serif text-sm">"{activeScene.voiceover}"</p>
              </div>
            </div>
          </div>

          {/* Character Consistency Anchor Card */}
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-4 text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="font-bold text-white flex items-center gap-1.5">
                <User className="w-4 h-4 text-emerald-400" />
                人物素材一致性：三視圖 (3-Views) 錨點 Prompt
              </span>
              <button
                onClick={copyCharPrompt}
                className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300"
              >
                {copiedChar ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copiedChar ? '已複製' : '複製三視圖指令'}
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mb-2">
              避免主角在各鏡頭間「換臉變形」的秘訣：先生成正視、側視、後視三視圖，後續各幕皆以三視圖作為參考圖 (Reference Image)！
            </p>
            <pre className="text-[11px] font-mono bg-slate-950/80 p-2.5 rounded border border-slate-800 text-emerald-200/90 whitespace-pre-wrap max-h-24 overflow-y-auto">
              {characterConsistencyPrompt}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
