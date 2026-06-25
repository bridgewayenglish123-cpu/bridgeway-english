import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import { courses, LINE_URL } from "@/lib/data";
import { IcLine } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "課程方向 Courses",
  description: "Bridgeway English 提供兒童英文、成人口說、閱讀理解、文法寫作、多益雅思托福備考、劍橋英檢、高中7000單、國中2000單與商業英文課程。",
  openGraph: {
    title: "課程方向｜Bridgeway English",
    description: "兒童英文、成人口說、考試備考、劍橋英檢、高中7000單、國中2000單、商業英文。精選菲律賓外師，一對一或小團體。",
  },
};

export default function Courses() {
  return (
    <>
      <section className="pg-hero">
        <div className="container">
          <Reveal>
            <span className="label">COURSES</span>
            <h1>課程方向</h1>
            <p className="pg-desc">
              每一類課程都由精選線上師資授課，依照學生的程度、年齡與目標安排適合的方向。
              不確定適合哪一種也沒關係，加 LINE 告訴我們你的需求，我們會協助安排。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container course-stack">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={i * 50}>
              <article className="cr">
                <div className="cr-left">
                  <h2>{c.title}</h2>
                </div>
                <div className="cr-right">
                  <p className="cr-desc">{c.desc}</p>
                  <div className="cr-tags">
                    {c.contents.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ textAlign: "center", maxWidth: 580 }}>
          <Reveal>
            <h2>一對一或 2–5 人小團體，都可以安排。</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 16, lineHeight: 1.9 }}>
              不論是一對一或小團體，我們都會依照學生年齡、程度、目標與可上課時間，
              協助安排適合的老師與課程方向。
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-lg">
                <IcLine size={18} /> 加 LINE 詢問
              </a>
              <Link href="/contact" className="btn btn-ghost btn-lg">預約試聽</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .pg-hero { padding: 72px 0 48px; }
        .pg-hero h1 { margin-top: 10px; }
        .pg-desc { font-size: 16px; color: var(--text-secondary); margin-top: 20px; max-width: 580px; line-height: 1.95; }
        .course-stack { display: flex; flex-direction: column; gap: 18px; }
        .cr {
          display: grid; grid-template-columns: 240px 1fr; gap: 36px;
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg);
          padding: 36px 32px; box-shadow: var(--shadow-xs);
          transition: box-shadow .3s, border-color .3s;
        }
        .cr:hover { box-shadow: var(--shadow-md); border-color: var(--gold-soft); }
        .cr-left h2 { font-size: clamp(22px, 2.6vw, 28px); }
        .cr-desc { font-size: 15px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 16px; }
        .cr-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        @media (max-width: 700px) { .cr { grid-template-columns: 1fr; gap: 20px; padding: 28px 24px; } }
      `}</style>
    </>
  );
}
