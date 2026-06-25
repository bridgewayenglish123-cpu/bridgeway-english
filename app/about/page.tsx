import { Reveal } from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於我們 About",
  description: "Bridgeway English 是來自台灣的線上英文學習品牌，重視老師品質、穩定陪伴與課後回饋，陪伴學生一步一步建立敢開口的英文能力。",
};

const beliefs = [
  { title: "穩定累積，而非速成", body: "英文學習不是短期速成，而是一點一滴穩定累積。我們協助學生建立持續練習的習慣。" },
  { title: "重視老師品質", body: "每位老師都經過篩選，重視教學經驗、溝通能力與穩定度。不是隨便媒合老師的平台。" },
  { title: "找到適合的節奏", body: "每個學生的程度、年齡、目標不同，我們協助找到適合的學習節奏與課程方向。" },
  { title: "真的敢開口", body: "不只是學英文，而是真的敢開口、自在地用英文表達想法。" },
];

export default function About() {
  return (
    <>
      <section className="pg-hero">
        <div className="container">
          <Reveal>
            <span className="label">ABOUT</span>
            <h1>關於 Bridgeway English</h1>
            <p className="pg-desc">
              Bridgeway English 是來自台灣的線上英文家教品牌。我們不是隨便媒合老師的平台，
              而是有規劃、有篩選、有陪伴的精緻線上英文課程。
            </p>
            <p className="pg-desc" style={{ marginTop: 16 }}>
              所有老師皆為精選的優質菲律賓英文教師，經驗豐富、口音清晰、親切耐心。
              我們透過課前了解、試聽評估、課程安排與課後回饋，依照每位學生的年齡、程度與目標，
              陪伴他們一步一步建立真正敢開口的英文能力。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="sh center">
              <span className="label" style={{ justifyContent: "center" }}>WHAT WE BELIEVE</span>
              <h2>我們相信的事</h2>
            </div>
          </Reveal>
          <div className="grid g2">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div className="card belief">
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <Reveal>
            <span className="label">OUR APPROACH</span>
            <h2>我們怎麼做到的</h2>
            <p className="about-prose">
              每位學生在開始之前，我們都會先了解他的年齡、程度、學習目標與可上課時間，
              再安排最適合的老師與課程方向。不論是兒童英文、成人口說、考試備考還是商業英文，
              每一堂課都是為你量身安排的。
            </p>
            <p className="about-prose">
              我們的老師皆為精選的優質菲律賓英文教師，具備豐富的線上教學經驗，
              親切耐心、口音清晰，特別擅長陪伴學生建立開口說英文的信心。
              搭配自製的 Bridgeway Reading 詞彙與閱讀教材，讓每堂課都有具體的學習素材與進度。
            </p>
            <blockquote className="about-quote">
              一步一步，建立真正敢開口的英文能力。
              <span className="en-accent">Premium online English lessons with quality tutors.</span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        .pg-hero { padding: 72px 0 48px; }
        .pg-hero h1 { margin-top: 10px; }
        .pg-desc { font-size: 16px; color: var(--text-secondary); margin-top: 20px; max-width: 620px; line-height: 1.95; }
        .belief h3 { margin-bottom: 10px; }
        .belief p { font-size: 15px; color: var(--text-secondary); line-height: 1.8; }
        .about-prose { font-size: 16px; color: var(--text-secondary); margin-top: 20px; line-height: 2; }
        .about-quote {
          font-size: 24px; font-weight: 700; color: var(--navy); line-height: 1.4;
          margin: 40px 0 0; padding: 24px 0 0 24px; border-left: 3px solid var(--gold);
        }
        .about-quote .en-accent { display: block; font-size: 17px; margin-top: 12px; }
      `}</style>
    </>
  );
}
