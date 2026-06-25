import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import { teachers, courses, LINE_URL } from "@/lib/data";
import { IcShield, IcCompass, IcSpeak, IcHeart, IcArrow, IcLine, IcPlay } from "@/components/Icons";

const why = [
  { Icon: IcShield, title: "精選師資", body: "每位老師都經過篩選，重視教學經驗、溝通能力與耐心陪伴。不需要擔心老師品質不穩定。" },
  { Icon: IcCompass, title: "依需求安排", body: "依照學生年齡、程度、目標與學習狀況，安排適合的老師與課程方向。" },
  { Icon: IcSpeak, title: "從讀懂到說出來", body: "搭配 Bridgeway Reading 文章練習，把閱讀理解變成英文口說與實際表達能力。" },
  { Icon: IcHeart, title: "穩定陪伴", body: "提供課程安排、學習建議與課後回饋，讓學習不只是上課，而是持續的累積。" },
];

const steps = [
  { n: "1", title: "加 LINE 詢問", body: "告訴我們學生年齡、程度、學習目標與方便上課時間。" },
  { n: "2", title: "安排適合老師", body: "我們協助安排適合的老師與試聽方向。" },
  { n: "3", title: "完成試聽", body: "透過 25 分鐘試聽，了解老師教學方式與學生目前程度。" },
  { n: "4", title: "開始正式課程", body: "依照目標安排固定課程，持續練習，穩定累積。" },
];

export default function Home() {
  return (
    <>
      {/* ——— HERO ——— */}
      <section className="hero">
        <div className="container hero-inner">
          <Reveal>
            <div className="hero-copy">
              <span className="label">BRIDGEWAY ENGLISH</span>
              <h1>一步一步，<br />建立真正敢開口的<br />英文能力。</h1>
              <p className="hero-en en-accent">Premium online English lessons with quality tutors.</p>
              <p className="hero-desc">
                Bridgeway English 提供高品質線上英文家教課程，依照學生年齡、程度與目標，
                安排適合的老師與課程方向。小規模教學，精選師資，
                一對一或 2–5 人小團體，陪你一步一步建立真正敢開口的英文能力。
              </p>
              <div className="hero-meta">
                <span>小規模教學</span>
                <span>精選線上師資</span>
                <span>一對一 / 2–5 人小團體</span>
                <span>基礎課程 NT$250–350 / 堂起</span>
              </div>
              <div className="hero-actions">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-lg">
                  <IcLine size={18} /> 加 LINE 詢問課程
                </a>
                <Link href="/courses" className="btn btn-ghost btn-lg">了解課程方向</Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="hero-teachers">
              {teachers.slice(0, 3).map((t) => (
                <div key={t.slug} className="ht-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.photoUrl} alt={t.name} className="ht-photo" />
                  <div className="ht-info">
                    <strong>{t.name}</strong>
                    <span>{t.tagline}</span>
                  </div>
                </div>
              ))}
              <Link href="/teachers" className="ht-more">
                認識所有老師 <IcArrow size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— PAIN POINTS ——— */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="sh center">
              <span className="label" style={{ justifyContent: "center" }}>你是不是也有這種感覺？</span>
              <h2>看得懂，卻開不了口。</h2>
            </div>
          </Reveal>
          <div className="grid g3 pain-grid">
            {[
              "看得懂英文文章，但要開口時不知道怎麼說",
              "背過很多單字，但聊天時用不出來",
              "孩子學了英文，卻不太敢開口回答",
              "上過英文課，卻缺少穩定的練習方式",
              "想練口說，但不知道該聊什麼主題",
              "想準備多益、雅思、托福，但需要老師協助整理方向",
            ].map((text, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="pain-card">
                  <span className="pain-num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="pain-bottom">
              Bridgeway English 想解決的，不只是「再上一堂英文課」，
              而是幫你把英文輸入慢慢轉成真正能說出口的能力。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——— WHY ——— */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sh">
              <span className="label">WHY BRIDGEWAY</span>
              <h2>為什麼選擇 Bridgeway English？</h2>
            </div>
          </Reveal>
          <div className="grid g4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="card why-card">
                  <span className="why-icon"><w.Icon size={22} /></span>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— COURSES ——— */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="sh">
              <span className="label">課程方向</span>
              <h2>找到適合你的學習方向。</h2>
            </div>
          </Reveal>
          <div className="grid g3">
            {courses.map((c, i) => (
              <Reveal key={c.id} delay={i * 60}>
                <div className="card course-card">
                  <h3>{c.title}</h3>
                  <p className="cc-desc">{c.desc}</p>
                  <div className="cc-tags">
                    {c.contents.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/courses" className="btn btn-ghost">查看完整課程說明 →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— TEACHERS ——— */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sh">
              <span className="label">MEET OUR TEACHERS</span>
              <h2>認識我們的老師</h2>
              <p className="sh-desc">
                每位老師都能依照學生年齡、程度與學習目標調整課程內容。
                我們會根據學生需求，協助安排最適合的老師與課程方向。
              </p>
            </div>
          </Reveal>
          <div className="grid g2 teacher-grid">
            {teachers.map((t, i) => (
              <Reveal key={t.slug} delay={i * 80}>
                <article className="card tc">
                  <div className="tc-top">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.photoUrl} alt={t.name} className="tc-photo" />
                    <div className="tc-info">
                      {t.isLead && <span className="tc-badge">Lead Teacher</span>}
                      <h3>{t.name}</h3>
                      <span className="tc-role">{t.role}</span>
                      <span className="tc-tagline">{t.tagline}</span>
                    </div>
                  </div>
                  <div className="tc-tags">
                    {t.tags.slice(0, 5).map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <p className="tc-style">{t.style}</p>
                  <div className="tc-avail">
                    <span className="tc-avail-label">可預約時段</span>
                    {t.availability}
                  </div>
                  <div className="tc-actions">
                    <Link href={`/teachers#${t.slug}`} className="tc-link">了解更多 →</Link>
                    <a href={t.youtubeUrl} target="_blank" rel="noopener noreferrer" className="tc-yt">
                      <IcPlay size={12} /> 觀看老師介紹
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— HOW IT WORKS ——— */}
      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <div className="sh center">
              <span className="label" style={{ justifyContent: "center" }}>如何開始</span>
              <h2>四個步驟，就可以開始。</h2>
            </div>
          </Reveal>
          <div className="grid g4 steps-grid">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="step">
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— PRICING PREVIEW ——— */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="sh center">
              <span className="label" style={{ justifyContent: "center" }}>課程方案</span>
              <h2>依需求安排的課程方案</h2>
              <p className="sh-desc">
                基礎課程約 NT$250–350 / 堂起。進階課程、考試英文、商業英文，
                會依老師、課程長度與方向不同而調整。
              </p>
            </div>
          </Reveal>
          <div className="pricing-row">
            <Reveal><div className="pricing-item">
              <h3>一對一課程</h3>
              <p>依個人程度與目標調整，進度彈性，老師全程專注。</p>
            </div></Reveal>
            <Reveal delay={80}><div className="pricing-item">
              <h3>2–5 人小團體</h3>
              <p>一起學習更有動力，適合程度相近的學習者，費用相對彈性。</p>
            </div></Reveal>
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <IcLine size={18} /> 加 LINE 詢問適合方案
              </a>
              <div style={{ marginTop: 14 }}>
                <Link href="/pricing" style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                  查看完整方案 →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />

      <style>{`
        /* HERO */
        .hero { padding: 64px 0 80px; }
        .hero-inner { display: grid; grid-template-columns: 1.1fr .9fr; gap: 56px; align-items: center; }
        .hero h1 { font-size: clamp(36px, 5.4vw, 56px); line-height: 1.15; margin-top: 10px; }
        .hero-en { font-size: 19px; margin-top: 18px; }
        .hero-desc { font-size: 15.5px; color: var(--text-secondary); margin-top: 20px; line-height: 1.95; max-width: 520px; }
        .hero-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
        .hero-meta span { font-size: 13px; font-weight: 600; color: var(--navy); background: var(--gold-bg); border: 1px solid rgba(184,149,62,.15); border-radius: 99px; padding: 6px 14px; }
        .hero-actions { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }

        .hero-teachers { display: flex; flex-direction: column; gap: 14px; }
        .ht-card { display: flex; align-items: center; gap: 16px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 16px 20px; box-shadow: var(--shadow-xs); transition: transform .3s, box-shadow .3s; }
        .ht-card:hover { transform: translateX(4px); box-shadow: var(--shadow-sm); }
        .ht-photo { width: 54px; height: 54px; border-radius: 13px; object-fit: cover; flex-shrink: 0; }
        .ht-info strong { display: block; font-size: 16px; color: var(--navy); }
        .ht-info span { font-size: 13px; color: var(--text-secondary); }
        .ht-more { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: var(--gold); padding-left: 4px; }

        /* PAIN */
        .pain-card { display: flex; align-items: flex-start; gap: 16px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 22px 20px; box-shadow: var(--shadow-xs); }
        .pain-num { font-size: 11px; font-weight: 700; color: var(--gold); background: var(--gold-bg); border: 1px solid rgba(184,149,62,.2); border-radius: 6px; padding: 3px 7px; flex-shrink: 0; margin-top: 2px; letter-spacing: .04em; }
        .pain-card p { font-size: 15px; color: var(--text); line-height: 1.7; }
        .pain-bottom { text-align: center; font-size: 16px; color: var(--text-secondary); margin-top: 36px; max-width: 580px; margin-left: auto; margin-right: auto; line-height: 1.85; }

        /* WHY */
        .why-card { display: flex; flex-direction: column; }
        .why-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: var(--gold-bg); color: var(--gold); margin-bottom: 18px; }
        .why-card h3 { margin-bottom: 10px; }
        .why-card p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.8; }

        /* COURSES */
        .cc-desc { font-size: 14.5px; color: var(--text-secondary); margin: 8px 0 16px; line-height: 1.7; }
        .cc-tags { display: flex; flex-wrap: wrap; gap: 7px; }

        /* TEACHERS */
        .tc { display: flex; flex-direction: column; }
        .tc-top { display: flex; gap: 18px; align-items: center; margin-bottom: 16px; }
        .tc-photo { width: 72px; height: 72px; border-radius: 17px; object-fit: cover; flex-shrink: 0; border: 2px solid var(--border-light); }
        .tc-badge { font-size: 11px; font-weight: 700; color: var(--gold); background: var(--gold-bg); border-radius: 99px; padding: 3px 10px; display: inline-block; margin-bottom: 4px; }
        .tc-role { display: block; font-size: 13px; color: var(--text-muted); margin-top: 2px; }
        .tc-tagline { display: block; font-size: 13.5px; color: var(--gold); font-weight: 600; margin-top: 4px; }
        .tc-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
        .tc-style { font-size: 14.5px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 12px; }
        .tc-avail { font-size: 13.5px; color: var(--text-secondary); margin-bottom: 16px; }
        .tc-avail-label { display: block; font-size: 11px; font-weight: 700; letter-spacing: .06em; color: var(--text-muted); margin-bottom: 3px; }
        .tc-actions { display: flex; gap: 16px; margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border-light); }
        .tc-link { font-size: 14px; font-weight: 600; color: var(--navy); }
        .tc-link:hover { color: var(--gold); }
        .tc-yt { font-size: 13px; color: var(--text-muted); display: inline-flex; align-items: center; gap: 5px; }
        .tc-yt:hover { color: var(--navy); }

        /* STEPS */
        .step { position: relative; padding-top: 10px; }
        .step::before { content: ""; position: absolute; top: 0; left: 0; width: 32px; height: 2px; background: var(--gold-soft); }
        .step-n { font-family: "Fraunces", serif; font-size: 42px; font-weight: 400; color: var(--bg-deep); display: block; margin: 10px 0 8px; }
        .step h3 { margin-bottom: 8px; }
        .step p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.7; }

        /* PRICING */
        .pricing-row { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; max-width: 680px; margin: 0 auto; }
        .pricing-item { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 32px 28px; box-shadow: var(--shadow-xs); text-align: center; }
        .pricing-item h3 { margin-bottom: 12px; }
        .pricing-item p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; }

        @media (max-width: 940px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hero-teachers { max-width: 400px; }
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .steps-grid { grid-template-columns: 1fr; }
          .pricing-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
