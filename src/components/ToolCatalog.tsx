import React, { useState } from 'react';
import { AI_TOOLS } from '../data/tools';
import { AITool } from '../types';
import { Search, ExternalLink, ShieldAlert, CheckCircle2, Layers, Cpu, Wrench } from 'lucide-react';

export const ToolCatalog: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '全部工具' },
    { id: 'text', label: '語言與文字' },
    { id: 'development', label: '開發與原型' },
    { id: 'knowledge', label: '知識庫與文件' },
    { id: 'video', label: '影音創作' },
    { id: 'automation', label: '流程自動化' },
    { id: 'local', label: '地端本機' },
    { id: 'diagram', label: '流程圖表' },
  ];

  const filteredTools = AI_TOOLS.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.purpose.toLowerCase().includes(search.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          AI 工具客觀探索庫
        </h2>
        <p className="text-sm text-slate-300">
          不使用主觀排名，回歸本質：用途、適合誰、能做什麼與注意事項，幫你在各種情境精準選型。
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜尋工具名稱或關鍵字..."
            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Tools Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-slate-600 transition-all shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-indigo-300 mt-0.5 font-medium line-clamp-1">
                    {tool.tagline}
                  </p>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                  {tool.learningCurve}
                </span>
              </div>

              {/* Purpose & Target Audience */}
              <div className="space-y-1.5 text-xs pt-2 border-t border-slate-700/80">
                <div>
                  <span className="font-semibold text-slate-400 block text-[11px]">【核心用途】：</span>
                  <p className="text-slate-200 leading-relaxed">{tool.purpose}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-400 block text-[11px]">【適合誰】：</span>
                  <p className="text-slate-300 leading-relaxed">{tool.targetAudience}</p>
                </div>
              </div>

              {/* Capabilities checklist */}
              <div className="pt-2 border-t border-slate-700/80">
                <span className="font-semibold text-slate-400 block text-[11px] mb-1.5">【可以做什麼】：</span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {tool.keyCapabilities.slice(0, 3).map((cap, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Precautions */}
              <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 text-[11px] text-amber-300/90 leading-relaxed flex items-start gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-200">注意事項：</span>
                  {tool.precautions}
                </div>
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="pt-4 mt-4 border-t border-slate-700/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">{tool.installationNeeded}</span>
              {tool.officialLink ? (
                <a
                  href={tool.officialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  <span>官方連結</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-slate-500 text-[11px]">開源標準協議</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="p-12 text-center text-slate-400 text-sm">
          查無符合「{search}」的工具，請嘗試更換關鍵字。
        </div>
      )}
    </div>
  );
};
