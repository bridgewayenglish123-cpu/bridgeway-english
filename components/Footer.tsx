import Link from "next/link";
import { LINE_URL, social } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="container">
        <div className="ft-grid">
          <div className="ft-brand">
            <div className="ft-logo">Bridgeway <em>English</em></div>
            <p className="ft-desc">
              線上外師英文課程，陪你把英文輸入變成口說與實際表達能力。
            </p>
            <div className="ft-social">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a href={social.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads">Th</a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="ft-col">
            <h4>探索</h4>
            <Link href="/about">關於我們</Link>
            <Link href="/courses">課程方向</Link>
            <Link href="/teachers">認識老師</Link>
            <Link href="/pricing">課程方案</Link>
          </div>

          <div className="ft-col">
            <h4>開始學習</h4>
            <Link href="/contact">預約試聽</Link>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer">加 LINE 詢問</a>
            <a href="https://bridgewayreading.com/articles" target="_blank" rel="noopener noreferrer">
              Bridgeway Reading
            </a>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} Bridgeway English. All rights reserved.</span>
        </div>
      </div>

      <style>{`
        .ft { background: var(--navy); color: #b8becb; padding: 72px 0 36px; }
        .ft h4 { color: #fff; font-size: 13px; letter-spacing: .06em; margin-bottom: 16px; font-family: inherit; }
        .ft-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 44px; padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,.08); }
        .ft-logo { font-family: "Fraunces", serif; font-size: 22px; color: #fff; margin-bottom: 14px; }
        .ft-logo em { font-style: italic; color: var(--gold-soft); }
        .ft-desc { font-size: 14px; line-height: 1.75; color: #8b95a8; max-width: 340px; }
        .ft-social { display: flex; gap: 10px; margin-top: 18px; }
        .ft-social a {
          width: 34px; height: 34px; border-radius: 9px; background: rgba(255,255,255,.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: #8b95a8; transition: background .2s, color .2s;
        }
        .ft-social a:hover { background: rgba(255,255,255,.12); color: #fff; }
        .ft-col { display: flex; flex-direction: column; gap: 11px; }
        .ft-col a { font-size: 14px; color: #8b95a8; transition: color .2s; width: fit-content; }
        .ft-col a:hover { color: var(--gold-soft); }
        .ft-bottom { padding-top: 24px; font-size: 12.5px; color: #5f6878; }
        @media (max-width: 700px) { .ft-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
    </footer>
  );
}
