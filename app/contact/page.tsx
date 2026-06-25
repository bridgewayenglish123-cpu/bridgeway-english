"use client";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { IcLine } from "@/components/Icons";
import { LINE_URL } from "@/lib/data";

const courseTypes = ["兒童英文", "成人口說", "閱讀理解", "文法寫作", "多益 / 雅思 / 托福", "商業英文", "團體課程", "還不確定"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", age: "", level: "", goal: "", course: courseTypes[0], time: "", contact: "", notes: "",
  });
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const [error, setError] = useState("");

  const submit = async () => {
    if (!form.name || !form.contact) {
      setError("請填寫姓名與聯絡方式");
      return;
    }
    setError("");
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...form,
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("送出失敗，請直接加 LINE 聯絡我們。");
      }
    } catch {
      setError("送出失敗，請直接加 LINE 聯絡我們。");
    }
  };

  return (
    <>
      <section className="pg-hero">
        <div className="container">
          <Reveal>
            <span className="label">BOOK A TRIAL</span>
            <h1>預約試聽課程</h1>
            <p className="pg-desc">
              填寫以下資訊，我們會協助你找到適合的老師與學習方向。
              也歡迎直接加 LINE 詢問。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section ct-section">
        <div className="container ct-grid">
          <Reveal>
            <div className="ct-form">
              {sent ? (
                <div className="ct-ok">
                  <div className="ct-ok-icon">✓</div>
                  <h2>已收到你的資訊</h2>
                  <p>我們會盡快與你聯絡，協助安排試聽課程。</p>
                </div>
              ) : (
                <div className="ct-fields">
                  <div className="ct-row">
                    <Fld label="學生姓名" req>
                      <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="王小明" />
                    </Fld>
                    <Fld label="年齡">
                      <input value={form.age} onChange={e => set("age", e.target.value)} placeholder="8 / 成人" />
                    </Fld>
                  </div>
                  <Fld label="目前英文程度">
                    <input value={form.level} onChange={e => set("level", e.target.value)} placeholder="初學 / 有基礎 / 進階" />
                  </Fld>
                  <Fld label="學習目標">
                    <input value={form.goal} onChange={e => set("goal", e.target.value)} placeholder="想加強口說 / 準備 IELTS / 學校英文…" />
                  </Fld>
                  <Fld label="想上的課程類型">
                    <select value={form.course} onChange={e => set("course", e.target.value)}>
                      {courseTypes.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </Fld>
                  <Fld label="可上課時間">
                    <input value={form.time} onChange={e => set("time", e.target.value)} placeholder="平日晚上 / 週末上午…" />
                  </Fld>
                  <Fld label="LINE ID / Email" req>
                    <input value={form.contact} onChange={e => set("contact", e.target.value)} placeholder="LINE ID 或 Email" />
                  </Fld>
                  <Fld label="備註">
                    <textarea rows={3} value={form.notes} onChange={e => set("notes", e.target.value)} placeholder="任何想讓我們知道的事…" />
                  </Fld>
                  {error && <p style={{ color: "#c0392b", fontSize: 14, marginTop: -6 }}>{error}</p>}
                  <button className="btn btn-primary btn-lg ct-submit" onClick={submit}>
                    預約試聽課程
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="ct-aside">
              <div className="ct-card ct-line-card">
                <h3>想先聊聊也沒問題</h3>
                <p>直接加入我們的 LINE，告訴我們你的需求，我們會親自回覆。</p>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-lg" style={{ marginTop: 16 }}>
                  <IcLine size={18} /> 加 LINE 詢問
                </a>
              </div>
              <div className="ct-card">
                <h3>接下來的流程</h3>
                <ol className="ct-steps">
                  <li>我們收到資訊後會盡快聯絡</li>
                  <li>安排一堂 25 分鐘試聽課</li>
                  <li>試聽後提供學習建議</li>
                  <li>再決定是否報名正式課程</li>
                </ol>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <style jsx>{`
        .pg-hero { padding: 72px 0 48px; }
        .pg-desc { font-size: 16px; color: var(--text-secondary); margin-top: 20px; max-width: 520px; line-height: 1.95; }
        .ct-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 36px; align-items: start; }
        .ct-form { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 36px 32px; box-shadow: var(--shadow-xs); }
        .ct-fields { display: flex; flex-direction: column; gap: 18px; }
        .ct-row { display: grid; grid-template-columns: 1.4fr 1fr; gap: 14px; }
        .ct-submit { width: 100%; margin-top: 6px; }
        .ct-ok { text-align: center; padding: 28px 10px; }
        .ct-ok-icon { width: 56px; height: 56px; border-radius: 50%; background: var(--gold-bg); color: var(--gold); display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 18px; border: 1.5px solid var(--gold-soft); }
        .ct-ok h2 { font-size: 22px; }
        .ct-ok p { color: var(--text-secondary); margin-top: 12px; }
        .ct-aside { display: flex; flex-direction: column; gap: 18px; }
        .ct-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 26px 24px; box-shadow: var(--shadow-xs); }
        .ct-card h3 { font-size: 18px; margin-bottom: 10px; }
        .ct-card p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; }
        .ct-line-card { background: var(--navy); border-color: var(--navy); }
        .ct-line-card h3 { color: #fff; }
        .ct-line-card p { color: #9aa4b8; }
        .ct-steps { padding-left: 20px; display: grid; gap: 10px; list-style: decimal; }
        .ct-steps li { font-size: 14.5px; color: var(--text-secondary); }
        .ct-steps li::marker { color: var(--gold); font-weight: 700; }
        @media (max-width: 820px) { .ct-grid { grid-template-columns: 1fr; } }
        @media (max-width: 480px) { .ct-row { grid-template-columns: 1fr; } .ct-form { padding: 28px 22px; } }
      `}</style>
    </>
  );
}

function Fld({ label, req, children }: { label: string; req?: boolean; children: React.ReactNode }) {
  return (
    <label className="fld">
      <span className="fld-label">{label}{req && <i> *</i>}</span>
      {children}
      <style jsx>{`
        .fld { display: flex; flex-direction: column; gap: 7px; }
        .fld-label { font-size: 13px; font-weight: 600; color: var(--navy); }
        .fld-label i { color: var(--gold); font-style: normal; }
        .fld :global(input), .fld :global(select), .fld :global(textarea) {
          font-family: inherit; font-size: 15px; color: var(--text);
          background: var(--bg); border: 1.5px solid var(--border); border-radius: 10px;
          padding: 12px 14px; width: 100%; transition: border-color .2s, background .2s; resize: vertical;
        }
        .fld :global(input:focus), .fld :global(select:focus), .fld :global(textarea:focus) {
          outline: none; border-color: var(--gold); background: var(--surface);
        }
        .fld :global(::placeholder) { color: #b0b4bd; }
      `}</style>
    </label>
  );
}
