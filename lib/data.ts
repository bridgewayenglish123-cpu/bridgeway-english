export const LINE_URL = "https://lin.ee/pTz5uRs";

export const social = {
  instagram: "https://www.instagram.com/bridgeway.english.taiwan/",
  facebook: "https://www.facebook.com/profile.php?id=61588545042657",
  threads: "https://www.threads.com/@bridgeway.english.taiwan",
  youtube: "https://youtube.com/@bridgewayenglish-e3k?si=PMyQGMI5x0ETVlq7",
};

export type Teacher = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  tags: string[];
  style: string;
  availability: string;
  photoUrl: string;
  youtubeUrl: string;
  initials: string;
  isLead?: boolean;
};

export const teachers: Teacher[] = [
  {
    slug: "hanne",
    name: "Hanne",
    role: "Lead Teacher｜首席老師",
    tagline: "王牌師資 × 考試與口說專攻",
    tags: ["IELTS", "TOEFL", "TOEIC", "Cambridge KET/PET", "Business English", "Advanced Speaking"],
    style: "溫暖、有架構、經驗豐富、高度支持。",
    availability: "平日晚上與部分週末",
    photoUrl: "https://bridgewayreading.com/_next/image?url=%2Fimages%2Fteachers%2Fhanne.jpg&w=640&q=75",
    youtubeUrl: "https://youtu.be/bhr_bw_2QvU?si=aCchz795J6Nw64pA",
    initials: "H",
    isLead: true,
  },
  {
    slug: "laiza",
    name: "Laiza",
    role: "英文老師",
    tagline: "穩健專業 × 溝通實戰",
    tags: ["Teen Learners", "Adult Learners", "Speaking Practice", "Communication Skills", "Daily English"],
    style: "專業、穩健、清楚、注重實用。",
    availability: "早上至傍晚，最晚 6:30 PM",
    photoUrl: "https://bridgewayreading.com/_next/image?url=%2Fimages%2Fteachers%2Flaiza.jpg&w=640&q=75",
    youtubeUrl: "https://youtu.be/1hnQT4Z7d3U?si=VZ4IFP5423UZiNj0",
    initials: "L",
  },
  {
    slug: "jane",
    name: "Jane",
    role: "英文老師",
    tagline: "成果導向 × 系統化教學",
    tags: ["General English", "Structured Learning", "Speaking Practice", "Listening", "Grammar", "Reading"],
    style: "有組織、目標導向、穩健、注重實效。",
    availability: "平日晚上 8:30 後",
    photoUrl: "https://bridgewayreading.com/_next/image?url=%2Fimages%2Fteachers%2Fjane.jpg&w=640&q=75",
    youtubeUrl: "https://youtu.be/AeGUTK-MOgc?si=rJgk71xCB2PcgtwF",
    initials: "J",
  },
  {
    slug: "meya",
    name: "Meya",
    role: "英文老師",
    tagline: "親切互動 × 自信建立",
    tags: ["Kids English", "Teen Learners", "Beginner Speaking", "Confidence Building", "Phonics"],
    style: "親切、有活力、鼓勵性強、互動豐富。",
    availability: "平日晚上 7:00 後與部分週末",
    photoUrl: "https://bridgewayreading.com/_next/image?url=%2Fimages%2Fteachers%2Fmeya.jpg&w=640&q=75",
    youtubeUrl: "https://youtu.be/UTuvQF7JERE?si=sL2_rHT7g3J0kAYg",
    initials: "M",
  },
];

export type Course = {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  contents: string[];
};

export const courses: Course[] = [
  {
    id: "children", emoji: "🧒", title: "兒童英文",
    desc: "建立自然開口、基礎字彙、句型與閱讀習慣。",
    contents: ["Phonics 自然發音", "兒童口說", "基礎單字與句型", "閱讀啟蒙", "學校英文輔助"],
  },
  {
    id: "adult", emoji: "🗣️", title: "成人口說",
    desc: "練習日常會話、主題討論與英文表達自信。",
    contents: ["日常英文口說", "旅遊英文", "發音練習", "生活英文", "自信表達"],
  },
  {
    id: "reading", emoji: "📚", title: "閱讀理解",
    desc: "透過文章練主旨、推論、單字片語與閱讀討論。",
    contents: ["文章理解", "單字片語", "句型焦點", "閱讀討論", "搭配 Bridgeway Reading"],
  },
  {
    id: "grammar", emoji: "✍️", title: "文法寫作",
    desc: "加強句子結構、寫作表達與英文準確度。",
    contents: ["文法基礎", "句子結構", "寫作練習", "錯誤修正", "表達精確度"],
  },
  {
    id: "test", emoji: "🎓", title: "多益 / 雅思 / 托福",
    desc: "依照考試目標加強閱讀、口說、寫作與應試能力。",
    contents: ["IELTS", "TOEFL", "TOEIC", "Cambridge KET / PET", "應試策略"],
  },
  {
    id: "business", emoji: "💼", title: "商業英文",
    desc: "練習英文簡報、面試、會議與職場溝通。",
    contents: ["商業會話", "面試英文", "簡報英文", "會議溝通", "外商英文"],
  },
];
