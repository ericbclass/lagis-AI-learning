import { LevelData } from '../types';

export const COURSES: LevelData[] = [
  {
    id: 0,
    slug: 'what-is-ai',
    title: 'Level 0：AI 是什麼？',
    subtitle: '完全新手也能懂的 AI 本質、能力邊界與搜尋差異',
    category: 'foundation',
    estimatedMinutes: 8,
    step1Think: {
      question: '想像一下：主管今天突然塞給你一份「100 頁的跨部門年度營運報告 PDF」，限你在 20 分鐘內找出「去年第四季哪些料件延遲」並寫成摘要，你會怎麼做？',
      options: [
        {
          id: 'manual',
          label: 'A. 硬著頭皮從第 1 頁快速翻到第 100 頁，眼睛看到脫窗。',
          reflection: '耗時又費力，20 分鐘內極高機率看漏關鍵段落，且身心俱疲。'
        },
        {
          id: 'search',
          label: 'B. 打開 PDF 按 Ctrl+F 搜尋「延遲」關鍵字。',
          reflection: '比人工翻閱快，但若報告用詞是「交期展延」、「排程落後」或「缺料等待」，關鍵字搜尋就會全部漏掉！'
        },
        {
          id: 'ai',
          label: 'C. 把文件提供給 AI，請它分析內容並列出延遲原因與清單。',
          reflection: 'AI 能理解「語意」而非死板的字串！它會辨識交期受阻、交件滯後等同義情境，數秒內整理成表格。'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        'AI 是什麼：它不是有自由意志的真人，而是一套經過超大量文字訓練的「超級助理」，核心擅長預測與理解人類語言。',
        'ChatGPT 是什麼：由 OpenAI 開發的對話式 AI 介面，讓你像跟真人同事傳訊息一樣，直接用中文對話。',
        'AI 可以做什麼：擅長摘要長文、翻譯多國語言、整理雜亂表格、重寫修飾文句、提供多角度點子。',
        'AI 不會什麼：AI 沒有真實情感、沒有主動知覺，也不保證提供 100% 絕對真實事實（可能產生「幻覺」現象）。',
        '為什麼 AI 會答錯：它是根據機率接續最合理的字詞，而非翻閱一本不可撼動的絕對字典；遇到它沒學過或模稜兩可的問題時，可能會一本正經地胡說八道。',
        'AI 與 Google 搜尋的不同：Google 搜尋是「幫你找到有這幾組關鍵字的網頁連結」；AI 是「讀完相關知識後，直接綜合歸納回答你的問題」。'
      ],
      beginnerFriendlyNotes: [
        '你可以把 AI 想像成一個「讀過全世界圖書館、但記憶偶爾會打結」的超高速實習生。',
        '實習生做事非常勤快，但需要你給出清晰的指令與資料邊界，重要數字務必由人做最後查證。'
      ],
      keyTakeaway: 'AI 是「文字語意加速器」，不是算命仙。把它當成能幹的高速助理，給它明確任務，並保留人類的驗證判斷！'
    },
    step3Example: {
      title: '日常真實情境對照',
      scenario: '想要快速整理客戶會議記錄裡的待辦事項',
      badApproach: {
        title: '傳統作法（人工耗時）',
        content: '花 1 小時逐字重聽 60 分鐘錄音，邊聽邊暫停手打筆記，常常漏聽負責人。',
        whyBad: '重複性低效勞動，浪費寶貴專注力。'
      },
      goodApproach: {
        title: 'AI 協作作法（語意提煉）',
        content: '將逐字稿複製給 AI：「請從這份會議內容，整理出『待辦事項』、『負責人』與『完成截止日』三欄表格。」',
        whyGood: '15 秒內完成結構化表格，你只需花 2 分鐘核對重點與人名！'
      },
      insight: 'AI 解決的核心問題：將非結構化的巨量文字，迅速轉化為井井有條的行動資訊。'
    },
    step4Interactive: {
      instructions: '體驗「100 頁資料整理對決」：點選不同處理模式，直觀感受傳統人工、關鍵字搜尋與 AI 語意理解的速度與漏失率！',
      taskTitle: '資料處理效率實驗室'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '理解 AI 與關鍵字搜尋的本質差別',
          goodPoint: '掌握了 AI 具有同義詞與語意脈絡推論能力。',
          improvePoint: '記住遇到需要「精確找某一條法規編號」時，Google 搜尋依然不可或缺。'
        },
        {
          item: '認識 AI「幻覺」風險',
          goodPoint: '知道 AI 會講錯話，不再盲目把 AI 產出當作唯一真理。',
          improvePoint: '關鍵決策時，應養成要求 AI 提供「資料出處依據」的好習慣。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q0-1',
        question: '關於 AI 與 Google 搜尋的比較，以下哪一個描述最正確？',
        options: [
          {
            id: 'a',
            text: 'Google 搜尋會幫我讀完全部網頁並寫好中文報告，AI 只能吐出一堆藍色超連結。',
            isCorrect: false,
            explanation: '剛好相反！傳統 Google 搜尋主要是給出網頁連結清單，而生成式 AI 才是直接幫你彙整輸出答案。'
          },
          {
            id: 'b',
            text: 'AI 是透過語意理解與機率生成直接回答問題；Google 搜尋則是比對關鍵字提供來源網址。',
            isCorrect: true,
            explanation: '完全正確！這正是 AI 能夠大幅省下你手動點開十幾個網頁閱讀時間的原因。'
          },
          {
            id: 'c',
            text: 'AI 永遠不會給出錯誤資訊，所以不用查證。',
            isCorrect: false,
            explanation: '錯誤！AI 有「幻覺」機率，重要數據或公司機密務必由人類複核。'
          }
        ]
      },
      {
        id: 'q0-2',
        question: '當 AI「一本正經地回答了錯誤的歷史日期或錯誤數字」時，這是什麼現象？',
        options: [
          {
            id: 'a',
            text: 'AI 故意在惡作劇整你。',
            isCorrect: false,
            explanation: 'AI 並沒有情緒或惡作劇意識，它只是數學機率模型。'
          },
          {
            id: 'b',
            text: 'AI 的「幻覺（Hallucination）」現象，它是依字詞機率推測接話，而非理解真正物理事實。',
            isCorrect: true,
            explanation: '答對了！這就是專業術語中的 AI 幻覺，新手一定要牢記「重要的事實要驗證」。'
          },
          {
            id: 'c',
            text: '電腦中毒了，必須馬上重灌。',
            isCorrect: false,
            explanation: '不是中毒，這是目前大型語言模型在機率預測時的先天特性。'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    slug: 'first-ai-prompt',
    title: 'Level 1：第一次使用 AI',
    subtitle: '告別無效指令！學會跟 AI 溝通的底層魔法：什麼是 Prompt',
    category: 'prompt',
    estimatedMinutes: 10,
    step1Think: {
      question: '如果你向一位剛到職的助理說：「幫我做報告。」助理臉上的表情會是什麼？',
      options: [
        {
          id: 'confused',
          label: 'A. 滿臉問號：「什麼主題？給誰看的？要幾頁？幾點前要？」',
          reflection: '完全沒錯！人類同事聽不懂，AI 也一樣聽不懂你的心靈感應。'
        },
        {
          id: 'psychic',
          label: 'B. 點頭如搗蒜，因為他有讀心術知道你老闆喜歡什麼排版。',
          reflection: '世界上沒有讀心術！含糊的輸入，只會得到平庸、泛泛之論的罐頭垃圾。'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        '什麼是 Prompt（提示詞）：Prompt 就是你輸入給 AI 的任何指令、背景資料或對話文字。',
        '怎麼跟 AI 說話：不要把 AI 當關鍵字搜尋框，要把 AI 當成「剛進公司很聰明、但不知道你背景」的新人助理。',
        '一般問法 vs 好的 Prompt：一般問法只有「動作」，例如「寫信」；好的 Prompt 包含「目的、對象、語氣、內容重點與格式」。',
        '為什麼同件事不同 Prompt 結果差很多：AI 的思考是順著你的框架走的。框架愈清晰，產出的命中率愈接近 100%。'
      ],
      beginnerFriendlyNotes: [
        '黃金公式口訣：【角色】+【目的】+【資料/背景】+【格式限制】。',
        '例如加上一句「請以專業主管角度、列點 3 點回覆」，產出品質直接提升 10 倍！'
      ],
      keyTakeaway: 'Garbage in, Garbage out（垃圾進，垃圾出）。想要好答案，先給好指令！'
    },
    step3Example: {
      title: 'Prompt 對比大改造',
      scenario: '想要向主管說明目前專案進度落後的情況',
      badApproach: {
        title: '❌ 一般問法（含糊不清）',
        content: '「幫我寫一封專案進度落後的信。」',
        whyBad: 'AI 不知道是什麼專案、為什麼落後、補救方案是什麼，只能寫出空洞的套版信件。'
      },
      goodApproach: {
        title: '✅ 專業 Prompt（結構明確）',
        content: '「請扮演資深專案經理。我需要寫一封 200 字以內的進度回報信給技術總監。現況：因供應商晶片延遲 3 天，導致原定週五的測試延至下週二。補救措施：已安排外包團隊週末加班驗收。請使用專業、承擔責任且條理分明的語氣。」',
        whyGood: '角色、受眾、字數、原因、解決方案一應俱全，AI 寫出來的信直接能寄出！'
      },
      insight: '把你的情境交代清楚，AI 就能幫你把 30 分鐘的苦惱縮短為 30 秒的潤飾。'
    },
    step4Interactive: {
      instructions: '來玩「Prompt 改造遊戲」！原始問題只有可憐的「幫我做報告」。請逐一補充【目的】、【對象】、【格式】與【限制】，親眼見證弱 Prompt 變身為頂級黃金指令！',
      taskTitle: 'Prompt 改造遊戲機'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '是否提供了明確的目的與受眾',
          goodPoint: '告訴 AI 報告是給誰看，能決定產出語言的專業度與篇幅深淺。',
          improvePoint: '如果忘了指明閱讀對象，AI 可能會使用對小學生或對學術專家的非預期語調。'
        },
        {
          item: '是否給出了具體限制條件',
          goodPoint: '規範字數（如 300 字內）或格式（如表格、列點），能防止 AI 無休止冗長廢話。',
          improvePoint: '永遠不要害怕限制 AI，限制愈多，產出往往愈精準！'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q1-1',
        question: '如果想要讓 AI 寫出最貼近你期望的商業文案，以下哪一個提示詞效果最好？',
        options: [
          {
            id: 'a',
            text: '「寫產品介紹」',
            isCorrect: false,
            explanation: '太過簡略，AI 不知道產品賣給誰、賣點是什麼，只會給出通用模板。'
          },
          {
            id: 'b',
            text: '「好用的耳機產品介紹，多寫一點」',
            isCorrect: false,
            explanation: '「多寫一點」是模糊需求，AI 通常會擴充成大量套話，缺乏行銷說服力。'
          },
          {
            id: 'c',
            text: '「你是一位 3C 行銷文案專家，請針對通勤上班族，撰寫一款降噪無線耳機的社群貼文。強調主動降噪 98%、續航 40 小時。格式：吸睛開頭標題 + 3 個痛點解析 + 行動呼籲，總字數 250 字內。」',
            isCorrect: true,
            explanation: '滿分！包含了角色、受眾、核心規格、結構格式與字數限制，AI 能一次命中。'
          }
        ]
      },
      {
        id: 'q1-2',
        question: '如果 AI 第一次產出的回答不符合你的預期，最好的做法是？',
        options: [
          {
            id: 'a',
            text: '立刻放棄，認定 AI 根本不能用。',
            isCorrect: false,
            explanation: '別急著放棄！跟真人協作一樣，持續追問和調整才是正常流程。'
          },
          {
            id: 'b',
            text: '在同一對話串中，指出「哪裡寫得好、哪裡需要調整」，例如：「第二點請改成條列式，並縮短為 50 字。」',
            isCorrect: true,
            explanation: '正確！對話式 AI 具備上下文記憶能力，透過多輪疊代溝通能產出最完美的成果。'
          },
          {
            id: 'c',
            text: '重新開啟全新對話，再打一模一樣的一句話賭看看。',
            isCorrect: false,
            explanation: '輸入一樣的含糊指令，只會得到類似的含糊成果。'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'prompt-framework-four-elements',
    title: 'Level 2：Prompt 基礎：現況 → 目標 → 障礙 → 限制',
    subtitle: '職場殺手級提示詞心法！掌握「現況、目標、障礙、限制」四維架構',
    category: 'prompt',
    estimatedMinutes: 10,
    step1Think: {
      question: '你在工作中遇到問題找主管或前輩求助時，哪種表達方式最容易得到精確的支援？',
      options: [
        {
          id: 'vague',
          label: 'A. 「專案好亂，我不知道怎麼辦。」',
          reflection: '前輩只能苦笑，因為資訊太少，根本不知道從何幫起。'
        },
        {
          id: 'structured',
          label: 'B. 「目前手上累積了 50 筆料件進度（現況），週五前必須產出延遲預警清單（目標），但各廠商格式完全不同難以整理（障礙），且公司規定不能把客戶報價單放上去（限制）。」',
          reflection: '無懈可擊！任何人（包含 AI）都能立刻精準提供解決解方！'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        '現況（Current State）：目前你手上有什麼資料？例如「我有很多 Excel 雜亂的料件資料」。',
        '目標（Target Goal）：你希望最終達成什麼產出？例如「想知道哪些專案或料件面臨延遲風險」。',
        '障礙（Bottleneck/Pain）：你目前卡在哪裡？例如「欄位名稱不統一、有重複編號，不知道怎麼整理」。',
        '限制（Constraints）：有什麼絕對不能違反的邊界？例如「不能提供公司客戶機密資料，且結果要能在 Excel 直接使用公式」。',
        '即時合成：將這四個要素組裝起來，就是世界上最清晰、最容易被 AI 正確執行的提示詞架構。'
      ],
      beginnerFriendlyNotes: [
        '背這 8 個字：【現況、目標、障礙、限制】。',
        '不需要華麗的修辭，只要把這四個欄位填滿，你的 Prompt 水平就已經超越 90% 的普通使用者。'
      ],
      keyTakeaway: '清晰的思考＝清晰的 Prompt。只要定義好這四要素，AI 就能化身為你的私人專案顧問！'
    },
    step3Example: {
      title: '專案管理實戰範例',
      scenario: '面對龐雜混亂的零件研發進度追蹤',
      badApproach: {
        title: '❌ 缺乏結構的提問',
        content: '「我有 Excel 資料，幫我抓延遲。」',
        whyBad: 'AI 不知道資料長相、不知道何謂「延遲」定義、也不知道該輸出什麼形式。'
      },
      goodApproach: {
        title: '✅ 四維架構完整呈現',
        content: '【現況】：我有 100 筆新開模零件進度表，欄位包含料號、預計試模日、實際試模日、驗收狀態。\n【目標】：篩選出落後超過 7 天的高風險零件，並依製造廠商分類。\n【障礙】：日期格式混雜（有的寫 2026/03，有的寫 3月），且缺少自動天數計算欄位。\n【限制】：請勿變更原始料號編碼，請提供可直接貼回 Excel 的繁體中文表格。',
        whyGood: 'AI 能一眼抓住處理邏輯，連資料格式清洗的步驟都能主動幫你寫好 Python 或 Excel 公式！'
      },
      insight: '把問題拆解成這四個維度，本身就是一種高水準的職場專案思考。'
    },
    step4Interactive: {
      instructions: '使用互動表單填寫【現況】、【目標】、【障礙】、【限制】。你可以點選範例快速載入，也可以自行輸入你的真實工作情境，系統將即時組裝成黃金 Prompt！',
      taskTitle: '四維提示詞互動組裝機'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '限制條件是否明確（避免機密外流或格式錯亂）',
          goodPoint: '在限制中清楚註明了防範機密與輸出標準。',
          improvePoint: '若未設定限制，AI 可能會自由發揮創造出不相容的格式。'
        },
        {
          item: '目標是否具有可衡量性（Measurable）',
          goodPoint: '目標清楚包含具體清單、表格或產出樣態。',
          improvePoint: '避免使用「讓工作變快」等籠統詞彙，改用「產出 3 欄式摘要清單」。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q2-1',
        question: '在「現況 → 目標 → 障礙 → 限制」架構中，哪一項最能保護公司資料安全？',
        options: [
          {
            id: 'a',
            text: '現況',
            isCorrect: false,
            explanation: '現況主要是描述擁有的素材與目前情境。'
          },
          {
            id: 'b',
            text: '限制（Constraints）',
            isCorrect: true,
            explanation: '沒錯！「限制」是劃定紅線的關鍵，例如：不可公開機密、不可捏造數據、字數限制等。'
          },
          {
            id: 'c',
            text: '障礙',
            isCorrect: false,
            explanation: '障礙是說明目前的困難點，並非規範規則。'
          }
        ]
      },
      {
        id: 'q2-2',
        question: '以下哪一句話最適合填在「障礙」欄位中？',
        options: [
          {
            id: 'a',
            text: '「請給我一份 Word 檔。」',
            isCorrect: false,
            explanation: '這是「目標」或「格式限制」。'
          },
          {
            id: 'b',
            text: '「資料量太大高達 2000 行，且欄位命名不一致，人工手動比對太慢。」',
            isCorrect: true,
            explanation: '非常正確！這正是阻礙你前進的痛點，AI 會針對此障礙提供清洗與自動化策略。'
          },
          {
            id: 'c',
            text: '「我是研發部的工程師。」',
            isCorrect: false,
            explanation: '這是「現況」或「角色背景」。'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'how-to-choose-ai-tools',
    title: 'Level 3：AI 工具怎麼選？',
    subtitle: '別急著背工具名稱！掌握「先定義目標，再選工具」的決策思維',
    category: 'tools',
    estimatedMinutes: 9,
    step1Think: {
      question: '木工師傅要做一張精緻的實木餐桌，他會把工具箱裡每一支鋸子、刨刀、電鑽都拿出來輪流用一遍嗎？',
      options: [
        {
          id: 'no',
          label: 'A. 當然不會！要切木頭拿鋸子，要鑽孔拿電鑽。根據當下步驟拿對應工具。',
          reflection: '一語中的！AI 工具也是如此，不要看到新工具就焦慮，先問自己「今天想完成什麼事情」。'
        },
        {
          id: 'yes',
          label: 'B. 會，因為收集越多工具代表越厲害。',
          reflection: '工具不用多，能解決問題才是真本事。工具崇拜只會帶來資訊焦慮。'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        '先定義目標，再選工具：世界上沒有任何一個 AI 能完美搞定全天下所有事。',
        '情境 1：我要整理很多既有文件／PDF／影片？ → 選 NotebookLM。',
        '情境 2：我要自己做個互動小網頁或功能 Prototype？ → 選 Google AI Studio。',
        '情境 3：我要把文案快速變成工作影片／短影音？ → 選 Google Vids。',
        '情境 4：我要把不同軟體（如 Email、試算表、Slack）串聯起來自動化？ → 選 n8n。',
        '情境 5：我有公司高度機密，絕對不能把資料傳到外網雲端？ → 選 LM Studio（地端本機 AI）。',
        '情境 6：我要把邏輯思考畫成乾淨的架構流程圖？ → 選 Mermaid 或 draw.io。'
      ],
      beginnerFriendlyNotes: [
        '記住：工具是隨潮流更迭的，但「情境需求判斷力」是一輩子的資產。',
        '當你清楚自己要什麼，只要查「我要做 X，推薦什麼工具」，就能秒速找到對的武器。'
      ],
      keyTakeaway: '工具只是手段，問題解決才是目的。先定靶心（目標），再挑弓箭（AI 工具）！'
    },
    step3Example: {
      title: '典型選擇誤區 vs 正確決策',
      scenario: '公司有 30 份內部設備操作手冊，員工想要一個專屬問答機器人',
      badApproach: {
        title: '❌ 工具誤用（硬套不合適的工具）',
        content: '直接打開免費版 ChatGPT，手動把 30 本手冊逐一貼進對話框，結果超過字數上限被截斷，還可能把機密回傳雲端訓練。',
        whyBad: '工具定位錯誤，費時且有合規與長文本限制風險。'
      },
      goodApproach: {
        title: '✅ 正確情境配對',
        content: '使用 NotebookLM（專門針對來源文件進行高精準研讀與引用回答）或於本機透過 LM Studio 搭建內部專屬檢索庫。',
        whyGood: '精準鎖定在專屬資料範圍內回答，不會胡亂捏造，且每句話都有來源註腳可點擊查證！'
      },
      insight: '選對工具，一分鐘解決；選錯工具，折騰三天還搞砸。'
    },
    step4Interactive: {
      instructions: '動手玩「情境工具配對決策樹」：點擊不同的日常工作情境，即時揭曉最適合的 AI 工具，並深度解析背後的選擇理由！',
      taskTitle: '情境工具智慧配對盤'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '是否根據資料敏感度與隱私決定雲端或地端',
          goodPoint: '能區分機密資料需考慮本地運行或合規企業方案。',
          improvePoint: '如果牽涉極密專利或未上市產品，切勿隨意丟進普通公開雲端服務。'
        },
        {
          item: '是否根據產出型態（文字/視覺/自動化）選型',
          goodPoint: '準確將任務分類為「知識整理」、「視覺化」或「排程串接」。',
          improvePoint: '不要試圖用純文字對話框去手動做自動化定時觸發任務，應善用像 n8n 這樣的流程工具。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q3-1',
        question: '如果主管要求你「將 10 部內部教育訓練 YouTube 影片與 5 份 PDF 講義整理成一份重點大綱與常見問答」，哪一個工具最合適？',
        options: [
          {
            id: 'a',
            text: 'Mermaid',
            isCorrect: false,
            explanation: 'Mermaid 是用文字繪製流程圖的工具，不是文件閱讀工具。'
          },
          {
            id: 'b',
            text: 'NotebookLM',
            isCorrect: true,
            explanation: '答對了！NotebookLM 支援匯入 YouTube 連結、PDF、Google Docs，並專注以這些材料進行筆記與問答。'
          },
          {
            id: 'c',
            text: 'LM Studio',
            isCorrect: false,
            explanation: 'LM Studio 是本地執行模型的工具，若沒有自行建置 RAG 系統，不容易直接吃 YouTube 連結。'
          }
        ]
      },
      {
        id: 'q3-2',
        question: '如果你想在完全「不上網、不連外網、電腦斷網」的情況下處理機密文字，你應該選擇？',
        options: [
          {
            id: 'a',
            text: 'Google AI Studio',
            isCorrect: false,
            explanation: 'Google AI Studio 是雲端開發者平台，需要連線到 Google 雲端。'
          },
          {
            id: 'b',
            text: '地端本機 AI 工具（如 LM Studio 搭配本機開源模型）',
            isCorrect: true,
            explanation: '沒錯！LM Studio 可以將模型下載到你的電腦硬體上，在完全離線斷網下運行，封包不出本機。'
          },
          {
            id: 'c',
            text: 'Google Vids',
            isCorrect: false,
            explanation: 'Google Vids 是雲端影片製作工具。'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: 'google-ai-studio',
    title: 'Level 4：Google AI Studio 實戰',
    subtitle: '完全新手也能做網頁與 APP！從功能需求到迭代修改與安全發布',
    category: 'development',
    estimatedMinutes: 12,
    step1Think: {
      question: '過去如果想做一個「部門專案進度追蹤網頁」，通常需要找誰？要花多久？',
      options: [
        {
          id: 'tradition',
          label: 'A. 找資訊部門（IT）排單開規格，可能等上 3 到 6 個月，甚至被排在很後面。',
          reflection: '這正是許多非工程師同仁的無奈！傳統軟體開發門檻高、溝通鏈條極長。'
        },
        {
          id: 'ai-studio',
          label: 'B. 只要學會把「功能需求」講清楚，直接讓 AI 幫你寫出完整可操作的網頁 Prototype！',
          reflection: '這就是 Google AI Studio 的革命性能力！只要有想法，你就是自己的產品經理（PM）。'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        'Google AI Studio 是什麼：Google 官方提供的強大 AI 開發與實驗平台，具備極強的程式碼生成、長文本與多模態能力。',
        'AI Studio 可以做什麼：透過自然語言提示，直接生成完整的網頁應用程式、資料分析儀表板、互動小工具。',
        '如何描述自己想做的 APP：不需要寫任何 code！只需像產品經理一樣描述：問題是什麼、給誰用、有什麼功能、輸入與輸出。',
        '什麼是功能需求：例如「要有能搜尋料號的搜尋框」、「點擊按鈕後用紅色標記延遲項目」、「要有篩選器」。',
        '如何持續修改（Iterate）：不要期望一次做到完美！先產出初版，再用對話一句一句修正（例如「請把按鈕改到右上角，並加上匯出 Excel 功能」）。',
        'Share / Publish 的差異與資安：Share 通常是分享給內部協作者測試；Publish 是發布到公開網路。切記：公開發布前，嚴禁把公司未公開金鑰、機密資料寫在前端程式碼中！'
      ],
      beginnerFriendlyNotes: [
        '你現在的身分不是「打代碼的工程師」，而是「指揮工程師的產品主管」。',
        '你的中文描述得越具體、步驟越清楚，AI Studio 產出的 App 就越好用！'
      ],
      keyTakeaway: '在 AI 時代，想法與規格力才是核心競爭力。寫出清晰的「需求清單」，AI 就是你的專屬工程團隊！'
    },
    step3Example: {
      title: 'APP 需求描述範例對照',
      scenario: '想要做一個讓工廠同仁快速查詢「試模委託單」狀態的手機版網頁',
      badApproach: {
        title: '❌ 模糊空洞的需求',
        content: '「幫我做一個查模具的網頁，要好用、現代化。」',
        whyBad: 'AI 只能憑空想像，做出來十之八九不符合工廠現場作業流程。'
      },
      goodApproach: {
        title: '✅ 專業規格化 Prompt',
        content: '「請製作一個單頁式網頁應用。核心目標：供品保與生管查詢『試模委託單』。\n1. 介面頂部有搜尋列，支援輸入【模具編號】或【料號】。\n2. 中間以卡片清單顯示：模具代碼、試模日期、當前狀態（待驗收/合格/需修改，用不同顏色標示）。\n3. 支援一鍵點擊卡片展開查看【檢驗項目與尺寸公差】。\n4. 純前端運作，提供乾淨的手機響應式排版。」',
        whyGood: '目標、欄位、狀態顏色、互動行為定義得清清楚楚，AI 一次就能寫出能用的原型！'
      },
      insight: '把畫面拆解成「頂部有什麼、中間放什麼、點擊會怎樣」，就是高品質軟體規格書。'
    },
    step4Interactive: {
      instructions: '動手使用「APP 需求產生器」！只需回答 5 個通俗問題，系統將自動為你生成一份可直接貼到 Google AI Studio 的高規格 Prompt，並能即時預覽虛擬介面原型！',
      taskTitle: 'Google AI Studio APP 需求產生器'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '是否具備明確的輸入與輸出規格',
          goodPoint: '指定了使用者點什麼、輸入什麼，系統應給予什麼反饋。',
          improvePoint: '如果缺少輸入規格，生成的 App 往往只有靜態展示，缺乏實用互動。'
        },
        {
          item: '是否考慮發布時的資料安全（Share / Publish）',
          goodPoint: '知道前端網頁所有人都能按 F12 檢視原始碼，不會把密碼金鑰寫在畫面上。',
          improvePoint: '任何未經授權的內部敏感資料，切勿發布到公開 URL。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q4-1',
        question: '使用 Google AI Studio 請 AI 產生網頁應用時，若成果「排版不夠好看」或「少了一個按鈕」，你該怎麼辦？',
        options: [
          {
            id: 'a',
            text: '從頭到尾刪掉重來。',
            isCorrect: false,
            explanation: '不需要重來！AI 支援增量修改。'
          },
          {
            id: 'b',
            text: '在同一個專案對話中，精準下達微調指令，例如：「請在列表右上方新增一個『匯出 CSV』按鈕，並將表格邊框改為淡灰色。」',
            isCorrect: true,
            explanation: '正確！這就是「持續迭代（Iterate）」的開發流程，小步快跑微調最有效率。'
          },
          {
            id: 'c',
            text: '手動去改看不懂的 JavaScript 程式碼。',
            isCorrect: false,
            explanation: '新手不用硬啃程式碼，交給 AI 幫你重構與修改才是現代做法。'
          }
        ]
      },
      {
        id: 'q4-2',
        question: '關於 Google AI Studio 製作 App 的「Share（分享）/ Publish（發布）」，哪一項觀念最重要？',
        options: [
          {
            id: 'a',
            text: '只要發布到網路上，不管有沒有密碼，全世界都查不到任何程式內容。',
            isCorrect: false,
            explanation: '錯誤！瀏覽器端的程式碼完全是公開透明的。'
          },
          {
            id: 'b',
            text: '公開發布的網頁所有人都能看見，切勿把公司內部機密資料、個人隱私或未保護的 API Key 寫進去。',
            isCorrect: true,
            explanation: '滿分！資安意識是每位 AI 使用者的第一防線。'
          },
          {
            id: 'c',
            text: '發布後就永遠不能修改了。',
            isCorrect: false,
            explanation: '可以隨時重新構建與更新版本。'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: 'ai-video-generation',
    title: 'Level 5：AI 影片與短影音製作',
    subtitle: '告別漫長後製！Google Vids、分鏡腳本拆解與角色一致性秘訣',
    category: 'multimedia',
    estimatedMinutes: 10,
    step1Think: {
      question: '如果老闆要你下週做出一支 2 分鐘的「新產品特點宣傳影片」，傳統找專業外包影片團隊大概需要多少時間和預算？',
      options: [
        {
          id: 'expensive',
          label: 'A. 至少動輒數萬元新台幣，且需要腳本會議、拍攝、剪輯 2～4 週。',
          reflection: '確實如此！專業影像製作成本高昂，非大型專案很難常態化進行。'
        },
        {
          id: 'ai-speed',
          label: 'B. 透過 AI 工具與結構化腳本，半天內就能產出具有專業配音、字幕與畫面的雛形！',
          reflection: '這正是 AI 影像帶來的降維打擊！每個人都能以極低成本做出分鏡腳本與影片！'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        'AI 影片可以做什麼：自動產生影片大綱、分鏡旁白、合成拟真配音、自動配對版權素材或生成畫面。',
        'Google Vids：Google Workspace 推出的 AI 影片助理，能把 Google Docs 或簡報直接轉化為具有結構的分鏡影片。',
        '如何寫好影片腳本：不要寫長篇大論！好的影片必須拆解成「Scene 1（開場鉤子）→ Scene 2（痛點呈現）→ Scene 3（解方與亮點）→ Scene 4（行動呼籲 CTA）」。',
        '長影片拆成多個短腳本：長影音很難一次生成完美，把 3 分鐘拆解成 4～6 個 30 秒的短分鏡，分別產出再組裝，成功率最高。',
        '為什麼人物素材要固定：在多個鏡頭中，如果主角的臉、衣服、髮型不斷變換，觀眾會立刻出戲感到詭異。',
        '人物參考圖與三視圖：在生圖或生影片時，先產出該角色的「正視圖、側視圖、後視圖」或固定種子碼（Seed），作為後續鏡頭的一致性錨點。'
      ],
      beginnerFriendlyNotes: [
        '做影片最怕「頭重腳輕」。前 3 秒沒有抓住眼球，觀眾就滑走了！',
        '記住分鏡金律：每一幕（Scene）都只說一個核心重點，配上一句精練台詞與清楚的視覺描述。'
      ],
      keyTakeaway: '影片的靈魂不是特效，而是腳本結構。善用「分鏡拆解」與「三視圖固定」，AI 影片就不會崩壞！'
    },
    step3Example: {
      title: '短影音分鏡拆解示範',
      scenario: '推廣一款辦公室人體工學腰靠墊（目標長度：30 秒）',
      badApproach: {
        title: '❌ 缺乏分鏡的一大段文字',
        content: '「這是一個很好的腰靠墊，透氣又舒服，大家上班久坐都很痛，買了就不痛了，只要 899 元快來買。」',
        whyBad: '沒有視覺指示、沒有鏡頭切換節奏，AI 影片生成工具無法精準匹配畫面。'
      },
      goodApproach: {
        title: '✅ 專業分鏡腳本結構',
        content: '【Scene 1 (0-3s) 痛點勾引】：特寫上班族揉腰嘆氣的痛苦表情。旁白：「你今天上班又坐到腰酸背痛了嗎？」\n【Scene 2 (4-12s) 產品解方】：3D 慢動作旋轉呈現人體工學支撐弧度貼合脊椎。旁白：「全新高彈力雙背支撐，瞬間釋放脊椎壓力。」\n【Scene 3 (13-22s) 實測對比】：透氣網布特寫與微風穿過乾爽測試。旁白：「夏天久坐 8 小時也不悶熱。」\n【Scene 4 (23-30s) 行動呼籲】：辦公室主角微笑挺胸辦公，畫面顯示特惠購買連結。旁白：「立即點擊下方，給腰部應有的呵護。」',
        whyGood: '畫面描述、運鏡特寫、秒數、旁白精準對齊，工具可以直接吃這份規格渲染影片！'
      },
      insight: '把影片想像成連環漫畫，分格清楚，AI 就能幫你把每一格畫得活靈活現。'
    },
    step4Interactive: {
      instructions: '體驗「影片分鏡腳本產生器」！輸入主題、目標觀眾與目的，系統將自動為你生成 Scene 1 ~ Scene 4 的專業分鏡腳本，並提供「人物素材一致性三視圖」提示詞！',
      taskTitle: '短影音分鏡腳本與人物一致性工作台'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '腳本是否包含視覺指令（Visual）與對白旁白（Audio）',
          goodPoint: '聲畫對位清晰，讓 AI 清楚知道畫面該放什麼、聲音該說什麼。',
          improvePoint: '如果只有台詞沒有畫面描述，生成的影片往往會配上毫不相干的隨機背景。'
        },
        {
          item: '角色是否有明確的外觀描述特徵',
          goodPoint: '指定髮型、服裝配色、臉部特徵或使用三視圖參考。',
          improvePoint: '若未指定固定特徵，下一幕可能男主角的眼鏡就不見了或衣服換了顏色。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q5-1',
        question: '在製作多個鏡頭的 AI 角色影片時，為了避免「第一幕是短髮穿西裝，第二幕突然變成捲髮穿 T 恤」，最關鍵的做法是？',
        options: [
          {
            id: 'a',
            text: '完全不管它，觀眾看不出來。',
            isCorrect: false,
            explanation: '觀眾對人物臉孔極為敏感，瞬間就會發現穿幫。'
          },
          {
            id: 'b',
            text: '固定人物參考圖（例如三視圖）或固定特徵 Prompt 與種子碼，確保每幕使用相同的人物設定。',
            isCorrect: true,
            explanation: '答對了！這就是影視生成中最重要的「角色資產一致性（Consistency）」技巧。'
          },
          {
            id: 'c',
            text: '把影片全部縮小到看不清臉。',
            isCorrect: false,
            explanation: '這不是專業的解決方案。'
          }
        ]
      },
      {
        id: 'q5-2',
        question: '短影音（TikTok / Reels / Shorts）的前 3 秒鐘最重要的核心任務是什麼？',
        options: [
          {
            id: 'a',
            text: '詳細介紹公司創辦人與成立歷史。',
            isCorrect: false,
            explanation: '短影音節奏極快，冗長開場會讓用戶在一秒內滑走。'
          },
          {
            id: 'b',
            text: '丟出「鉤子（Hook）」抓住觀眾痛點或好奇心，阻止觀眾手指滑走。',
            isCorrect: true,
            explanation: '非常正確！前 3 秒黃金法則就是 Hook，直接切入觀眾最在乎的問題。'
          },
          {
            id: 'c',
            text: '播放 10 秒鐘的淡入黑畫面和版權聲明。',
            isCorrect: false,
            explanation: '黑畫面會直接被判定為無效或枯燥內容。'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    slug: 'notebooklm-grounding',
    title: 'Level 6：NotebookLM 專屬資料學習',
    subtitle: '告別 AI 幻覺！讓 AI 只根據「你提供的材料」讀書、問答與寫摘要',
    category: 'knowledge',
    estimatedMinutes: 9,
    step1Think: {
      question: '如果考試是「開卷考試」，規定所有答案都必須從桌上的指定講義找出來，考生還需要去猜測或胡說八道嗎？',
      options: [
        {
          id: 'grounded',
          label: 'A. 當然不需要！只要在講義裡精準翻到該頁，標註出處作答即可。',
          reflection: '太棒了！這正是 NotebookLM 的核心哲學——「資料依據（Grounding）」。'
        },
        {
          id: 'guess',
          label: 'B. 還是要靠直覺亂猜。',
          reflection: '亂猜就會考零分！以前的 AI 之所以會胡說，是因為它被逼著從整個網路的記憶中亂猜。'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        'NotebookLM 是什麼：Google 推出的專屬筆記與知識助理，它最大的特色是「把你提供的資料當成唯一學習教材」。',
        '核心機制：資料來源 → AI 閱讀研習 → 整理提煉 → 互動提問 → 產生摘要與大綱。',
        'AI 不一定要知道全天下：你不必期待 AI 天生懂你們公司的內部研發規格；你只要把 PDF、會議紀錄、Google Docs 或 YouTube 網址丟給它，它就瞬間變成這份文件的專家。',
        '來源錨點（Citations）：NotebookLM 每次回答都會附帶小小的數字上標 [1]、[2]，點擊就能直接跳到原始文件的精確段落，徹底告別虛假捏造！',
        '多來源整合：你可以同時丟進 10 份不同部門的報告，請它跨文件比對「工程部與業務部對該專案進度的說法有何矛盾」。'
      ],
      beginnerFriendlyNotes: [
        '想像 NotebookLM 是幫你啃下上百頁枯燥報告的「超級書僮」。',
        '你只要問它：「幫我抓出這五篇論文裡提到的三個共同研究限制」，它幾秒內就整理出附帶頁碼的對照表。'
      ],
      keyTakeaway: '想要 AI 不唬爛，就要給它專屬材料。NotebookLM 讓 AI 的每一句話都有憑有據！'
    },
    step3Example: {
      title: '專屬資料庫問答示範',
      scenario: '公司導入新版請假與加班規範手冊（長達 60 頁 PDF）',
      badApproach: {
        title: '❌ 問一般公開 ChatGPT',
        content: '「請問我們公司颱風天出勤有沒有加班費？」',
        whyBad: 'ChatGPT 根本沒看過你們公司的內部人事新規，只能回答台灣勞基法的通用法規，無法代表公司政策。'
      },
      goodApproach: {
        title: '✅ 放入 NotebookLM 提問',
        content: '上傳《2026年員工手冊.pdf》，提問：「請依據手冊第三章，說明颱風天非自願出勤的津貼計算方式，並指出頁碼出處。」',
        whyGood: '回答精確引用：「依據手冊第 28 頁 [1]，除當日全薪外，額外發放 1.5 倍特別出勤津貼與計程車報銷憑證。」完全零幻覺！'
      },
      insight: '把資料當成「錨」，AI 的回答就絕不會在浩瀚的網海中迷航。'
    },
    step4Interactive: {
      instructions: '動手操作「資料整理模擬器」！挑選模擬的會議逐字稿、研發規格書或 YouTube 來源，見證 AI 如何閱讀分析、產生精準引爆炸記、並提供具備段落錨點的解答！',
      taskTitle: 'NotebookLM 知識庫模擬實驗室'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '回答是否有標明資料來源依據（Source Anchor）',
          goodPoint: '每一項結論都能對應到上傳的特定文件與頁籤。',
          improvePoint: '如果 AI 回答了文件中完全沒寫的事，代表它超出了你的教材範圍，需要提醒它「僅依據提供文件回答」。'
        },
        {
          item: '是否具備多來源交叉比對能力',
          goodPoint: '能綜合多份文檔歸納出全局視角。',
          improvePoint: '上傳文件若有版本衝突（如 2024 版 vs 2026 版），需明確指定優先採納的年份。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q6-1',
        question: 'NotebookLM 與一般 ChatGPT 最顯著的不同點是什麼？',
        options: [
          {
            id: 'a',
            text: 'NotebookLM 會自己幫你打電話給客戶。',
            isCorrect: false,
            explanation: '沒有這項功能。'
          },
          {
            id: 'b',
            text: 'NotebookLM 專注在「你上傳的資料來源」中研讀與回答，並且每次回答都會附帶可查證的原文章節引用標籤。',
            isCorrect: true,
            explanation: '完全正確！這就是 Grounded AI 的強大之處，大幅杜絕 AI 幻覺。'
          },
          {
            id: 'c',
            text: 'NotebookLM 只能用英文聊天。',
            isCorrect: false,
            explanation: '支援包括繁體中文在內的多國語言。'
          }
        ]
      },
      {
        id: 'q6-2',
        question: '把 YouTube 影片網址貼進 NotebookLM 作為學習來源時，它是怎麼「看」影片的？',
        options: [
          {
            id: 'a',
            text: '它透過分析影片自動產生的逐字稿（Transcript）與語意內容來理解影片主旨。',
            isCorrect: true,
            explanation: '答對了！它會快速讀取影片的字幕逐字稿，幫你把 1 小時的演講在 10 秒內濃縮為核心筆記。'
          },
          {
            id: 'b',
            text: '它用肉眼把影片從頭到尾 1 倍速看完。',
            isCorrect: false,
            explanation: 'AI 是程式模型，不需要像人類一樣花 1 小時看畫面。'
          },
          {
            id: 'c',
            text: '它只看影片封面縮圖猜內容。',
            isCorrect: false,
            explanation: '不是只看縮圖，它能完整解析文字軌跡。'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    slug: 'mermaid-and-drawio',
    title: 'Level 7：Mermaid + draw.io 流程圖',
    subtitle: '不用滑鼠辛苦拉線！用「簡單文字描述」直接生成專業流程圖與架構圖',
    category: 'diagram',
    estimatedMinutes: 9,
    step1Think: {
      question: '用 Word 或 PowerPoint 畫流程圖時，最痛苦的事情是什麼？',
      options: [
        {
          id: 'align',
          label: 'A. 每次在中間多塞一個新步驟，後面 20 個方塊和箭頭就全部跑位，要重新對齊半小時。',
          reflection: '說中所有人的痛！傳統拖拉式圖表只要一改動，排版就大崩潰。'
        },
        {
          id: 'text-flow',
          label: 'B. 如果只要改兩行字，電腦就會自動把箭頭與方塊排整齊，那該有多好！',
          reflection: '這正是「代碼化圖表（Diagrams as Code）」的偉大發明！'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        'Mermaid 是什麼：一種用「純文字」描述圖表與關係的超簡單語法。',
        '核心邏輯：你只要寫 `A --> B`，電腦就自動幫你畫出「方塊 A 箭頭指向 方塊 B」！',
        '文字 → Mermaid → 流程圖 → draw.io 的工作流：先請 AI 把你的混亂思路轉成 Mermaid 文字，再貼到支援的預覽器（或匯入 draw.io）進一步微調上色。',
        '新手不必死背語法：只要讓 AI 知道「先有什麼步驟、遇到什麼條件要分流」，請 AI 輸出 Mermaid 代碼即可。',
        '適用場景：系統架構圖、專案審核流程、料件請購流程、研發試模狀態機。'
      ],
      beginnerFriendlyNotes: [
        '語法就像小學生畫連連看：`[送出請購單] --> {主管審核}`，花括號 `{}` 就是菱形判斷，方括號 `[]` 就是普通方塊。',
        '改圖就像改文字檔一樣快，再也不用為拉箭頭抓狂！'
      ],
      keyTakeaway: '讓文字定義關係，讓電腦搞定排版。Mermaid + draw.io 是現代職場最高效的作圖雙劍客！'
    },
    step3Example: {
      title: '請購審核流程示範',
      scenario: '將「請購單審批規則」變成清晰的流程圖',
      badApproach: {
        title: '❌ 手動拖拉圖形',
        content: '在簡報軟體裡手動繪製 6 個方塊，拉了 8 條容易歪掉的箭頭，花了 40 分鐘。',
        whyBad: '維護成本極高，主管說要加一個關卡時就得全部重排。'
      },
      goodApproach: {
        title: '✅ 只要給 AI 邏輯，產出 Mermaid',
        content: '```mermaid\ngraph TD\n    A[員工填寫請購單] --> B{金額是否大於 10 萬元?}\n    B -- 是 --> C[部門副總簽核]\n    B -- 否 --> D[直屬主管簽核]\n    C --> E[採購部發包]\n    D --> E\n```',
        whyGood: '這段文字直接丟進渲染器，瞬間變成漂亮的垂直流程圖，增刪節點只需改一行字！'
      },
      insight: '把繪圖降維成打字，你思考流程的速度會提升數倍。'
    },
    step4Interactive: {
      instructions: '體驗「Mermaid 即時流程圖轉換器」！修改左側的文字描述，右側即時向量渲染出生動的流程圖，並支援一鍵複製與匯出到 draw.io！',
      taskTitle: 'Mermaid 文字轉流程圖即時畫布'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '流程是否有明確的起點與終點',
          goodPoint: '流程邏輯閉環，沒有懸空的死胡同節點。',
          improvePoint: '如果條件分流只有「是」的走向，忘了處理「否」的退回機制，圖表就不夠完整。'
        },
        {
          item: '符號語意是否標準（矩形做動作，菱形做判斷）',
          goodPoint: '使用標準的括號形狀，方便跨部門溝通理解。',
          improvePoint: '避免全部都用同一種方塊，缺少層次感。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q7-1',
        question: '在 Mermaid 語法中，這行代碼 `A[送出文件] --> B{主管核准?}` 代表什麼意思？',
        options: [
          {
            id: 'a',
            text: '代表 A 和 B 是兩個錯誤的程式碼。',
            isCorrect: false,
            explanation: '這是標準的 Mermaid 流程圖語法。'
          },
          {
            id: 'b',
            text: '代表有一個名為「送出文件」的矩形步驟，用箭頭指向一個名為「主管核准?」的菱形決策判斷框。',
            isCorrect: true,
            explanation: '太厲害了！`[]` 代表一般步驟，`{}` 代表決策判斷，`-->` 代表單向箭頭。'
          },
          {
            id: 'c',
            text: '代表刪除 A 檔案並更名為 B 檔案。',
            isCorrect: false,
            explanation: '完全不是檔案操作。'
          }
        ]
      },
      {
        id: 'q7-2',
        question: '利用 Mermaid 畫圖最大的好處是什麼？',
        options: [
          {
            id: 'a',
            text: '可以直接用文字編輯修改，增刪步驟時軟體會自動重新排版，省去手動拉線與對齊的痛苦。',
            isCorrect: true,
            explanation: '沒錯！維護極其方便，而且可以交給 AI 幫忙一鍵產生。'
          },
          {
            id: 'b',
            text: '畫出來的圖永遠只能是黑白的不能上色。',
            isCorrect: false,
            explanation: 'Mermaid 可以自訂色彩樣式，也可以匯入 draw.io 進行精細設計。'
          },
          {
            id: 'c',
            text: '必須花三個月學會 C++ 才能使用。',
            isCorrect: false,
            explanation: '任何人在 3 分鐘內就能看懂基本語法。'
          }
        ]
      }
    ]
  },
  {
    id: 8,
    slug: 'n8n-and-ai-agent',
    title: 'Level 8：n8n 與 AI Agent 自動化',
    subtitle: '讓 AI 從「只會聊天」進化成「能幫你執行多步驟任務」的超級 Agent',
    category: 'automation',
    estimatedMinutes: 11,
    step1Think: {
      question: '如果主管每天早上都要求你：「檢查業務信箱 → 把附加發票存到雲端硬碟 → 用 AI 讀出發票金額與統編 → 記到試算表 → 在 Slack 發通知」，你願意每天手動做這件事 50 次嗎？',
      options: [
        {
          id: 'manual-pain',
          label: 'A. 做兩天就想離職，重複性高、枯燥又容易手抖貼錯欄位。',
          reflection: '完全理解！這種瑣碎流程正是讓打工人職業倦怠的元兇。'
        },
        {
          id: 'automation-dream',
          label: 'B. 只要設好一條自動化流水線，讓電腦和 AI 自己跑，我只要喝咖啡等通知！',
          reflection: '這就是 n8n 與 AI Agent 的終極魅力！'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        'n8n 是什麼：一套強大且支援開源私有化部署的「工作流程自動化工具」，像拼積木一樣把 Email、試算表、Slack、資料庫串在一起。',
        '什麼是 AI Agent（智慧體）：普通的 AI 只是「問一題答一題」；AI Agent 是「擁有目標，能自主規劃多個步驟、呼叫不同工具去完成任務」。',
        '經典流程五部曲：【觸發 Trigger】（例如收到新信）→ 【讀取資料】 → 【AI 決策判斷】（例如分辨是投訴信還是詢價信）→ 【執行動作】（例如寫入 CRM）→ 【發送通知】。',
        '什麼是 MCP（Model Context Protocol）與 OpenCode：由 Anthropic 等推動的開放協議，讓 AI 像插 USB 一樣，輕鬆安全地連接到外部資料庫、本機檔案系統或工具服務。'
      ],
      beginnerFriendlyNotes: [
        '把 n8n 想像成「工廠裡的輸送帶」，不同軟體是輸送帶旁的各個工作站。',
        'AI Agent 則是站在輸送帶旁的聰明檢驗員，它會看著送過來的包裹決定：「這件蓋合格章、那件退回重審」。'
      ],
      keyTakeaway: '單次對話只能省下幾分鐘；把流程串成 Agent，能替你每週省下數十小時！'
    },
    step3Example: {
      title: '客戶詢價信自動分流管線',
      scenario: '每天收到上百封多國語言的客戶業務詢價信件',
      badApproach: {
        title: '❌ 人工肉眼處理',
        content: '業務助理逐封打開 Email，用 Google 翻譯看懂，手動複製料號到 ERP 查庫存，再手動寫 Email 回信。',
        whyBad: '平均每封耗時 10 分鐘，回覆時間慢，容易流失商機。'
      },
      goodApproach: {
        title: '✅ n8n + AI Agent 自動管線',
        content: '1. [觸發] 收到新 Email\n2. [AI Agent] 辨識語言、擷取想買的【料號】與【數量】\n3. [查詢工具] Agent 自動呼叫庫存資料庫查詢是否有貨\n4. [判斷分流] 若有貨，自動起草含庫存回覆草稿；若缺貨，自動標記緊急發送 Slack 通知業務主管。',
        whyGood: '全天候 24 小時在 5 秒內精準處理，人類業務只需進行最終寄出審核！'
      },
      insight: 'AI Agent 的價值不是取代人類，而是把人類從低價值的搬運工中解救出來。'
    },
    step4Interactive: {
      instructions: '動手玩「流程拼圖遊戲」！拖曳或點選五大節點（觸發 → 讀取 → AI Agent 決策 → 分支執行 → 發送通知），組裝你的第一條自動化管線，按下「測試執行」觀看資料流動！',
      taskTitle: 'n8n & AI Agent 流程拼圖工坊'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '是否具備明確的觸發條件（Trigger）',
          goodPoint: '流程有清晰的起跑點（如收信、定時排程、Webhook）。',
          improvePoint: '若沒有定義觸發源，管線就無法自動啟動。'
        },
        {
          item: 'AI 決策節點是否有設定例外處理（Fallback）',
          goodPoint: '當遇到無法辨識的情境時，有回退給人類審核的安全機制。',
          improvePoint: '切勿讓 AI 在沒有人類護欄下直接執行不可逆的重大動作（如自動刪除資料庫）。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q8-1',
        question: 'AI Agent（人工智慧代理）與一般的 ChatGPT 純對話視窗，最大的差別是什麼？',
        options: [
          {
            id: 'a',
            text: 'ChatGPT 只能在手機用，Agent 只能在手錶用。',
            isCorrect: false,
            explanation: '跟運行裝置完全無關。'
          },
          {
            id: 'b',
            text: '一般對話只是被動回答問題；AI Agent 能根據設定的總體目標，自主規劃步驟並呼叫多個外部工具（如查資料庫、發信、執行程式）來完成任務。',
            isCorrect: true,
            explanation: '答得太好了！具備「工具調用（Tool Calling）」與「多步自主決策」正是 Agent 的靈魂。'
          },
          {
            id: 'c',
            text: 'AI Agent 永遠不需要用到任何大型語言模型。',
            isCorrect: false,
            explanation: 'Agent 的大腦核心依然是語言模型。'
          }
        ]
      },
      {
        id: 'q8-2',
        question: '在 n8n 自動化流程中，哪一個節點是整個管線的「起跑點」？',
        options: [
          {
            id: 'a',
            text: '觸發節點（Trigger，例如收到郵件或時間排程到了）',
            isCorrect: true,
            explanation: '完全正確！一切自動化都始於一個觸發事件（Trigger）。'
          },
          {
            id: 'b',
            text: '結束通知節點',
            isCorrect: false,
            explanation: '這是管線的最後一步。'
          },
          {
            id: 'c',
            text: '資料庫刪除節點',
            isCorrect: false,
            explanation: '這只是一項可選的動作。'
          }
        ]
      }
    ]
  },
  {
    id: 9,
    slug: 'local-ai-lm-studio',
    title: 'Level 9：地端 AI (Local AI)',
    subtitle: '資料完全不連外網！LM Studio、本機模型與雲端架構大解密',
    category: 'local',
    estimatedMinutes: 10,
    step1Think: {
      question: '如果你的公司掌握了價值數億元的專利晶片電路圖，主管說：「這份資料絕對不能上傳到任何第三方公司的伺服器」，那你還能享受 AI 的好處嗎？',
      options: [
        {
          id: 'impossible',
          label: 'A. 沒辦法了，AI 一定要連上網路才能用，只能摸摸鼻子放棄。',
          reflection: '大錯特錯！現在已經可以在自己的筆電或公司伺服器上，完全「斷網」運行強大的 AI！'
        },
        {
          id: 'local-possible',
          label: 'B. 可以！只要把開源的 AI 模型下載到本機硬碟，拔掉網路線一樣能飛速運作！',
          reflection: '完全正確！這就是「地端本機 AI（Local AI）」正在掀起的企業革命！'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        '什麼是雲端 AI（Cloud AI）：你的提問與資料會透過網際網路傳到 OpenAI 或 Google 的雲端資料中心，算完再傳回結果。優點是性能極強、不用買高階顯卡；考量點是資料離開了你的電腦。',
        '什麼是地端 AI（Local AI）：直接把模型檔案（如 GGUF 格式）下載到自己的電腦硬碟，由自己電腦的晶片（CPU / GPU / NPU）運算，全程不連外網。',
        'LM Studio：目前最受歡迎的零門檻地端 AI 軟體，介面就像通訊軟體一樣，一鍵搜尋下載開源模型並立即離線聊天。',
        'Gemma 4 E2B 等開源模型：由 Google、Meta（Llama）、Mistral 等釋出的開源權重，任何人都可以免費合法下載到本機使用。',
        '為什麼企業考慮地端 AI：避免機密外流風險、滿足嚴苛法規要求（如醫療、國防、金融）、無 API 調用計費成本。',
        '地端優缺點客觀分析：優點是絕對隱私與可控；缺點是依賴使用者電腦硬體（需要較大 RAM/VRAM），且極大參數量模型本機跑不動。',
        '重要安全提醒：地端 AI 不代表所有風險都消失！如果本機電腦中了木馬病毒或被植入惡意後門，資料依然可能在電腦端遭竊。'
      ],
      beginnerFriendlyNotes: [
        '雲端 AI 就像「搭計程車」：不用養車、車子最新最頂級，但你的行蹤司機看得到。',
        '地端 AI 就像「自己的腳踏車或自用車」：車子是你自己的，愛去哪去哪、隱私保密，但爬坡力道受限於你的硬體。'
      ],
      keyTakeaway: '隱私與算力的權衡。機密資料找地端，複雜海量推理找雲端！'
    },
    step3Example: {
      title: '資料旅行路徑大對照',
      scenario: '分析一份含員工個人身分證字號與薪資的內部報表',
      badApproach: {
        title: '❌ 隨手貼進公開雲端服務',
        content: '員工將名冊貼進未簽署商業企業隱私協議的個人版免費 AI 網頁。',
        whyBad: '資料穿過公共網路，且可能被納入公有模型未來的訓練集，面臨重大個資法規違法裁罰。'
      },
      goodApproach: {
        title: '✅ 透過 LM Studio 本地離線分析',
        content: '拔掉網路線，打開本機 LM Studio 載入開源模型，在本地完成薪資計算與離職率分析。',
        whyGood: '所有資料封包都在主機板與 RAM 之間內部傳遞，網路監聽工具抓不到任何對外封包！'
      },
      insight: '了解資料在網路中的物理流向，是每一位職場人的核心資安素養。'
    },
    step4Interactive: {
      instructions: '體驗「資料旅行遊戲」！切換【雲端 AI】與【地端 AI】兩種運作模式，親眼觀察封包路徑、運算節點、資安邊界以及延遲表現的動態對比！',
      taskTitle: '雲端 vs 地端資料封包旅行模擬'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '是否理解地端 AI 的硬體邊界限制',
          goodPoint: '知道本機運算取決於電腦記憶體（RAM）與顯示卡顯存（VRAM）。',
          improvePoint: '不要試圖在一台 8GB 記憶體的普通老舊電腦上硬跑 70B 的龐大模型。'
        },
        {
          item: '是否建立正確認知：地端不等於 100% 絕對零風險',
          goodPoint: '清楚實體防護、帳號權限管理與防毒軟體依然必不可少。',
          improvePoint: '切勿以為用了 LM Studio 就能在未授權的公共電腦上隨意放置機密。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q9-1',
        question: '關於地端 AI（例如使用 LM Studio）的敘述，以下哪一項最正確？',
        options: [
          {
            id: 'a',
            text: '地端 AI 必須每秒鐘連線到美國伺服器才能運作。',
            isCorrect: false,
            explanation: '完全不需要！模型下載好後，拔掉網路線也能完全離線獨立運算。'
          },
          {
            id: 'b',
            text: '它在使用者自己的電腦硬體上運行，資料封包不需離開本機電腦，具有高度隱私性。',
            isCorrect: true,
            explanation: '答對了！這正是金融、醫療與高科技製造業青睞地端模型的主要原因。'
          },
          {
            id: 'c',
            text: '地端 AI 會自動把電腦裡的所有私人密碼寄給駭客。',
            isCorrect: false,
            explanation: '正規的開源模型與知名工具不會做這種事。'
          }
        ]
      },
      {
        id: 'q9-2',
        question: '既然地端 AI 這麼有隱私，為什麼大家不全部都改用地端 AI 呢？',
        options: [
          {
            id: 'a',
            text: '因為地端 AI 受到使用者電腦硬體性能限制，最大最強的千億級模型普通電腦很難跑得動。',
            isCorrect: true,
            explanation: '沒錯！超大模型需要昂貴的伺服器顯卡才能流暢運行，雲端 AI 則是由大公司負擔硬體成本。'
          },
          {
            id: 'b',
            text: '因為政府明文規定個人電腦違法禁止運行 AI。',
            isCorrect: false,
            explanation: '完全合法，任何人都可以自由下載開源模型。'
          },
          {
            id: 'c',
            text: '因為地端 AI 只能顯示亂碼。',
            isCorrect: false,
            explanation: '地端模型同樣具備優秀的中文理解與生成能力。'
          }
        ]
      }
    ]
  },
  {
    id: 10,
    slug: 'ai-and-company-data-security',
    title: 'Level 10：AI × 公司資料與資安合規',
    subtitle: '職場必修生存學！PII 個資、未公開機密與「可以貼給 AI 嗎？」情境決策',
    category: 'security',
    estimatedMinutes: 12,
    step1Think: {
      question: '如果一名同仁把公司「尚未發表的下季新產品完整成本利潤試算表」貼給免費版 AI 幫忙排版，最嚴重的後果可能包括什麼？',
      options: [
        {
          id: 'nothing',
          label: 'A. 沒事，網路這麼大，沒有人會知道。',
          reflection: '極其危險的僥倖心態！許多跨國科技大廠都曾發生工程師將程式碼貼進公開 AI 導致外洩的重大資安事故。'
        },
        {
          id: 'legal-disaster',
          label: 'B. 商業機密外流給競爭對手、違反競業保密合約（NDA）、遭公司開除甚至承擔鉅額民刑事責任！',
          reflection: '完全沒錯！資料安全是紅線，碰觸者後果不堪設想。'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        '什麼是 PII（個人識別資訊，Personally Identifiable Information）：任何可以直接或間接辨識特定個人的資料，例如姓名、身分證字號、手機號碼、住址、私人 Email、信用卡號。',
        '什麼是公司機密：客戶名冊、供應商報價底牌、未公開財報、專利技術細節、未上市產品圖面與試模委託單、伺服器帳號密碼。',
        'PDF / Office 加密陷阱：很多人以為「文件有設密碼就安全」，但一旦你把文件解密後複製內文貼給 AI，防護就完全歸零！',
        'OpenAI Privacy Filter 與企業條款：企業版通常承諾「零資料保留（Zero Data Retention）且不使用客戶資料訓練模型」；但個人免費版預設可能會將對話納入模型訓練。',
        '不要簡化成絕對二分法：不是只有「可以」或「不可以」！而是依據【公司內部政策】+【資料敏感分級】+【AI 工具的服務協議（ToS）】綜合審核。可善用「去識別化（用假名/代號取代真實資料）」！'
      ],
      beginnerFriendlyNotes: [
        '牢記去識別化三步驟：1. 刪除真實人名與電話；2. 把具體客戶換成「某 A 國客戶」；3. 把真實金額乘以隨機倍數（如全體 × 1.3）只分析比例結構。',
        '安全意識不是阻礙效率，而是保護你自己的職業生涯！'
      ],
      keyTakeaway: '上網三思，貼前三秒！依敏感度、工具條款與公司政策判斷，絕不讓機密裸奔！'
    },
    step3Example: {
      title: '合規去識別化對比示範',
      scenario: '想要請 AI 幫忙分析客戶抱怨信並撰寫回信草稿',
      badApproach: {
        title: '❌ 粗暴直接整段貼上',
        content: '「客戶台積電張經理（手機 0912-345-678，地址新竹市科園路 1 號）抱怨我們這批晶片報價 500 萬太貴且遲到 5 天，幫我回信安撫。」',
        whyBad: '同時洩漏了客戶名稱、高階主管聯絡電話、地址與高度敏感的具體交易報價金額！'
      },
      goodApproach: {
        title: '✅ 去識別化後再請 AI 協助',
        content: '「我是一家半導體供應商的客服窗口。有一家【長期合作的 VIP 客戶】來信反映【某批料件】交期略有落後且對【報價費用】提出質疑。請提供 3 個專業、誠懇且合乎商務禮儀的溝通策略框架。」',
        whyGood: '抽離了所有真實個資與機密，但保留了核心商業邏輯，AI 依然能給出滿分的策略！'
      },
      insight: 'AI 只需要問題的「骨架」，不需要你奉送真實的「血肉」。'
    },
    step4Interactive: {
      instructions: '挑戰「可以貼給 AI 嗎？」資安法官遊戲！面對 8 種真實職場情境（公開產品規格、含個資名單、未上市試模圖、脫敏後通用代碼等），做出最合適的裁決並了解背後原因！',
      taskTitle: '「可以貼給 AI 嗎？」職場資安裁決挑戰'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '是否具備主動進行去識別化（Masking）的意識',
          goodPoint: '在提交任何外部工具前，自發將敏感識別碼替換為通用標籤。',
          improvePoint: '切勿將「客戶真實電話」或「身分證」視為無關緊要的小事。'
        },
        {
          item: '是否能區分「公開資料」與「內部限制資料」',
          goodPoint: '官方網站已公告的文章可放心摘要，內部草稿則需審慎評估。',
          improvePoint: '非公開專利技術哪怕只有一張草圖，未經授權也不應上傳到免費公開雲端。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q10-1',
        question: '以下哪一組資料屬於典型的 PII（個人識別資訊），未經合法授權與去識別化絕不應隨意提供給公開 AI？',
        options: [
          {
            id: 'a',
            text: '公司官方公開網站上的「關於我們」公司歷史介紹。',
            isCorrect: false,
            explanation: '這是完全對外公開的文宣，不屬於個人私密 PII。'
          },
          {
            id: 'b',
            text: '包含客戶真實姓名、手機門號、個人身分證字號與住家地址的清冊。',
            isCorrect: true,
            explanation: '滿分！這屬於重度敏感的個人識別資訊，受個資法嚴格保護。'
          },
          {
            id: 'c',
            text: '通用標準規格「螺絲直徑 5mm，長度 20mm」。',
            isCorrect: false,
            explanation: '這是標準工業公開規格。'
          }
        ]
      },
      {
        id: 'q10-2',
        question: '關於「公司資料是否能使用 AI 處理」，最專業客觀的判斷原則是？',
        options: [
          {
            id: 'a',
            text: '一律完全禁止，只要有 AI 的公司就是違法。',
            isCorrect: false,
            explanation: '過度極端！現代企業是擁抱 AI 並建立合規治理框架，而非因噎廢食。'
          },
          {
            id: 'b',
            text: '依據公司資訊安全政策、資料敏感分級（公開/內部/機密/極機密），以及所使用的 AI 服務條款（如是否啟用企業隱私保護、是否承諾不保留資料訓練）來綜合判斷。',
            isCorrect: true,
            explanation: '完全正確！資安不是非黑即白，而是科學評估風險與合規邊界。'
          },
          {
            id: 'c',
            text: '只要主管沒站在你背後看，什麼都可以貼。',
            isCorrect: false,
            explanation: '資安事故有數位足跡與日誌，切勿抱持僥倖心態。'
          }
        ]
      }
    ]
  },
  {
    id: 11,
    slug: 'ai-in-workplace-pm',
    title: 'Level 11：AI × 工作實戰：專案管理與工程落地',
    subtitle: '把 AI 真正落實在研發製令、BOM 表、試模進度與人機協作全閉環',
    category: 'enterprise',
    estimatedMinutes: 14,
    step1Think: {
      question: '在一個複雜的硬體新產品開發專案中，同時涉及 100 多種零件、試模委託單、研發製令、請購單與圖面，專案經理（PM）每天花最多時間在哪裡？',
      options: [
        {
          id: 'collating',
          label: 'A. 到處敲各部門工程師催進度、把不同 Excel 表格剪剪貼貼、肉眼比對哪一張單號漏掉了。',
          reflection: '太真實了！大量專案經理與工程師有 60% 以上的精力被消耗在機械化的進度追蹤與催單。'
        },
        {
          id: 'strategic',
          label: 'B. 和客戶討論關鍵架構策略、解決供應鏈重大卡點、評估技術可行性。',
          reflection: '這才是人類真正應該發揮高價值的地方！把 A 交給 AI，把時間留給 B！'
        }
      ]
    },
    step2Concept: {
      coreCourseSummary: [
        'AI 工作實戰五步閉環：【定義問題】 → 【準備脫敏資料】 → 【AI 輔助執行】 → 【人類專家複核決策】 → 【最終成果落地】。',
        '製造與研發中的資料應用：BOM（物料清單）、圖面版號、試模委託單、研發製令、驗收單、請購單、日誌記錄。',
        'AI 可以幫忙做什麼：1. 整理非結構化雜訊；2. 分類與標籤化；3. 自動抓取摘要；4. 比對差異找出異常（如發現某零件試模已經 3 次仍未通過）；5. 產生預警提醒與彙報草稿。',
        '人需要做什麼：AI 只是吹哨者與整理員，最終的「技術決策」、「供應商調度決策」、「是否准許放行」永遠由人類工程師簽核！',
        '專案實戰守則：在任何 AI 協作中，嚴禁出現真實廠商名稱、機密料號、內部硬碟路徑。使用通用代碼（如 Part-A101）進行分析。'
      ],
      beginnerFriendlyNotes: [
        '這就是「人機協作（Human-in-the-loop）」的精髓。',
        'AI 就像雷達，幫你在海面下找出冰山與暗礁；但掌舵轉彎的舵手，永遠是你自己！'
      ],
      keyTakeaway: 'AI 負責處理資料雜訊、找出異常；人類負責戰略判斷與最終決策。這才是最高境界！'
    },
    step3Example: {
      title: '料件開模進度異常偵測實例',
      scenario: '某專案在量產前夕，手上有 45 筆試模委託單與製令狀態',
      badApproach: {
        title: '❌ 傳統肉眼盲查',
        content: 'PM 一列一列看試算表，沒注意到 Part-082 已經試模 T3（第三次試模），尺寸公差依舊超標，直到試產當天才發現缺件停工。',
        whyBad: '人眼在疲累時極易產生盲點，導致工廠整條生產線停擺幾十萬元損失。'
      },
      goodApproach: {
        title: '✅ AI 輔助異常偵測',
        content: '將表格載入 AI：「請比對試模委託單與研發製令，找出符合以下任一條件的【高風險零件】：1. 試模次數 ≥ 3 次且未合格；2. 預計驗收日距今小於 5 天但廠商尚未交件。請條列原因並建議後續行動。」',
        whyGood: 'AI 1 秒內揪出 2 件隱藏的高風險未爆彈！工程師立刻介入召開供應商技術協調會，順利化解危機。'
      },
      insight: '把繁雜的比對交給永不疲憊的 AI，人類專注於制定危機應變方案。'
    },
    step4Interactive: {
      instructions: '動手體驗「新產品料件進度追蹤與人機協作沙盒」！載入擬真的專案料件資料，點擊 AI 執行【異常偵測】、【進度摘要】與【延遲風險預警】，並由你親自作為工程主管進行【核准與決策】！',
      taskTitle: '專案管理與工程資料協作沙盒'
    },
    step5AiCheck: {
      standardChecklist: [
        {
          item: '人機職責邊界是否清晰（Human-in-the-loop）',
          goodPoint: '認識到 AI 只負責偵測與建議，關鍵核准始終由人類簽署。',
          improvePoint: '絕對不可把自動核准權完全放手給未受監督的 AI 演算法。'
        },
        {
          item: '工程資料是否落實去識別化防護',
          goodPoint: '使用代碼化料號，隱蔽供應商真實商號與合約底價。',
          improvePoint: '在把工作日誌提供給 AI 統整前，先檢查是否有前人遺留的密碼或個人隱私。'
        }
      ]
    },
    step6Quiz: [
      {
        id: 'q11-1',
        question: '在企業專案管理與工程研發中，導入 AI 的最健康合作心態是？',
        options: [
          {
            id: 'a',
            text: 'AI 是神，AI 說可以量產就立刻量產，不用任何工程師做實體驗證。',
            isCorrect: false,
            explanation: '極端危險！物理世界的實體零件必須有工程量測與驗收標準。'
          },
          {
            id: 'b',
            text: '人機協作（Human-in-the-loop）：AI 負責高速整理非結構化資料、分類摘要、比對進度與標記異常；人類工程師負責現場驗收、最終品質把關與責任決策。',
            isCorrect: true,
            explanation: '恭喜！這正是所有頂尖企業工程團隊的核心成功哲學！'
          },
          {
            id: 'c',
            text: 'AI 完全沒用，連幫忙算 Excel 都會算錯，堅決不用任何新科技。',
            isCorrect: false,
            explanation: '封閉排斥只會讓自己的工作效率遠遠落後時代。'
          }
        ]
      },
      {
        id: 'q11-2',
        question: '恭喜你即將完成全部 12 個關卡！當你今天學會了這套「AI 零基礎技能」後，下一步最應該做的是什麼？',
        options: [
          {
            id: 'a',
            text: '立刻回到日常工作中，從一個小任務（如寫一封結構化信件、整理一份會議筆記、畫一張流程圖）開始實際嘗試與驗證！',
            isCorrect: true,
            explanation: '太棒了！知行合一才是掌握科技的真正力量。從今天開始，做自己的 AI 領航員！'
          },
          {
            id: 'b',
            text: '把學到的東西全部忘掉，回到過去手動加班熬夜的日子。',
            isCorrect: false,
            explanation: '別走回頭路！你已經具備與 AI 協作的思維架構了。'
          },
          {
            id: 'c',
            text: '等待十年後世界上誕生完美的 AI 之後再來嘗試。',
            isCorrect: false,
            explanation: '科技每天都在進步，提早習慣人機協作的人才能掌握未來。'
          }
        ]
      }
    ]
  }
];
