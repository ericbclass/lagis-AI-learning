export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  hint?: string;
}

export type LevelCategory =
  | 'foundation'
  | 'prompt'
  | 'tools'
  | 'development'
  | 'multimedia'
  | 'knowledge'
  | 'diagram'
  | 'automation'
  | 'local'
  | 'security'
  | 'enterprise';

export interface LevelData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: LevelCategory;
  estimatedMinutes: number;
  
  // 7-step instructional model
  step1Think: {
    question: string;
    options: {
      id: string;
      label: string;
      reflection: string;
    }[];
  };
  
  step2Concept: {
    coreCourseSummary: string[]; // 課程內容
    beginnerFriendlyNotes: string[]; // 網站為了幫助新手理解而補充的說明
    keyTakeaway: string;
  };
  
  step3Example: {
    title: string;
    scenario: string;
    badApproach?: {
      title: string;
      content: string;
      whyBad: string;
    };
    goodApproach: {
      title: string;
      content: string;
      whyGood: string;
    };
    insight: string;
  };
  
  step4Interactive: {
    instructions: string;
    taskTitle: string;
  };
  
  step5AiCheck: {
    standardChecklist: {
      item: string;
      goodPoint: string;
      improvePoint: string;
    }[];
  };
  
  step6Quiz: QuizQuestion[];
}

export interface AITool {
  id: string;
  name: string;
  category: 'text' | 'development' | 'video' | 'automation' | 'local' | 'diagram' | 'knowledge';
  tagline: string;
  purpose: string;
  targetAudience: string;
  keyCapabilities: string[];
  learningCurve: '入門極易' | '簡單上手' | '中等門檻' | '進階配置';
  installationNeeded: '免安裝（瀏覽器直接用）' | '需安裝桌面軟體' | '本機環境部署';
  precautions: string;
  officialLink?: string;
  iconName: string;
}

export interface UserProgress {
  completedLevels: number[];
  currentLevel: number;
  quizScores: Record<number, number>; // levelId -> score
  lastActiveTimestamp: number;
}
