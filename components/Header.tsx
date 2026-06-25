"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LINE_URL } from "@/lib/data";

const nav = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我們" },
  { href: "/courses", label: "課程方向" },
  { href: "/teachers", label: "認識老師" },
  { href: "/pricing", label: "課程方案" },
  { href: "/contact", label: "聯絡我們" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn(); window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`hd ${scrolled ? "hd--s" : ""}`}>
      <div className="container hd-inner">
        <Link href="/" className="hd-brand">
          Bridgeway <span>English</span>
        </Link>

        <nav className="hd-nav">
          {nav.map(n => (
            <Link key={n.href} href={n.href}
              className={`hd-link ${pathname === n.href ? "active" : ""}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hd-actions">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
            加 LINE 詢問
          </a>
        </div>

        <button className={`hd-burger ${open ? "open" : ""}`} aria-label="選單" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="hd-mobile">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="hd-mob-link">{n.label}</Link>
          ))}
          <Link href="/contact" className="hd-mob-link">預約試聽</Link>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-lg" style={{ marginTop: 8 }}>
            加 LINE 詢問課程
          </a>
        </div>
      )}

      <style jsx>{`
        .hd {
          position: sticky; top: 0; z-index: 100;
          background: rgba(250, 248, 244, 0.85);
          backdrop-filter: saturate(130%) blur(14px);
          -webkit-backdrop-filter: saturate(130%) blur(14px);
          border-bottom: 1px solid transparent;
          transition: border-color .3s, box-shadow .3s;
        }
        .hd--s { border-bottom-color: var(--border); box-shadow: 0 2px 16px rgba(26,39,68,.04); }
        .hd-inner { display: flex; align-items: center; height: 68px; gap: 12px; }
        .hd-brand {
          font-family: "Fraunces", serif; font-size: 20px; font-weight: 600;
          color: var(--navy); letter-spacing: -0.02em; margin-right: auto;
        }
        .hd-brand span { font-weight: 400; font-style: italic; color: var(--text-secondary); }
        .hd-nav { display: flex; gap: 4px; }
        .hd-link {
          font-size: 14.5px; font-weight: 500; color: var(--text-secondary);
          padding: 7px 16px; border-radius: 99px; transition: color .2s, background .2s;
        }
        .hd-link:hover { color: var(--navy); }
        .hd-link.active { color: var(--navy); background: var(--bg-warm); }
        .hd-actions { margin-left: 12px; }
        .hd-burger {
          display: none; flex-direction: column; gap: 4.5px;
          background: none; border: none; cursor: pointer; padding: 8px;
        }
        .hd-burger span { width: 20px; height: 1.8px; background: var(--navy); border-radius: 2px; transition: transform .3s, opacity .3s; }
        .hd-burger.open span:nth-child(1) { transform: translateY(6.3px) rotate(45deg); }
        .hd-burger.open span:nth-child(2) { opacity: 0; }
        .hd-burger.open span:nth-child(3) { transform: translateY(-6.3px) rotate(-45deg); }
        .hd-mobile {
          display: flex; flex-direction: column; gap: 2px;
          padding: 12px 20px 24px; background: var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .hd-mob-link {
          display: block; font-size: 17px; font-weight: 500; color: var(--navy);
          padding: 14px 8px; border-bottom: 1px solid var(--border-light);
        }
        @media (max-width: 820px) {
          .hd-nav, .hd-actions { display: none; }
          .hd-burger { display: flex; }
        }
      `}</style>
    </header>
  );
}
