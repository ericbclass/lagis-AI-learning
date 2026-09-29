import { AITool } from '../types';

export const AI_TOOLS: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'text',
    tagline: '開創對話式 AI 普及浪潮的多功能文字與邏輯助手',
    purpose: '日常對話、文案發想、語意翻譯、程式碼輔助、多領域知識問答',
    targetAudience: '學生、上班族、內容創作者、軟體工程師、日常所有需要文字輔助的使用者',
    keyCapabilities: [
      '自然語言問答與多輪上下文理解',
      '長篇文案撰寫、潤飾與跨語言翻譯',
      '程式碼除錯、邏輯梳理與數學公式推導',
      '支援自訂 Instructions 與專屬 GPTs 建立'
    ],
    learningCurve: '入門極易',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '免費用戶提問預設可能納入模型訓練，請勿在未開啟隱私模式或未脫敏情況下輸入公司內部機密與個人隱私資料。',
    officialLink: 'https://chatgpt.com',
    iconName: 'MessageSquareText'
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    category: 'development',
    tagline: 'Google 官方提供的高效 AI 原型開發與超長文本實驗環境',
    purpose: 'App 原型設計、全端網頁程式碼生成、超長上下文（百萬級 Token）分析、Prompt 工程實驗',
    targetAudience: '產品經理、獨立開發者、想不寫代碼打造小工具的職場人士、AI 研發工程師',
    keyCapabilities: [
      '透過自然語言即時構建並測試網頁應用原型',
      '支援百萬級 Token 超長文本輸入（整本書籍或整個程式專案）',
      '支援多模態輸入（影片、音訊、圖片、PDF 一次分析）',
      '可一鍵獲取 API Key 與匯出程式碼'
    ],
    learningCurve: '簡單上手',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '發布（Publish）網頁前，務必確認前端程式碼未寫入私密 API 金鑰或未授權的內部資料。',
    officialLink: 'https://aistudio.google.com',
    iconName: 'CodeXml'
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    category: 'knowledge',
    tagline: '將你提供的專屬材料作為唯一教材的深度閱讀與筆記助理',
    purpose: '長篇研討資料研讀、多篇 PDF 跨文件交叉比對、YouTube 影片逐字稿整理、附帶來源註腳的精準問答',
    targetAudience: '研究人員、專案經理、需要閱讀海量法規與操作手冊的工程師、在學生',
    keyCapabilities: [
      '支援上傳 PDF、Google Docs、網頁文章與 YouTube 影片連結',
      '嚴格錨定在使用者提供的資料來源中回答（Grounded AI）',
      '回答自動附帶精確的引文標籤（Citations），點擊可查看原始段落',
      '提供音訊深入探討（Audio Overview）功能將筆記轉成播客對話'
    ],
    learningCurve: '入門極易',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '上傳的文件大小與數量有限額，若原始文件本身存在錯誤，AI 回答亦可能繼承該錯誤。',
    officialLink: 'https://notebooklm.google.com',
    iconName: 'BookOpen'
  },
  {
    id: 'google-vids',
    name: 'Google Vids',
    category: 'video',
    tagline: 'Google Workspace 內建的智慧職場簡報與說明影片協作工具',
    purpose: '自動化將工作文件、產品介紹或教學講義快速轉化為具備分鏡與配音的影片',
    targetAudience: '企業內部培訓師、行銷人員、專案報告者、遠距跨國團隊',
    keyCapabilities: [
      '從 Google Docs 或提示詞一鍵生成影片故事板（Storyboard）',
      '內建免版稅高畫質影片庫、圖片與背景音樂素材',
      '提供 AI 生成旁白語音與多種口音配音',
      '支援 Workspace 雲端共同編輯與即時審核評論'
    ],
    learningCurve: '簡單上手',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '適合商務說明、培訓與簡報型影片；若需要高度好萊塢級複雜特效，仍需專業剪輯軟體。',
    iconName: 'Video'
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'automation',
    tagline: '支援開源私有化部署的工作流程與 AI Agent 自動化編排神器',
    purpose: '跨應用程式資料串接、定時自動化任務、構建自主決策型 AI Agent、資料清洗與通知分流',
    targetAudience: '自動化愛好者、系統管理員、營運成長黑客、追求資料留在內網的企業 IT',
    keyCapabilities: [
      '視覺化節點畫布，將不同 API 像拼積木一樣連線',
      '原生支援 AI Agent、向量資料庫與工具調用（Tool Calling）節點',
      '支援自建伺服器（Self-hosted），工作流程與敏感資料可完全保留在公司內部',
      '內建數百種預裝服務整合（Gmail, Slack, PostgreSQL, Notion, GitHub）'
    ],
    learningCurve: '中等門檻',
    installationNeeded: '需安裝桌面軟體',
    precautions: '建置複雜工作流程需要對 HTTP 請求與 JSON 資料結構有基礎概念，需做好權限安全隔離。',
    officialLink: 'https://n8n.io',
    iconName: 'Workflow'
  },
  {
    id: 'lm-studio',
    name: 'LM Studio',
    category: 'local',
    tagline: '在個人電腦本機離線探索、下載與運行開源大語言模型的桌面工具',
    purpose: '完全離線斷網運行 AI、保護極端機密資料、測試不同開源模型架構與量化版本',
    targetAudience: '重度注重隱私的專業人士、法規敏感企業、本機 AI 開發者、硬體硬核玩家',
    keyCapabilities: [
      '單擊搜尋並下載 Hugging Face 上的各類 GGUF 開源模型',
      '完全在本機離線執行，資料封包不通過任何對外網路',
      '支援硬體加速（Apple Silicon Metal / NVIDIA CUDA / AMD ROCm）',
      '提供相容 OpenAI 格式的本機伺服器端點（Local Server）供其他程式呼叫'
    ],
    learningCurve: '中等門檻',
    installationNeeded: '需安裝桌面軟體',
    precautions: '模型運作速度受個人電腦的 RAM/VRAM 與顯卡性能決定，較小參數模型在專業複雜推理上可能弱於雲端頂規模型。',
    officialLink: 'https://lmstudio.ai',
    iconName: 'HardDrive'
  },
  {
    id: 'mermaid',
    name: 'Mermaid',
    category: 'diagram',
    tagline: '以純文字語法驅動的代碼化圖表生成工具',
    purpose: '快速繪製流程圖、序列圖、甘特圖、狀態機與類別圖，免除手動排版痛苦',
    targetAudience: '系統架構師、技術文件撰寫者、專案經理、筆記愛好者',
    keyCapabilities: [
      '使用直覺簡約的文字標記（如 A --> B）定義步驟與關係',
      '軟體自動依據演算法計算最佳佈局與箭頭指向，不再手動對齊',
      '原生支援在 GitHub、Notion、Obsidian 等 Markdown 筆記中即時渲染',
      '易於納入版本控制（Git），修改記錄一目了然'
    ],
    learningCurve: '簡單上手',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '適合邏輯與關係清晰的結構圖表；若需要像素級完全自由拖曳的藝術插畫，建議搭配向量設計軟體。',
    officialLink: 'https://mermaid.live',
    iconName: 'GitBranch'
  },
  {
    id: 'drawio',
    name: 'draw.io',
    category: 'diagram',
    tagline: '免費開源、靈活直覺的專業向量繪圖與架構設計軟體',
    purpose: '繪製專業工程架構圖、網路拓撲圖、UI 線框圖、業務流程手動美化',
    targetAudience: '工程師、產品經理、顧問、企業簡報製作者',
    keyCapabilities: [
      '完全免費無廣告，支援雲端與離線桌面版',
      '支援匯入 Mermaid 語法自動生成圖形並進一步拖拉微調',
      '提供龐大的圖示庫（AWS, GCP, Azure, Cisco, 流程圖標準符號）',
      '可儲存於 Google Drive、OneDrive 或直接存在本機'
    ],
    learningCurve: '簡單上手',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '當圖表元件數量達到上百個時，若手動調整排版需留意整體線條整潔度。',
    officialLink: 'https://app.diagrams.net',
    iconName: 'PenTool'
  },
  {
    id: 'notion',
    name: 'Notion & Notion AI',
    category: 'knowledge',
    tagline: '模組化筆記、知識庫與整合 AI 寫作專案管理協同工作台',
    purpose: '個人數位筆記、企業內部 Wiki 知識庫建立、專案看板進度追蹤、文件自動摘要',
    targetAudience: '知識工作者、跨領域團隊、個人生產力追求者、自由工作者',
    keyCapabilities: [
      '區塊（Block）式靈活自由排版，輕鬆建立資料庫與多重視圖',
      '內建 Notion AI，支援原地摘要、擴寫文案、翻譯及自訂提示',
      '強大的關聯資料庫（Relation & Rollup）可構建專案進度追蹤系統',
      '原生支援 Markdown、Mermaid 與程式碼高亮'
    ],
    learningCurve: '簡單上手',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '進階的資料庫函式與多層關聯需花時間熟悉；AI 功能超出一定使用量可能需要訂閱方案。',
    officialLink: 'https://www.notion.so',
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'poe',
    name: 'POE (Platform for Open Exploration)',
    category: 'text',
    tagline: '由 Quora 推出的多模型聚合平台與自訂機器人社群',
    purpose: '在同一介面橫向比對不同 AI 模型回答（Claude, GPT, Gemini, Llama 等）、建立專屬指令 Bot',
    targetAudience: '想一口氣體驗多種模型的新手、提示詞工程師、跨模型評測者',
    keyCapabilities: [
      '一個帳號無縫切換全球主流大語言模型與生圖模型',
      '方便製作自己的分享型 Prompt Bot，可設定系統提示詞與知識庫',
      '支援行動裝置 App 與電腦網頁端同步對話'
    ],
    learningCurve: '入門極易',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '不同頂級模型會消耗不同的點數額度，免費帳號每日有計算點數上限。',
    officialLink: 'https://poe.com',
    iconName: 'Boxes'
  },
  {
    id: 'openevidence',
    name: 'OpenEvidence',
    category: 'knowledge',
    tagline: '專為醫學與專業臨床決策設計的高信度嚴謹文獻 AI 搜尋引擎',
    purpose: '臨床醫學問題查詢、同行評審文獻檢索、醫療實證資料精準溯源',
    targetAudience: '醫師、護理人員、醫學生、臨床研究員、生技專業從業者',
    keyCapabilities: [
      '以 PubMed 等權威同行評審醫學文獻作為回答唯一依據',
      '每項醫療論點精確對齊臨床試驗與醫學指引出處',
      '專為消除醫療領域的 AI 幻覺而設計'
    ],
    learningCurve: '簡單上手',
    installationNeeded: '免安裝（瀏覽器直接用）',
    precautions: '專屬醫療專業領域；任何產出僅供專業人士參考，不能取代合格醫師之實體診斷與處方。',
    officialLink: 'https://www.openevidence.com',
    iconName: 'Activity'
  },
  {
    id: 'opencode-and-mcp',
    name: 'OpenCode & MCP',
    category: 'development',
    tagline: '開放模型上下文協議與開源代碼智慧生態',
    purpose: '讓 AI 代理安全標準化地存取本地檔案系統、Git 代碼倉庫、API 與企業內部資料庫',
    targetAudience: '軟體開發者、資深系統架構師、開源技術探險家',
    keyCapabilities: [
      '統一標準接口，使 AI 工具調用不再綁定單一封閉廠商',
      '支援模型自主閱讀本地代碼並執行安全授權的單元測試',
      '推動跨平台工具互操作性（Interoperability）'
    ],
    learningCurve: '進階配置',
    installationNeeded: '本機環境部署',
    precautions: '涉及系統權限授予與代碼執行環境，需要謹慎配置權限沙盒以防止非預期系統操作。',
    iconName: 'Cpu'
  }
];
