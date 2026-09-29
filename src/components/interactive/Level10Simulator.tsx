import React, { useState } from 'react';
import { Shield, ShieldAlert, ShieldCheck, HelpCircle, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface Dilemma {
  id: number;
  scenario: string;
  category: '公開' | '個資PII' | '機密' | '脫敏代碼';
  correctChoice: 'allowed' | 'mask_first' | 'forbidden';
  verdictTitle: string;
  explanation: string;
  practicalRule: string;
}

const DILEMMAS: Dilemma[] = [
  {
    id: 1,
    scenario: '公司官方公開網站上，已經發布並廣發給媒體的新產品規格型錄與新聞稿介紹。',
    category: '公開',
    correctChoice: 'allowed',
    verdictTitle: '✅ 可以直接提供',
    explanation: '這份資料本來就是對全世界公開發布的行銷公關材料，不包含未發布專利、PII 個人隱私或內部營業秘密。',
    practicalRule: '判斷依據：公開可見且無需帳號密碼之公開資料，可安心請 AI 幫忙潤飾或翻譯。'
  },
  {
    id: 2,
    scenario: '業務部門的一份 Excel 表格，內含 50 位真實 VIP 客戶的【中文全名、私人手機號碼、住家地址與身分證字號】。',
    category: '個資PII',
    correctChoice: 'forbidden',
    verdictTitle: '⛔ 嚴禁直接上傳！',
    explanation: '這屬於重度敏感的個人識別資訊（PII）。直接上傳給第三方免費雲端 AI 嚴重違反《個人資料保護法》，可能面臨鉅額罰鍰與刑責！',
    practicalRule: '判斷依據：含真實個人聯絡與身分識別資料，未經去識別化或授權，絕對嚴禁傳送。'
  },
  {
    id: 3,
    scenario: '明年第四季才要秘密上市的旗艦新機 3D 模具 CAD 零件圖與試模委託單。',
    category: '機密',
    correctChoice: 'forbidden',
    verdictTitle: '⛔ 嚴禁隨意貼給公有 AI',
    explanation: '這屬於尚未公開之核心商業機密與專利研發資產。一旦外洩被競爭對手取得或被公有模型學習，公司將蒙受不可逆的重大商業損失。',
    practicalRule: '判斷依據：未公開發布之核心工程資產，若需分析應於離線地端 AI 或簽署嚴格保密條款之內部專用環境處理。'
  },
  {
    id: 4,
    scenario: '一段演算法程式碼，但工程師已經把所有內部伺服器 IP、真實公司名稱與專利料號全部替換成通用代號（如 Server-A, Part-101）。',
    category: '脫敏代碼',
    correctChoice: 'mask_first',
    verdictTitle: '⚠️ 依規範（已去識別化）可評估使用',
    explanation: '已徹底落實去識別化（Masking），移除了真實機密標籤與網路拓撲資訊，僅保留通用的數學與邏輯語法，大幅降低外洩風險。',
    practicalRule: '判斷依據：落實「抽離真實血肉、僅留邏輯骨架」的脫敏流程後，可大幅提升 AI 協作安全性。'
  },
  {
    id: 5,
    scenario: '一份檔名為「2026年全體同仁薪資調幅與考績名冊.pdf」，檔案設有 6 位數開啟密碼。',
    category: '機密',
    correctChoice: 'forbidden',
    verdictTitle: '⛔ 嚴禁解密後貼給 AI（破解加密陷阱）',
    explanation: '很多新手以為「文件有設密碼就安全」，但只要你輸入密碼打開檔案、全選文字複製貼給 AI，文字在傳輸過程中就完全是明文裸奔了！',
    practicalRule: '判斷依據：Office/PDF 密碼只能防範未開檔狀態，一旦解密貼入瀏覽器，所有密碼防護瞬間失效。'
  },
  {
    id: 6,
    scenario: '一份未公開的新產品 BOM 零件成本表，上面詳列了每顆 IC 晶片的供應商進貨底價、利潤率與採購數量。',
    category: '機密',
    correctChoice: 'forbidden',
    verdictTitle: '⛔ 嚴禁外洩採購商業底牌',
    explanation: '採購進貨價格與成本毛利是企業最敏感的商業秘密。一旦對外洩漏，將嚴重破壞與供應商的談判籌碼及商業誠信。',
    practicalRule: '判斷依據：如果想請 AI 分析成本比例，務必將金額全部等比例縮放（例如全部除以一個隨機係數）並隱藏廠商名稱。'
  },
  {
    id: 7,
    scenario: '想寫一封安撫客戶延遲的商業回信，將人名改成「張小明」、產品改成「某批零組件」、金額改成「100 元」。',
    category: '脫敏代碼',
    correctChoice: 'allowed',
    verdictTitle: '✅ 完全可以！模範去識別化做法',
    explanation: '非常棒的去識別化範本！抽離了所有真實個資、產品機密與報價，AI 依然能精準產出高情商、合乎國際商務禮儀的高水準信件草稿。',
    practicalRule: '判斷依據：善用假名、假數據進行抽象化提問，既能獲得 AI 智慧，又能 100% 確保企業安全。'
  },
  {
    id: 8,
    scenario: '出差報帳單據掃描檔，上面印有主管的個人信用卡全號、有效期限與安全碼（CVV）。',
    category: '個資PII',
    correctChoice: 'forbidden',
    verdictTitle: '⛔ 嚴重資安紅線！',
    explanation: '信用卡號與安全碼屬於高度敏感金融憑證，隨意上傳存在直接盜刷與法律責任風險！',
    practicalRule: '判斷依據：金融帳號、信用卡、密碼憑證絕對不能交由任何外部對話模型處理。'
  }
];

export const Level10Simulator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userChoice, setUserChoice] = useState<'allowed' | 'mask_first' | 'forbidden' | null>(null);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const dilemma = DILEMMAS[currentIndex];

  const handleSelectChoice = (choice: 'allowed' | 'mask_first' | 'forbidden') => {
    if (userChoice !== null) return; // already answered this question
    setUserChoice(choice);
    setAnsweredCount(prev => prev + 1);

    if (choice === dilemma.correctChoice) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    setUserChoice(null);
    setCurrentIndex(prev => (prev + 1) % DILEMMAS.length);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 md:p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-700">
        <div>
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            「可以貼給 AI 嗎？」職場資安裁決挑戰
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            職場求生第一課！面對 8 種真實工作資料情境，做出正確的資安法官裁決。
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
          <span>當前進度：<strong className="text-white font-mono">{currentIndex + 1} / {DILEMMAS.length}</strong></span>
          <span>答對數：<strong className="text-emerald-400 font-mono">{score}</strong></span>
        </div>
      </div>

      {/* Dilemma Card */}
      <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 mb-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-medium">
            情境 #{dilemma.id} · 分類：{dilemma.category}
          </span>
          <span className="text-[11px] text-slate-500">請判斷是否能提供給一般外部 AI 處理</span>
        </div>

        <h3 className="text-sm md:text-base font-medium text-white leading-relaxed mb-6">
          {dilemma.scenario}
        </h3>

        {/* 3 Choice Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <button
            onClick={() => handleSelectChoice('allowed')}
            disabled={userChoice !== null}
            className={`p-3 rounded-lg border text-xs font-medium text-left transition-all ${
              userChoice === 'allowed'
                ? dilemma.correctChoice === 'allowed'
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                  : 'bg-rose-950/80 border-rose-500 text-rose-200'
                : userChoice !== null && dilemma.correctChoice === 'allowed'
                ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-300'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-semibold">選項 A：可以直接提供</span>
            </div>
            <p className="text-[11px] text-slate-400">公開宣傳資訊，無機密或個資外洩之虞。</p>
          </button>

          <button
            onClick={() => handleSelectChoice('mask_first')}
            disabled={userChoice !== null}
            className={`p-3 rounded-lg border text-xs font-medium text-left transition-all ${
              userChoice === 'mask_first'
                ? dilemma.correctChoice === 'mask_first'
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                  : 'bg-rose-950/80 border-rose-500 text-rose-200'
                : userChoice !== null && dilemma.correctChoice === 'mask_first'
                ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-300'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="font-semibold">選項 B：需去識別化或專案審批</span>
            </div>
            <p className="text-[11px] text-slate-400">依政策評估，先遮蔽隱匿真實代號方可使用。</p>
          </button>

          <button
            onClick={() => handleSelectChoice('forbidden')}
            disabled={userChoice !== null}
            className={`p-3 rounded-lg border text-xs font-medium text-left transition-all ${
              userChoice === 'forbidden'
                ? dilemma.correctChoice === 'forbidden'
                  ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                  : 'bg-rose-950/80 border-rose-500 text-rose-200'
                : userChoice !== null && dilemma.correctChoice === 'forbidden'
                ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-300'
                : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span className="font-semibold">選項 C：嚴禁提供（重大風險）</span>
            </div>
            <p className="text-[11px] text-slate-400">涉及未公開機密、專利核心或個資法律紅線。</p>
          </button>
        </div>

        {/* Verdict Feedback */}
        {userChoice !== null && (
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className={`font-bold text-sm flex items-center gap-1.5 ${
                userChoice === dilemma.correctChoice ? 'text-emerald-400' : 'text-amber-400'
              }`}>
                {userChoice === dilemma.correctChoice ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <XCircle className="w-4 h-4" />
                )}
                {userChoice === dilemma.correctChoice ? '判定正確！' : '判定有待調整！'} {dilemma.verdictTitle}
              </span>

              <button
                onClick={nextQuestion}
                className="flex items-center gap-1 px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors"
              >
                <span>下一題</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-slate-300 leading-relaxed">{dilemma.explanation}</p>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800 text-indigo-300 text-[11px]">
              <strong>💡 職場風控心法：</strong> {dilemma.practicalRule}
            </div>
          </div>
        )}
      </div>

      <div className="p-3 bg-indigo-950/20 border border-indigo-900/30 rounded-lg text-indigo-200/90 text-xs">
        <strong>核心總結：</strong> 不要把資安簡化成「全面禁止」或「隨意放任」。依據【公司政策】、【資料敏感分級】與【工具的隱私條款】三位一體進行綜合判斷，才是成熟專業的職場 AI 使用者！
      </div>
    </div>
  );
};
