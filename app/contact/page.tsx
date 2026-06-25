"use client";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { IcLine } from "@/components/Icons";
import { LINE_URL, social } from "@/lib/data";

const FB_URL = "https://www.facebook.com/profile.php?id=61588545042657";

const steps = [
  { n: "01", title: "告訴我們你的需求", body: "加 LINE 或 FB，告訴我們學生年齡、程度、學習目標與方便上課時間。" },
  { n: "02", title: "安排適合老師", body: "我們協助安排適合的老師與試聽時間，通常 1–2 個工作天內回覆。" },
  { n: "03", title: "完成 25 分鐘試聽", body: "透過試聽了解老師教學方式與學生目前程度，並提供學習建議。" },
  { n: "04", title: "開始正式課程", body: "依照目標安排固定課程，持續練習，穩定累積英文能力。" },
];

const faqs = [
  { q: "老師是哪裡人？", a: "我們的老師皆為精選的優質菲律賓英文教師，擁有豐富的教學經驗，英文溝通能力強、口音清晰、發音標準，以親切耐心著稱。菲律賓英語教育水準高，老師們都能以流利自然的英文授課。" },
  { q: "上課用什麼軟體？", a: "主要使用 Zoom 上課，方便在電腦、平板或手機上操作。部分課程依需要可能採用 ClassIn，我們會事先告知並協助安裝。" },
  { q: "試聽課程要收費嗎？", a: "試聽課程為 25 分鐘，費用固定為 NT$250。試聽完成後，我們會提供學習建議並說明後續課程安排。" },
  { q: "可以請假或改期嗎？", a: "可以。請在上課前至少 12 小時告知，我們會協助安排補課或調整時間。若未提前告知，恕無法安排補課。" },
  { q: "一定要固定上課時間嗎？", a: "原則上希望固定時段，讓學習更有規律、更容易累積進步。若有特殊狀況，可彈性協調。" },
];

export default function Contact() {
  return (
    <>
      <section className="pg-hero">
        <div className="container">
          <Reveal>
            <span className="label">CONTACT</span>
            <h1>聯絡我們</h1>
            <p className="pg-desc">
              有任何問題，歡迎直接加 LINE 或 Facebook 聯絡我們。
              告訴我們學生年齡、程度與學習目標，我們會親自回覆並協助安排。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section ct-section">
        <div className="container ct-grid">
          <Reveal>
            <div className="ct-channels">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="ct-channel ct-line">
                <div className="ct-ch-icon">
                  <IcLine size={28} />
                </div>
                <div className="ct-ch-info">
                  <strong>加 LINE 官方帳號</strong>
                  <span>最快速的聯絡方式，通常當天回覆</span>
                </div>
                <span className="ct-ch-arrow">→</span>
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="ct-channel ct-fb">
                <div className="ct-ch-icon ct-ch-icon--fb">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
                <div className="ct-ch-info">
                  <strong>Facebook 訊息</strong>
                  <span>傳送訊息給我們的 Facebook 專頁</span>
                </div>
                <span className="ct-ch-arrow">→</span>
              </a>

              <div className="ct-note">
                <p>我們通常在 <strong>1–2 個工作天內</strong>回覆。若有急需，建議優先使用 LINE 聯絡。</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="ct-right">
              <div className="ct-steps-card">
                <h3>開始的流程</h3>
                <div className="ct-steps">
                  {steps.map(s => (
                    <div key={s.n} className="ct-step">
                      <span className="ct-step-n">{s.n}</span>
                      <div>
                        <strong>{s.title}</strong>
                        <p>{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container faq-wrap">
          <Reveal>
            <div className="sh">
              <span className="label">FAQ</span>
              <h2>常見問題</h2>
            </div>
          </Reveal>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .pg-hero { padding: 72px 0 48px; }
        .pg-desc { font-size: 16px; color: var(--text-secondary); margin-top: 20px; max-width: 520px; line-height: 1.95; }
        .ct-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        .ct-channels { display: flex; flex-direction: column; gap: 14px; }
        .ct-channel {
          display: flex; align-items: center; gap: 18px;
          background: var(--surface); border: 1.5px solid var(--border);
          border-radius: var(--r-lg); padding: 22px 24px;
          box-shadow: var(--shadow-xs); transition: border-color .2s, box-shadow .2s, transform .2s;
          text-decoration: none;
        }
        .ct-channel:hover { border-color: var(--gold); box-shadow: var(--shadow-sm); transform: translateY(-2px); }
        .ct-ch-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: #06C755; color: #fff;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ct-ch-icon--fb { background: #1877F2; }
        .ct-ch-info { flex: 1; }
        .ct-ch-info strong { display: block; font-size: 16px; color: var(--navy); margin-bottom: 4px; }
        .ct-ch-info span { font-size: 13.5px; color: var(--text-secondary); }
        .ct-ch-arrow { font-size: 18px; color: var(--gold); font-weight: 600; flex-shrink: 0; }
        .ct-note { background: var(--bg-alt); border-radius: var(--r); padding: 16px 20px; margin-top: 4px; }
        .ct-note p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }
        .ct-note strong { color: var(--navy); }
        .ct-steps-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 28px 26px; box-shadow: var(--shadow-xs); }
        .ct-steps-card h3 { font-size: 18px; margin-bottom: 22px; color: var(--navy); }
        .ct-steps { display: flex; flex-direction: column; gap: 20px; }
        .ct-step { display: flex; gap: 16px; align-items: flex-start; }
        .ct-step-n { font-size: 11px; font-weight: 700; color: var(--gold); background: var(--gold-bg); border: 1px solid rgba(184,149,62,.2); border-radius: 6px; padding: 3px 7px; flex-shrink: 0; margin-top: 3px; letter-spacing: .04em; }
        .ct-step strong { display: block; font-size: 14.5px; color: var(--navy); margin-bottom: 4px; }
        .ct-step p { font-size: 13.5px; color: var(--text-secondary); line-height: 1.65; }
        .faq-wrap { max-width: 740px; }
        .faq-list { display: flex; flex-direction: column; gap: 14px; margin-top: 36px; }
        .faq-item { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 22px 24px; box-shadow: var(--shadow-xs); }
        .faq-item h3 { font-size: 16px; color: var(--navy); margin-bottom: 10px; }
        .faq-item p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; }
        @media (max-width: 820px) { .ct-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
