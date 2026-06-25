import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import { LINE_URL } from "@/lib/data";
import { IcLine } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "課程方案 Pricing",
  description: "Bridgeway English 課程方案。基礎課程約 NT$250-350 / 堂起，試聽 25 分鐘 NT$250，提供一對一與 2-5 人小團體線上英文課程。",
  openGraph: {
    title: "課程方案｜Bridgeway English",
    description: "基礎課程 NT$250–350 / 堂起，試聽 25 分鐘 NT$250。一對一或 2–5 人小團體，彈性堂數，不綁月費。",
  },
};

export default function Pricing() {
  return (
    <>
      <section className="pg-hero">
        <div className="container">
          <Reveal>
            <span className="label">PRICING</span>
            <h1>課程方案</h1>
            <p className="pg-desc">
              基礎課程約 NT$250–350 / 堂起。進階課程、考試英文、商業英文、一對一或小團體，
              會依老師、課程長度、堂數與課程方向不同而有所調整。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid g2 plan-grid">
            <Reveal>
              <div className="plan">
                <h3>一對一課程</h3>
                <p className="plan-sub">適合需要客製化進度、加強特定目標的學生。</p>
                <ul className="plan-list">
                  <li>依個人程度與目標調整</li>
                  <li>進度彈性</li>
                  <li>老師全程專注在你身上</li>
                </ul>
                <div className="plan-price">基礎課程 NT$250–350 / 堂起</div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="plan">
                <h3>2–5 人小團體</h3>
                <p className="plan-sub">適合朋友、同學、手足或程度相近的學習者一起報名。</p>
                <ul className="plan-list">
                  <li>一起學習更有動力</li>
                  <li>適合程度相近的學習者</li>
                  <li>費用相對較彈性</li>
                </ul>
                <div className="plan-price">依人數與課程類型調整</div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="plan-note">
              <h3>試聽課程</h3>
              <p>
                25 分鐘試聽，用於程度了解、老師媒合與學習建議。
                不確定適合哪一種課程，可以先加 LINE 告訴我們學生年齡、程度、
                學習目標與方便上課時間。
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="plan-cta">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-lg">
                <IcLine size={18} /> 加 LINE 詢問適合方案
              </a>
              <Link href="/contact" className="btn btn-ghost btn-lg">預約試聽課程</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .pg-hero { padding: 72px 0 48px; }
        .pg-hero h1 { margin-top: 10px; }
        .pg-desc { font-size: 16px; color: var(--text-secondary); margin-top: 20px; max-width: 580px; line-height: 1.95; }
        .plan {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg);
          padding: 36px 32px; box-shadow: var(--shadow-xs); height: 100%;
          display: flex; flex-direction: column;
          transition: box-shadow .3s, border-color .3s;
        }
        .plan:hover { box-shadow: var(--shadow-md); border-color: var(--gold-soft); }
        .plan h3 { font-size: 24px; margin-bottom: 10px; }
        .plan-sub { font-size: 15px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 20px; }
        .plan-list { display: grid; gap: 10px; margin-bottom: auto; padding-bottom: 22px; }
        .plan-list li { font-size: 14.5px; color: var(--text); padding-left: 22px; position: relative; }
        .plan-list li::before { content: "✓"; position: absolute; left: 0; color: var(--gold); font-weight: 700; }
        .plan-price { font-size: 14px; font-weight: 600; color: var(--gold); padding-top: 16px; border-top: 1px solid var(--border-light); }
        .plan-note {
          background: var(--bg-warm); border: 1px solid var(--border); border-radius: var(--r-lg);
          padding: 32px; margin-top: 22px; max-width: 680px; margin-left: auto; margin-right: auto;
        }
        .plan-note h3 { font-size: 20px; margin-bottom: 10px; }
        .plan-note p { font-size: 15px; color: var(--text-secondary); line-height: 1.85; }
        .plan-cta { display: flex; gap: 14px; justify-content: center; margin-top: 36px; flex-wrap: wrap; }
      `}</style>
    </>
  );
}
