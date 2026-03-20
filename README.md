# 📊 DataVault Analytics
### Fuel Revenue Intelligence Platform

> A production-grade, fully client-side analytics dashboard — built with clean, modular vanilla JS. Every concern is separated into its own file. No frameworks. No bundler. Deploys anywhere with a single `git push`.

---

## 🗂 Project Structure

```
datavault-analytics/
│
├── index.html              # App shell — markup only, zero inline JS/CSS
│
├── css/
│   └── style.css           # All styling, theming, layout, animations
│
├── js/
│   ├── config.js           # Constants: colors, keys, Chart.js defaults
│   ├── storage.js          # localStorage DB: load, save, add, delete, clear
│   ├── helpers.js          # Pure utils: fmtCr, fmtNum, showToast, switchTab
│   ├── charts.js           # 5 Chart.js renderers: line, doughnut, bar, polar
│   ├── dashboard.js        # KPI cards + outlet leaderboard + master refresh()
│   ├── records.js          # Paginated, searchable, deletable records table
│   ├── form.js             # Manual entry form: read → validate → compute → save
│   └── init.js             # Bootstrap: loadDB → seed if empty → refresh()
│
├── data/
│   └── sampleData.js       # 30 pre-built FY2024 example records
│
├── .gitignore
└── README.md
```

---

## 🔄 Script Load Order

`index.html` loads scripts in this exact order (each file depends on the ones above):

| # | File | Provides |
|---|------|----------|
| 1 | `js/config.js`       | `STORAGE_KEY`, `PAGE_SIZE`, `FUEL_COLORS`, `ZONE_COLORS`, `GRID` |
| 2 | `js/storage.js`      | `DB`, `loadDB()`, `saveDB()`, `addRecords()`, `deleteRecord()`, `clearAllData()` |
| 3 | `js/helpers.js`      | `fmtCr()`, `fmtNum()`, `showToast()`, `switchTab()`, `destroyChart()` |
| 4 | `js/charts.js`       | `renderMonthly()`, `renderMix()`, `renderZone()`, `renderPayment()`, `renderVolumeChart()` |
| 5 | `js/dashboard.js`    | `refresh()`, `renderOutletTable()` |
| 6 | `js/records.js`      | `renderTable()`, `changePage()` |
| 7 | `js/form.js`         | `saveRecord()`, `resetForm()` |
| 8 | `data/sampleData.js` | `EXAMPLE_DATA[]` |
| 9 | `js/init.js`         | Bootstrap IIFE — calls `loadDB()` → seeds → `refresh()` |

---

## ✨ Features

| Feature | File |
|---------|------|
| 5 live KPI cards | `dashboard.js` |
| Monthly Revenue Trend (line) | `charts.js → renderMonthly()` |
| Fuel Revenue Mix (doughnut) | `charts.js → renderMix()` |
| Zone Performance (bar) | `charts.js → renderZone()` |
| Payment Mode Split (polar) | `charts.js → renderPayment()` |
| Fuel Volume (bar) | `charts.js → renderVolumeChart()` |
| Top 10 Outlet Leaderboard | `dashboard.js → renderOutletTable()` |
| Manual entry form | `form.js` |
| Paginated records table | `records.js` |
| Search / filter records | `records.js` |
| Delete individual records | `storage.js → deleteRecord()` |
| Clear all data | `storage.js → clearAllData()` |
| localStorage persistence | `storage.js` |
| 30 example records on first visit | `data/sampleData.js + init.js` |

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, accessible) |
| Styling | CSS3 (custom properties, grid, flexbox, keyframes) |
| Logic | Vanilla JavaScript ES6+ (modules via script tags) |
| Charts | Chart.js 4.4 (CDN) |
| Fonts | Google Fonts — Barlow Condensed, DM Mono, Barlow |
| Storage | Browser `localStorage` |

---

## 🚀 Getting Started

### Run Locally
```bash
git clone https://github.com/YOUR_USERNAME/datavault-analytics.git
cd datavault-analytics
open index.html        # macOS
# or double-click index.html in File Explorer (Windows)
```

> ⚠️ If charts don't render locally due to CORS, use a local server:
> ```bash
> npx serve .          # Node.js
> python -m http.server 8080   # Python
> ```

### Deploy on GitHub Pages
```bash
git init
git add .
git commit -m "feat: DataVault Analytics dashboard"
git remote add origin https://github.com/YOUR_USERNAME/datavault-analytics.git
git push -u origin main
# Settings → Pages → Source: main / root → Save
```
Live at: `https://YOUR_USERNAME.github.io/datavault-analytics`

### Deploy on Netlify
Drag the project folder onto [netlify.com/drop](https://app.netlify.com/drop) — live in seconds.

---

## 📋 Data Fields

| Field | Type | Required | Example |
|---|---|---|---|
| `sale_date` | Date | ✅ | `2024-06-15` |
| `outlet_name` | Text | ✅ | `Andheri West DV` |
| `region` | Text | — | `Mumbai Metro` |
| `zone` | Select | — | `North / South / East / West / Central` |
| `fuel_type` | Select | ✅ | `Petrol / Diesel / CNG / LPG / Power (Premium) / HSD Industrial` |
| `quantity_sold` | Number | ✅ | `42.5` |
| `unit_price` | Number | ✅ | `94.72` |
| `discount_pct` | Number | — | `0 – 100` |
| `payment_mode` | Select | — | `Cash / UPI / Card / Fleet Card / Credit` |
| `shift` | Select | — | `Morning / Afternoon / Night` |

Derived fields computed automatically: `gross_revenue`, `net_revenue`

---

## 🎯 Portfolio Highlights

- **Fully modular architecture** — 9 files, each with a single responsibility
- **Zero build step** — no webpack, no npm, no framework
- **Reactive UI** — every `addRecords()` call triggers a full re-render
- **Professional dark theme** with CSS custom properties
- **localStorage persistence** — data survives refresh without a backend
- **JSDoc comments** on every function

---

## 📄 License
MIT — free to use, modify, and share.
