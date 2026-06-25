import Link from "next/link";
import { LINE_URL } from "@/lib/data";
import { IcLine } from "./Icons";

export default function FinalCTA() {
  return (
    <section className="fcta">
      <div className="container fcta-inner">
        <span className="fcta-label">START YOUR JOURNEY</span>
        <h2>準備好開始了嗎？</h2>
        <p className="fcta-sub">
          不確定適合哪一種課程也沒關係。加 LINE 告訴我們學生年齡、程度與學習目標，<br />
          我們會協助安排適合的老師與課程方向。
        </p>
        <div className="fcta-actions">
          <Link href="/contact" className="btn btn-lg fcta-btn-light">預約試聽課程</Link>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-lg">
            <IcLine size={18} /> 加 LINE 詢問
          </a>
        </div>
      </div>
      <style>{`
        .fcta {
          background: var(--navy); padding: 96px 0; position: relative; overflow: hidden;
        }
        .fcta::before {
          content: ""; position: absolute; inset: 0;
          background: radial-gradient(ellipse 50% 70% at 50% -10%, rgba(184,149,62,.12), transparent 65%);
          pointer-events: none;
        }
        .fcta-inner { position: relative; text-align: center; max-width: 640px; }
        .fcta-label { font-size: 12px; font-weight: 700; letter-spacing: .16em; color: var(--gold-soft); }
        .fcta h2 { color: #fff; font-size: clamp(28px, 4.2vw, 40px); margin-top: 16px; }
        .fcta-sub { color: #9aa4b8; font-size: 15px; margin-top: 18px; line-height: 1.9; }
        .fcta-actions { display: flex; gap: 14px; justify-content: center; margin-top: 32px; flex-wrap: wrap; }
        .fcta-btn-light { background: var(--bg); color: var(--navy); }
        .fcta-btn-light:hover { background: #fff; transform: translateY(-2px); }
        @media (max-width: 600px) { .fcta { padding: 68px 0; } .fcta-actions .btn { width: 100%; } }
      `}</style>
    </section>
  );
}
