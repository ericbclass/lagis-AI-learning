import React, { useState, useEffect } from 'react';
import { COURSES } from '../data/courses';
import { LevelData, UserProgress } from '../types';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Sparkles, 
  Play, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Award, 
  ThumbsUp, 
  AlertCircle,
  Lightbulb,
  Check
} from 'lucide-react';

// Import all 12 simulators
import { Level0Simulator } from './interactive/Level0Simulator';
import { Level1Simulator } from './interactive/Level1Simulator';
import { Level2Simulator } from './interactive/Level2Simulator';
import { Level3Simulator } from './interactive/Level3Simulator';
import { Level4Simulator } from './interactive/Level4Simulator';
import { Level5Simulator } from './interactive/Level5Simulator';
import { Level6Simulator } from './interactive/Level6Simulator';
import { Level7Simulator } from './interactive/Level7Simulator';
import { Level8Simulator } from './interactive/Level8Simulator';
import { Level9Simulator } from './interactive/Level9Simulator';
import { Level10Simulator } from './interactive/Level10Simulator';
import { Level11Simulator } from './interactive/Level11Simulator';

interface LevelViewerProps {
  levelId: number;
  onNavigateLevel: (id: number) => void;
  onCompleteLevel: (levelId: number, score: number) => void;
  progress: UserProgress;
}

export const LevelViewer: React.FC<LevelViewerProps> = ({
  levelId,
  onNavigateLevel,
  onCompleteLevel,
  progress
}) => {
  const course = COURSES.find(c => c.id === levelId) || COURSES[0];
  const isCompleted = progress.completedLevels.includes(course.id);

  // Step 1: Think state
  const [selectedThinkOption, setSelectedThinkOption] = useState<string | null>(null);

  // Step 6: Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Scroll to top when level changes
  useEffect(() => {
    setSelectedThinkOption(null);
    setQuizAnswers({});
    setShowQuizResult(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [levelId]);

  // Compute quiz score
  const totalQuestions = course.step6Quiz.length;
  let correctCount = 0;
  course.step6Quiz.forEach(q => {
    const selectedOption = q.options.find(o => o.id === quizAnswers[q.id]);
    if (selectedOption?.isCorrect) {
      correctCount++;
    }
  });

  const handleFinishLevel = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore in test sandboxes
    }
    onCompleteLevel(course.id, correctCount);
  };

  const renderSimulator = (id: number) => {
    switch (id) {
      case 0: return <Level0Simulator />;
      case 1: return <Level1Simulator />;
      case 2: return <Level2Simulator />;
      case 3: return <Level3Simulator />;
      case 4: return <Level4Simulator />;
      case 5: return <Level5Simulator />;
      case 6: return <Level6Simulator />;
      case 7: return <Level7Simulator />;
      case 8: return <Level8Simulator />;
      case 9: return <Level9Simulator />;
      case 10: return <Level10Simulator />;
      case 11: return <Level11Simulator />;
      default: return <Level0Simulator />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      {/* Top Navigation & Level Header */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <button
          onClick={() => onNavigateLevel(Math.max(0, course.id - 1))}
          disabled={course.id === 0}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>上一課</span>
        </button>

        <div className="text-center">
          <span className="text-[11px] font-mono font-semibold text-indigo-400 uppercase tracking-wider block">
            Level {course.id} / 11
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
            {course.title.replace(/^Level \d+：/, '')}
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-lg mx-auto">
            {course.subtitle}
          </p>
        </div>

        <button
          onClick={() => onNavigateLevel(Math.min(11, course.id + 1))}
          disabled={course.id === 11}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
        >
          <span>下一課</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ① 先想一想 (Think First) */}
      <section className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-md space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-indigo-950 border border-indigo-500/80 text-indigo-400 flex items-center justify-center font-bold text-xs">
            1
          </span>
          <h2 className="text-base font-bold text-white">① 先想一想</h2>
        </div>

        <p className="text-sm font-medium text-slate-200 leading-relaxed pl-8">
          {course.step1Think.question}
        </p>

        <div className="space-y-3 pl-8 pt-2">
          {course.step1Think.options.map((option) => (
            <div key={option.id}>
              <button
                onClick={() => setSelectedThinkOption(option.id)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${
                  selectedThinkOption === option.id
                    ? 'bg-indigo-950/80 border-indigo-500 text-white ring-1 ring-indigo-500/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-medium">{option.label}</div>
              </button>

              {selectedThinkOption === option.id && (
                <div className="mt-2 p-3 bg-slate-950/80 border border-indigo-900/40 rounded-lg text-xs text-indigo-200 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">思考反饋：</span>
                    {option.reflection}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ② 看懂概念 (Understand Concepts) */}
      <section className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-md space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-950 border border-sky-500/80 text-sky-400 flex items-center justify-center font-bold text-xs">
              2
            </span>
            <h2 className="text-base font-bold text-white">② 看懂概念</h2>
          </div>
          <span className="text-[11px] text-slate-400">白話講解 · 零專有名詞障礙</span>
        </div>

        {/* 核心課程內容 */}
        <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              【🎯 核心課程要點】
            </span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
            {course.step2Concept.coreCourseSummary.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1 select-none font-bold">▪</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 網站為了幫助新手理解而補充的說明 */}
        <div className="p-4 bg-indigo-950/20 border border-indigo-900/40 rounded-xl space-y-2.5">
          <div className="flex items-center gap-2 pb-2 border-b border-indigo-900/40">
            <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              【💡 網站為新手補充的生動比喻】
            </span>
          </div>
          <div className="space-y-2 text-xs text-indigo-200/90 leading-relaxed">
            {course.step2Concept.beginnerFriendlyNotes.map((note, idx) => (
              <p key={idx}>{note}</p>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
          <span className="font-semibold text-amber-300 shrink-0">本節金律：</span>
          <span>{course.step2Concept.keyTakeaway}</span>
        </div>
      </section>

      {/* ③ 看範例 (See Example) */}
      <section className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-md space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-amber-950 border border-amber-500/80 text-amber-400 flex items-center justify-center font-bold text-xs">
            3
          </span>
          <h2 className="text-base font-bold text-white">③ 看範例：{course.step3Example.title}</h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 pl-8">
          情境描述：<strong className="text-white">{course.step3Example.scenario}</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8 pt-2">
          {course.step3Example.badApproach && (
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 text-xs space-y-2">
              <span className="font-semibold text-rose-300 block">
                {course.step3Example.badApproach.title}
              </span>
              <pre className="font-mono bg-slate-950/80 p-2.5 rounded border border-rose-900/30 text-rose-200 whitespace-pre-wrap">
                {course.step3Example.badApproach.content}
              </pre>
              <p className="text-rose-400 text-[11px]">
                原因：{course.step3Example.badApproach.whyBad}
              </p>
            </div>
          )}

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs space-y-2">
            <span className="font-semibold text-emerald-300 block">
              {course.step3Example.goodApproach.title}
            </span>
            <pre className="font-mono bg-slate-950/80 p-2.5 rounded border border-emerald-900/30 text-emerald-200 whitespace-pre-wrap">
              {course.step3Example.goodApproach.content}
            </pre>
            <p className="text-emerald-400 text-[11px]">
              優點：{course.step3Example.goodApproach.whyGood}
            </p>
          </div>
        </div>

        <div className="p-3 ml-8 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-300">
          <strong className="text-indigo-300">核心洞察：</strong> {course.step3Example.insight}
        </div>
      </section>

      {/* ④ 自己試試看 (Interactive Sandbox) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/80 text-emerald-400 flex items-center justify-center font-bold text-xs">
              4
            </span>
            <h2 className="text-base font-bold text-white">④ 自己試試看：{course.step4Interactive.taskTitle}</h2>
          </div>
          <span className="text-xs text-emerald-400 font-medium">實際動手操作</span>
        </div>

        {renderSimulator(course.id)}
      </section>

      {/* ⑤ AI 幫你檢查 (AI Check) */}
      <section className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-md space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-purple-950 border border-purple-500/80 text-purple-400 flex items-center justify-center font-bold text-xs">
            5
          </span>
          <h2 className="text-base font-bold text-white">⑤ AI 幫你檢查</h2>
        </div>

        <p className="text-xs text-slate-400 pl-8">
          檢視你的操作成果，以下是專業 AI 專家在審視這類任務時的核心評核標準：
        </p>

        <div className="space-y-3 pl-8">
          {course.step5AiCheck.standardChecklist.map((item, idx) => (
            <div key={idx} className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2 text-xs">
              <span className="font-semibold text-white block">{item.item}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="text-emerald-300 bg-emerald-950/30 p-2 rounded border border-emerald-900/30">
                  <span className="font-semibold block text-emerald-200 mb-0.5">✓ 你做對了什麼：</span>
                  {item.goodPoint}
                </div>
                <div className="text-amber-300 bg-amber-950/30 p-2 rounded border border-amber-900/30">
                  <span className="font-semibold block text-amber-200 mb-0.5">⚠️ 還可以改善什麼：</span>
                  {item.improvePoint}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⑥ 小測驗 (Quiz) */}
      <section className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-md space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-rose-950 border border-rose-500/80 text-rose-400 flex items-center justify-center font-bold text-xs">
              6
            </span>
            <h2 className="text-base font-bold text-white">⑥ 小測驗（共 {totalQuestions} 題）</h2>
          </div>
          <span className="text-xs text-slate-400">即時解析回饋</span>
        </div>

        <div className="space-y-6 pl-8">
          {course.step6Quiz.map((q, qIndex) => {
            const currentSelected = quizAnswers[q.id];
            const hasAnswered = !!currentSelected;

            return (
              <div key={q.id} className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
                <span className="text-xs font-semibold text-slate-200 block">
                  第 {qIndex + 1} 題：{q.question}
                </span>

                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isPicked = currentSelected === opt.id;
                    let optionStyle = 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700';

                    if (hasAnswered) {
                      if (opt.isCorrect) {
                        optionStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200';
                      } else if (isPicked && !opt.isCorrect) {
                        optionStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={hasAnswered}
                        onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: opt.id }))}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${optionStyle}`}
                      >
                        <div className="flex items-start gap-2">
                          <span className="font-mono font-bold shrink-0">{opt.id.toUpperCase()}.</span>
                          <span>{opt.text}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {hasAnswered && (
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-300 space-y-1">
                    <span className="font-semibold text-indigo-300 block">題目詳解：</span>
                    <p>{q.options.find(o => o.id === currentSelected)?.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ⑦ 完成章節 (Finish Level) */}
      <section className="bg-gradient-to-b from-slate-800/90 to-slate-900 border border-indigo-500/40 rounded-2xl p-6 text-center space-y-4 shadow-xl">
        <div className="w-12 h-12 rounded-full bg-indigo-950 border border-indigo-500 flex items-center justify-center text-indigo-400 mx-auto">
          {isCompleted ? <Check className="w-6 h-6 text-emerald-400" /> : <Award className="w-6 h-6" />}
        </div>

        <div>
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">
            章節結算
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
            {isCompleted ? '✓ 你已完成本章節學習！' : '⑦ 完成本章節'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            小測驗得分：<span className="font-mono font-bold text-emerald-400">{correctCount}</span> / {totalQuestions} 題正確
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {!isCompleted ? (
            <button
              onClick={handleFinishLevel}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-emerald-950 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>標記為已完成 (✓)</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-800">
              <CheckCircle2 className="w-4 h-4" />
              <span>本單元進度已永久儲存</span>
            </div>
          )}

          {course.id < 11 && (
            <button
              onClick={() => onNavigateLevel(course.id + 1)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>前往下一關：Level {course.id + 1}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
