import React, { useState } from 'react';
import { GitBranch, Copy, Check, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';

interface PresetDiagram {
  name: string;
  code: string;
  nodes: {
    id: string;
    label: string;
    type: 'rect' | 'diamond' | 'round';
    x: number;
    y: number;
  }[];
  edges: {
    from: string;
    to: string;
    label?: string;
  }[];
}

const PRESETS: PresetDiagram[] = [
  {
    name: '範例 1：料件試模與工程變更流程',
    code: `graph TD
    A[供應商交付 T1 樣品] --> B{尺寸公差檢驗}
    B -- 合格 --> C[簽署驗收單並放行量產]
    B -- 不合格 --> D[開立工程變更單 ECN]
    D --> E[修改模具並排定 T2 試模]
    E --> B`,
    nodes: [
      { id: 'A', label: '供應商交付 T1 樣品', type: 'round', x: 200, y: 35 },
      { id: 'B', label: '尺寸公差檢驗是否合格？', type: 'diamond', x: 200, y: 120 },
      { id: 'C', label: '簽署驗收單並放行量產', type: 'rect', x: 70, y: 220 },
      { id: 'D', label: '開立工程變更單 ECN', type: 'rect', x: 330, y: 220 },
      { id: 'E', label: '修改模具並排定 T2 試模', type: 'rect', x: 330, y: 305 },
    ],
    edges: [
      { from: 'A', to: 'B' },
      { from: 'B', to: 'C', label: '合格' },
      { from: 'B', to: 'D', label: '不合格' },
      { from: 'D', to: 'E' },
    ]
  },
  {
    name: '範例 2：請購單分流簽核',
    code: `graph TD
    A[填寫料件請購單] --> B{採購金額 > 10 萬?}
    B -- 是 --> C[呈報部門副總裁簽核]
    B -- 否 --> D[直屬專案經理簽核]
    C --> E[採購部發包訂單]
    D --> E`,
    nodes: [
      { id: 'A', label: '填寫料件請購單', type: 'round', x: 200, y: 35 },
      { id: 'B', label: '採購金額 > 10 萬元？', type: 'diamond', x: 200, y: 120 },
      { id: 'C', label: '呈報部門副總裁簽核', type: 'rect', x: 70, y: 220 },
      { id: 'D', label: '直屬專案經理簽核', type: 'rect', x: 330, y: 220 },
      { id: 'E', label: '採購部發包訂單', type: 'round', x: 200, y: 310 },
    ],
    edges: [
      { from: 'A', to: 'B' },
      { from: 'B', to: 'C', label: '是' },
      { from: 'B', to: 'D', label: '否' },
      { from: 'C', to: 'E' },
      { from: 'D', to: 'E' },
    ]
  }
];

export const Level7Simulator: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [code, setCode] = useState(PRESETS[0].code);
  const [copied, setCopied] = useState(false);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const currentPreset = PRESETS[activePresetIndex];

  const handleSelectPreset = (idx: number) => {
    setActivePresetIndex(idx);
    setCode(PRESETS[idx].code);
    setActiveNodeId(null);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-indigo-400" />
            Mermaid 文字轉流程圖即時畫布
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            左邊打字、右邊即時繪圖。再也不必用滑鼠辛苦拖曳方塊和對齊箭頭！
          </p>
        </div>

        {/* Preset switchers */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {PRESETS.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSelectPreset(i)}
              className={`text-xs px-2.5 py-1 rounded transition-colors ${
                activePresetIndex === i
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              {p.name.split('：')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Code Editor */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3 text-xs">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-indigo-300">Mermaid 文字語法代碼：</span>
              <button
                onClick={copyCode}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '已複製' : '複製代碼'}</span>
              </button>
            </div>
            <textarea
              rows={9}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full font-mono text-xs bg-slate-950 border border-slate-700 rounded-lg p-3 text-indigo-200 focus:outline-none focus:border-indigo-500 leading-relaxed"
            />
            <p className="text-[11px] text-slate-400 mt-2">
              語法小辭典：<br/>
              • <code className="bg-slate-900 px-1 rounded text-white">[文字]</code>：一般矩形步驟<br/>
              • <code className="bg-slate-900 px-1 rounded text-white">{`{文字}`}</code>：菱形條件判斷<br/>
              • <code className="bg-slate-900 px-1 rounded text-white">-- 是 --&gt;</code>：帶文字標籤的箭頭
            </p>
          </div>

          <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-700/80 text-[11px] space-y-1.5">
            <span className="font-semibold text-slate-200 block">如何匯入 draw.io 進階美化？</span>
            <p className="text-slate-400 leading-relaxed">
              打開 <a href="https://app.diagrams.net" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">draw.io</a>，點擊上方選單【調整】(Arrange) →【插入】(Insert) →【進階】(Advanced) →【Mermaid】，將代碼貼上即能一鍵轉為可自由縮放與拖曳的工程圖形！
            </p>
          </div>
        </div>

        {/* Right: Live Dynamic SVG Canvas */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center min-h-[360px] relative overflow-hidden">
          <div className="absolute top-3 left-3 text-[11px] text-slate-500 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            即時向量繪圖渲染視圖 (點擊節點可高亮)
          </div>

          <svg className="w-full max-w-[420px] h-[350px] overflow-visible" viewBox="0 0 400 350">
            {/* Draw Edges */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#818cf8" />
              </marker>
            </defs>

            {currentPreset.edges.map((edge, idx) => {
              const fromNode = currentPreset.nodes.find(n => n.id === edge.from);
              const toNode = currentPreset.nodes.find(n => n.id === edge.to);
              if (!fromNode || !toNode) return null;

              const isDirect = Math.abs(fromNode.x - toNode.x) < 20;
              const midY = (fromNode.y + toNode.y) / 2;

              let pathD = '';
              if (isDirect) {
                pathD = `M ${fromNode.x} ${fromNode.y + 20} L ${toNode.x} ${toNode.y - 20}`;
              } else {
                pathD = `M ${fromNode.x} ${fromNode.y + 20} C ${fromNode.x} ${midY}, ${toNode.x} ${midY}, ${toNode.x} ${toNode.y - 20}`;
              }

              return (
                <g key={idx}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                  {edge.label && (
                    <text
                      x={(fromNode.x + toNode.x) / 2 + (edge.label === '合格' ? -20 : 20)}
                      y={midY}
                      fill="#38bdf8"
                      fontSize="10"
                      textAnchor="middle"
                      className="font-medium"
                    >
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Draw Nodes */}
            {currentPreset.nodes.map((node) => {
              const isSelected = activeNodeId === node.id;
              const isDiamond = node.type === 'diamond';

              return (
                <g
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className="cursor-pointer transition-transform hover:scale-105"
                  transform={`translate(${node.x}, ${node.y})`}
                >
                  {isDiamond ? (
                    <polygon
                      points="0,-25 75,0 0,25 -75,0"
                      fill={isSelected ? '#312e81' : '#1e1b4b'}
                      stroke={isSelected ? '#818cf8' : '#6366f1'}
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                    />
                  ) : (
                    <rect
                      x="-70"
                      y="-18"
                      width="140"
                      height="36"
                      rx={node.type === 'round' ? '18' : '6'}
                      fill={isSelected ? '#1e293b' : '#0f172a'}
                      stroke={isSelected ? '#38bdf8' : '#334155'}
                      strokeWidth={isSelected ? '2' : '1'}
                    />
                  )}
                  <text
                    x="0"
                    y="4"
                    fill={isSelected ? '#ffffff' : '#e2e8f0'}
                    fontSize="11"
                    textAnchor="middle"
                    className="font-sans select-none pointer-events-none"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};
