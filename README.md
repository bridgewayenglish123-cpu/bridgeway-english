# Bridgeway English — 官方網站 v2

線上外師英文課程品牌官網。中文為主、溫暖編輯感、premium 但不浮誇。
Next.js 14 (App Router) + TypeScript，零外部 UI 依賴。

---

## 快速開始

```bash
npm install
npm run dev      # http://localhost:3000
```

## 部署

Vercel：直接 import repo，零設定。
Netlify：`@netlify/plugin-nextjs`，build command `npm run build`。

---

## 頁面

| 路徑 | 頁面 |
|------|------|
| `/` | 首頁（Hero / 痛點 / Why / 課程 / 老師 / 流程 / 方案 / CTA） |
| `/about` | 關於我們 |
| `/courses` | 課程方向 |
| `/teachers` | 認識老師（含老師照片、YouTube 影片連結） |
| `/pricing` | 課程方案 |
| `/contact` | 預約試聽（表單 + LINE） |

---

## 上線前需要調整

1. **表單送出** — `app/contact/page.tsx` 的 `submit()` 目前只前端顯示成功。接 Netlify Forms / Formspree 即可。
2. **網域** — `app/layout.tsx` 的 `metadataBase` 改成正式網域。
3. **老師照片** — 目前直接引用 `bridgewayreading.com` 的圖片。正式上線建議複製到自己的 `/public/images/teachers/` 並更新 `lib/data.ts`。

---

## 已內建

- LINE 連結（`lin.ee/pTz5uRs`）— Header、Footer、FinalCTA、表單旁都有
- 社群連結（Instagram / Facebook / Threads / YouTube）
- 老師 YouTube 介紹影片連結
- SEO metadata + OG tags
- 完整響應式（手機 / 桌機）
- Scroll reveal 動畫 + reduced motion 支援
- 所有老師 / 課程資料集中在 `lib/data.ts`
