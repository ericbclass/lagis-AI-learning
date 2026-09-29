import React, { useState } from 'react';
import { HardDrive, Cloud, ShieldCheck, ShieldAlert, Cpu, WifiOff, Wifi, ArrowRight } from 'lucide-react';

export const Level9Simulator: React.FC = () => {
  const [mode, setMode] = useState<'cloud' | 'local'>('cloud');
  const [animating, setAnimating] = useState(false);
  const [packetStep, setPacketStep] = useState(0);

  const startPacketTest = () => {
    setAnimating(true);
    setPacketStep(0);

    const interval = setInterval(() => {
      setPacketStep(prev => {
        if (prev >= 3) {
          clearInterval(interval);
          setAnimating(false);
          return 3;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-indigo-400" />
            資料旅行遊戲：雲端 AI vs 地端 AI 封包路徑可視化
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            你的提示詞和資料到底去了哪裡？切換模式親眼觀察封包流向！
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-700">
          <button
            onClick={() => { setMode('cloud'); setPacketStep(0); }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              mode === 'cloud' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>雲端 AI (Cloud)</span>
          </button>
          <button
            onClick={() => { setMode('local'); setPacketStep(0); }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              mode === 'local' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <HardDrive className="w-3.5 h-3.5" />
            <span>地端本機 AI (LM Studio)</span>
          </button>
        </div>
      </div>

      {/* Visual Packet Journey Canvas */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-5 relative overflow-hidden">
        <div className="flex items-center justify-between text-xs mb-4">
          <span className="font-semibold text-white flex items-center gap-2">
            當前封包旅程路線：
            {mode === 'cloud' ? (
              <span className="text-indigo-400 flex items-center gap-1"><Wifi className="w-3.5 h-3.5" /> 經由公共網際網路外傳至第三方機房</span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1"><WifiOff className="w-3.5 h-3.5" /> 拔除網路線！100% 鎖在個人電腦晶片內部</span>
            )}
          </span>

          <button
            onClick={startPacketTest}
            disabled={animating}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs transition-colors cursor-pointer"
          >
            {animating ? '資料封包傳輸中...' : '發送測試資料'}
          </button>
        </div>

        {/* Path visualization */}
        {mode === 'cloud' ? (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className={`p-3 rounded-lg border transition-all ${
              packetStep >= 0 ? 'bg-indigo-950/70 border-indigo-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className="font-mono text-[11px] block text-slate-500 mb-1">節點 1</span>
              <span className="font-bold text-white block">我的個人電腦</span>
              <p className="text-[11px] text-slate-400 mt-1">使用者在瀏覽器輸入文字</p>
            </div>

            <div className={`p-3 rounded-lg border transition-all ${
              packetStep >= 1 ? 'bg-indigo-950/70 border-indigo-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className="font-mono text-[11px] block text-slate-500 mb-1">節點 2 (離開本機)</span>
              <span className="font-bold text-amber-300 block">公共網路 / ISP</span>
              <p className="text-[11px] text-slate-400 mt-1">封包通過海底電纜與路由器</p>
            </div>

            <div className={`p-3 rounded-lg border transition-all ${
              packetStep >= 2 ? 'bg-indigo-950/70 border-indigo-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className="font-mono text-[11px] block text-slate-500 mb-1">節點 3 (第三方)</span>
              <span className="font-bold text-purple-300 block">雲端超大資料中心</span>
              <p className="text-[11px] text-slate-400 mt-1">萬張伺服器顯卡高速計算</p>
            </div>

            <div className={`p-3 rounded-lg border transition-all ${
              packetStep >= 3 ? 'bg-emerald-950/70 border-emerald-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className="font-mono text-[11px] block text-slate-500 mb-1">節點 4</span>
              <span className="font-bold text-emerald-300 block">結果傳回電腦</span>
              <p className="text-[11px] text-slate-400 mt-1">螢幕渲染文字回答</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className={`p-3 rounded-lg border transition-all ${
              packetStep >= 0 ? 'bg-emerald-950/70 border-emerald-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className="font-mono text-[11px] block text-slate-500 mb-1">節點 1</span>
              <span className="font-bold text-white block">LM Studio 本機視窗</span>
              <p className="text-[11px] text-slate-400 mt-1">輸入機密資料或專利圖面</p>
            </div>

            <div className={`p-3 rounded-lg border transition-all ${
              packetStep >= 1 ? 'bg-emerald-950/70 border-emerald-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className="font-mono text-[11px] block text-slate-500 mb-1">節點 2 (本機主機板)</span>
              <span className="font-bold text-emerald-300 block">主機板 PCIe 內部總線</span>
              <p className="text-[11px] text-slate-400 mt-1">純硬體物理電路，無任何網卡封包</p>
            </div>

            <div className={`p-3 rounded-lg border transition-all ${
              packetStep >= 2 ? 'bg-emerald-950/70 border-emerald-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className="font-mono text-[11px] block text-slate-500 mb-1">節點 3 (本機晶片)</span>
              <span className="font-bold text-emerald-300 block">本機 GPU / CPU 記憶體</span>
              <p className="text-[11px] text-slate-400 mt-1">載入 Gemma 等 GGUF 模型運算</p>
            </div>

            <div className={`p-3 rounded-lg border transition-all ${
              packetStep >= 3 ? 'bg-emerald-950/70 border-emerald-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span className="font-mono text-[11px] block text-slate-500 mb-1">節點 4</span>
              <span className="font-bold text-emerald-300 block">本機離線螢幕顯示</span>
              <p className="text-[11px] text-slate-400 mt-1">資料 0 傳輸至外部世界！</p>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
          <span className="font-semibold text-white flex items-center gap-1.5">
            {mode === 'cloud' ? <ShieldAlert className="w-4 h-4 text-amber-400" /> : <ShieldCheck className="w-4 h-4 text-emerald-400" />}
            資安與隱私邊界評估
          </span>
          <p className="text-slate-300 leading-relaxed">
            {mode === 'cloud'
              ? '資料確實會透過網路離開你的電腦。如果使用免費個人版，可能有被納入訓練集的風險；若使用企業付費版且有簽署 Zero Data Retention 協議，則由供應商合約保證隱私。'
              : '最高等級物理隱私！即使切斷電腦 WiFi、拔除網路線，AI 依舊能在本機硬碟與顯卡上飛速運轉，徹底杜絕網路監聽與外洩。'}
          </p>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
          <span className="font-semibold text-white flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-indigo-400" />
            硬體門檻與效能權衡
          </span>
          <p className="text-slate-300 leading-relaxed">
            {mode === 'cloud'
              ? '使用者電腦完全不需要高階硬體，即使是 10 年前老舊文書機或手機，也能享有千億參數頂級模型的龐大智慧與秒速推理。'
              : '運算速度完全取決於個人電腦的記憶體（RAM）與顯示卡顯存（VRAM）。例如普通 16GB 記憶體筆電適合跑 7B~8B 量化模型，再往上則可能吃力。'}
          </p>
        </div>
      </div>

      {/* Crucial Security Warning */}
      <div className="mt-4 p-3 bg-amber-950/20 border border-amber-900/40 rounded-lg text-amber-300/90 text-xs flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-amber-200">客觀觀念導正（重要）：</span>
          「地端 AI」並不代表所有資料風險瞬間歸零！如果使用者的個人電腦本身中了後門木馬病毒、插了未經掃描的惡意隨身碟，或者筆電遭人實體竊取，資料依然可能在電腦端外洩。實體資安與作業系統防護依然是基本功！
        </div>
      </div>
    </div>
  );
};
