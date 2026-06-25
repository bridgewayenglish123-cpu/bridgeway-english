import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bridgewayenglish.com"),
  title: {
    default: "Bridgeway English｜線上英文口說課程｜兒童英文、成人英文、多益雅思托福",
    template: "%s｜Bridgeway English",
  },
  description:
    "Bridgeway English 是線上外師英文課程，提供兒童英文、成人口說、商業英文、多益、雅思、托福備考。小規模精選師資，一對一或 2-5 人小團體。",
  keywords: [
    "線上英文課程", "線上英文家教", "菲律賓英文老師", "菲律賓英文家教",
    "兒童英文", "成人英文口說", "商業英文", "IELTS 線上課程",
    "TOEFL 線上課程", "TOEIC 線上課程", "英文口說練習", "線上外師英文",
  ],
  openGraph: {
    title: "Bridgeway English｜線上英文口說課程",
    description: "線上外師英文課程，陪你把英文輸入變成口說與實際表達能力。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
