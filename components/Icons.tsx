import React from "react";
type P = { size?: number; className?: string };
const b = (s = 24) => ({
  width: s, height: s, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
});

export const IcShield = ({ size }: P) => <svg {...b(size)}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>;
export const IcCompass = ({ size }: P) => <svg {...b(size)}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></svg>;
export const IcSpeak = ({ size }: P) => <svg {...b(size)}><path d="M4 5h16v10H8l-4 4V5z" /><path d="M8 9h8M8 12h5" /></svg>;
export const IcHeart = ({ size }: P) => <svg {...b(size)}><path d="M12 20s-7-4.3-7-9.2c0-2.4 1.7-3.8 3.5-3.8 1.3 0 2.5.7 3.5 2 1-1.3 2.2-2 3.5-2 1.8 0 3.5 1.4 3.5 3.8 0 4.9-7 9.2-7 9.2z" /></svg>;
export const IcArrow = ({ size }: P) => <svg {...b(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const IcCheck = ({ size }: P) => <svg {...b(size)}><path d="M5 12l5 5L20 7" /></svg>;
export const IcPlay = ({ size }: P) => <svg {...b(size)}><polygon points="6,3 20,12 6,21" fill="currentColor" stroke="none" /></svg>;
export const IcLine = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 5.6 2 10c0 3.9 3.5 7.2 8.3 7.9.3.07.75.22.86.5.1.26.07.66.03.92l-.14.84c-.04.25-.2.97.85.53s5.64-3.32 7.7-5.69C20.9 13.4 22 11.8 22 10c0-4.4-4.5-8-10-8z" />
  </svg>
);
