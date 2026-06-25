import { Reveal } from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import { teachers } from "@/lib/data";
import { IcPlay } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "認識老師 Teachers",
  description: "認識 Bridgeway English 的老師團隊。每位老師都經過篩選，親切、耐心、經驗豐富，特別擅長陪伴學生建立英文口說能力。",
};

export default function Teachers() {
  return (
    <>
      <section className="pg-hero">
        <div className="container">
          <Reveal>
            <span className="label">OUR TEACHERS</span>
            <h1>認識我們的老師</h1>
            <p className="pg-desc">
              每位老師都能依照學生年齡、程度與學習目標調整課程內容。
              我們會根據學生需求，協助安排最適合的老師與課程方向。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container tf-stack">
          {teachers.map((t, i) => (
            <Reveal key={t.slug} delay={i * 70}>
              <article id={t.slug} className="tf">
                <div className="tf-left">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.photoUrl} alt={t.name} className="tf-photo" />
                  <a href={t.youtubeUrl} target="_blank" rel="noopener noreferrer" className="tf-yt">
                    <IcPlay size={14} /> 觀看老師介紹影片
                  </a>
                </div>
                <div className="tf-right">
                  {t.isLead && <span className="tf-badge">Lead Teacher</span>}
                  <h2>{t.name}</h2>
                  <span className="tf-role">{t.role}</span>
                  <span className="tf-tagline">{t.tagline}</span>

                  <div className="tf-section">
                    <span className="tf-label">教學風格</span>
                    <p>{t.style}</p>
                  </div>

                  <div className="tf-section">
                    <span className="tf-label">擅長課程</span>
                    <div className="tf-tags">
                      {t.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>

                  <div className="tf-section">
                    <span className="tf-label">可預約時段</span>
                    <p>{t.availability}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--alt" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: 14.5, color: "var(--text-secondary)", lineHeight: 1.85 }}>
            實際可預約時段會依老師當週安排調整，歡迎加 LINE 告訴我們你方便的時間，我們會協助確認適合老師。
          </p>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .pg-hero { padding: 72px 0 48px; }
        .pg-hero h1 { margin-top: 10px; }
        .pg-desc { font-size: 16px; color: var(--text-secondary); margin-top: 20px; max-width: 560px; line-height: 1.95; }
        .tf-stack { display: flex; flex-direction: column; gap: 22px; }
        .tf {
          display: grid; grid-template-columns: 220px 1fr; gap: 40px;
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg);
          padding: 38px 36px; box-shadow: var(--shadow-xs);
          scroll-margin-top: 90px;
          transition: box-shadow .3s, border-color .3s;
        }
        .tf:hover { box-shadow: var(--shadow-md); border-color: var(--gold-soft); }
        .tf-photo { width: 100%; aspect-ratio: 1; border-radius: 16px; object-fit: cover; border: 2px solid var(--border-light); }
        .tf-yt {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          margin-top: 14px; font-size: 13.5px; font-weight: 600; color: var(--text-secondary);
          padding: 10px; border: 1px solid var(--border); border-radius: 10px;
          transition: color .2s, border-color .2s;
        }
        .tf-yt:hover { color: var(--navy); border-color: var(--navy); }
        .tf-badge { font-size: 11px; font-weight: 700; color: var(--gold); background: var(--gold-bg); border-radius: 99px; padding: 4px 12px; display: inline-block; margin-bottom: 8px; }
        .tf-right h2 { font-size: 28px; }
        .tf-role { display: block; font-size: 14px; color: var(--text-muted); margin-top: 4px; }
        .tf-tagline { display: block; font-size: 15px; color: var(--gold); font-weight: 600; margin-top: 6px; }
        .tf-section { margin-top: 20px; }
        .tf-label { font-size: 12px; font-weight: 700; letter-spacing: .06em; color: var(--text-muted); display: block; margin-bottom: 7px; }
        .tf-section p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; }
        .tf-tags { display: flex; flex-wrap: wrap; gap: 7px; }
        @media (max-width: 700px) { .tf { grid-template-columns: 1fr; gap: 24px; padding: 28px 24px; } .tf-photo { max-width: 180px; } }
      `}</style>
    </>
  );
}
