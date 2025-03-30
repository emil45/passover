export interface ToolData {
    tool: string
    aliases: string[]
    process: string
    sources: string[]
    chumrot: string[]
    notes?: string
    tribe: string
    emoji: string
  }
  
  export const tribes = [
    { id: "all", name: "כל המנהגים" },
    { id: "east", name: "עדות המזרח" },
    { id: "ashkenaz", name: "אשכנז" },
    { id: "chabad", name: "חב״ד" },
    { id: "teiman", name: "תימן" },
  ]
  
  export const toolsData: ToolData[] = [
    {
      tool: "אלומיניום חד פעמי",
      aliases: ["תבנית חד פעמית", "מגש חד פעמי", "סיר חד פעמי"],
      process: "אין צורך בהכשרה – נחשב כלי שאינו בן יומו ומיועד לזריקה",
      sources: ["ילקוט יוסף פסח תשס״ג חלק ב' עמ' תקנח", "שו״ת יחווה דעת חלק ה' סימן לב"],
      chumrot: [],
      notes: "מותר להשתמש גם אם נאפה בו חמץ, אם נשטף היטב",
      tribe: "east",
      emoji: "🥘",
    },
    {
      tool: "סיר",
      aliases: ["סיר בישול", "קדירה"],
      process: "הגעלה ברותחים שלוש פעמים",
      sources: ["שולחן ערוך אורח חיים תנא, ה"],
      chumrot: ["יש הנוהגים להגעיל חמש פעמים"],
      notes: "יש להקפיד שהסיר יהיה נקי לחלוטין ללא חלודה",
      tribe: "east",
      emoji: "🍲",
    },
    {
      tool: "מחבת",
      aliases: ["פנצ׳ר", "טיגון"],
      process: "ליבון קל (עד שקש יישרף מצדו השני)",
      sources: ["משנה ברורה תנא, כח"],
      chumrot: ["יש הנוהגים ליבון חמור"],
      tribe: "ashkenaz",
      emoji: "🍳",
    },
    {
      tool: "כוס זכוכית",
      aliases: ["כוסות", "גביע"],
      process: "שטיפה והדחה בלבד",
      sources: ["שולחן ערוך אורח חיים תנא, כו"],
      chumrot: ["יש הנוהגים להגעיל שלוש פעמים", "יש הנוהגים להשרות במים 72 שעות"],
      tribe: "east",
      emoji: "🥛",
    },
    {
      tool: "כוס זכוכית",
      aliases: ["כוסות", "גביע"],
      process: "הגעלה שלוש פעמים במים רותחים",
      sources: ["רמ״א אורח חיים תנא, כו"],
      chumrot: [],
      tribe: "ashkenaz",
      emoji: "🥛",
    },
    {
      tool: "סכין",
      aliases: ["סכו״ם", "מזלג", "כף"],
      process: "הגעלה ברותחים שלוש פעמים, כולל הידית",
      sources: ["שולחן ערוך אורח חיים תנא, ג"],
      chumrot: ["יש הנוהגים לקנות סכו״ם מיוחד לפסח"],
      tribe: "all",
      emoji: "🍴",
    },
    {
      tool: "תנור אפייה",
      aliases: ["תנור", "אפייה"],
      process: "ניקוי יסודי, המתנה של 24 שעות, הפעלה בחום מקסימלי למשך שעה",
      sources: ["אגרות משה אורח חיים א, קכד"],
      chumrot: ["רבים נוהגים לא להשתמש בתנור לפסח אלא לכסותו בנייר כסף"],
      tribe: "chabad",
      emoji: "🔥",
    },
    {
      tool: "מיקרוגל",
      aliases: ["מיקרו"],
      process: "ניקוי יסודי, הרתחת כוס מים עם סבון למשך 10 דקות",
      sources: ["הליכות שלמה פסח פרק ג"],
      chumrot: ["יש הנוהגים להשתמש רק עם כיסוי כפול"],
      tribe: "all",
      emoji: "📻",
    },
    {
      tool: "שיש",
      aliases: ["משטח עבודה", "משטח מטבח"],
      process: "ניקוי יסודי, עירוי מים רותחים, כיסוי בנייר כסף או משטח אחר",
      sources: ["חזון עובדיה פסח עמ׳ קנא"],
      chumrot: [],
      tribe: "all",
      emoji: "🧱",
    },
    {
      tool: "כלי חרס",
      aliases: ["חרסינה", "קרמיקה", "פורצלן"],
      process: "אין אפשרות להכשיר",
      sources: ["שולחן ערוך אורח חיים תנא, א"],
      chumrot: [],
      notes: "יש לקנות כלים חדשים או להשתמש בכלים המיוחדים לפסח",
      tribe: "all",
      emoji: "🏺",
    },
    {
      tool: "מדיח כלים",
      aliases: ["מדיח"],
      process: "ניקוי יסודי של כל חלקי המדיח, הרצה ריקה בחום גבוה עם חומר ניקוי",
      sources: ["מקראי קודש פסח ב, עמ׳ קכד"],
      chumrot: ["רבים נוהגים שלא להכשיר מדיח כלים לפסח"],
      tribe: "teiman",
      emoji: "🧼",
    },
  ]
  
  