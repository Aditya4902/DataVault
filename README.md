# 📊 DataVault Analytics
### Fuel Revenue Intelligence Platform

> A client-side fuel sales analytics dashboard built with vanilla JavaScript and Chart.js.
> Enter sale records manually and watch all KPIs and charts update live in real time.

🔗 **Live Demo:** [aditya4902.github.io/datavault-analytics](https://aditya4902.github.io/datavault-analytics)
📁 **GitHub:** [github.com/Aditya4902/datavault-analytics](https://github.com/Aditya4902/datavault-analytics)

---

## 🗂 Project Structure

```
datavault-analytics/
│
├── index.html              ← App shell (HTML only, no inline JS/CSS)
│
├── css/
│   └── style.css           ← All styling — light theme
│
├── js/
│   ├── config.js           ← Colors, constants, Chart.js defaults
│   ├── storage.js          ← localStorage: load, save, add, delete
│   ├── dashboard.js        ← KPI cards + master refresh()
│   ├── charts.js           ← All 5 chart renderers
│   ├── records.js          ← Paginated + searchable records table
│   ├── form.js             ← Manual entry form logic
│   ├── helpers.js          ← Formatting utils, toast, tab switching
│   └── init.js             ← App bootstrap entry point
│
├── data/
│   └── sampleData.js       ← 30 pre-built FY2024 example records
│
├── .gitignore
└── README.md
```

---

## ✨ Features

- 5 live KPI cards — Revenue, Volume, Transactions, Avg Sale, Active Outlets
- Monthly Revenue Trend — multi-fuel line chart
- Fuel Revenue Mix — doughnut chart
- Zone Performance — horizontal bar chart
- Payment Mode Split — polar area chart
- Fuel Volume — vertical bar chart
- Top 10 Outlet Leaderboard with revenue share %
- Manual data entry form with validation
- Searchable, paginated records table
- Delete individual records or clear all
- Data persists via browser `localStorage`
- 30 example records pre-loaded on first visit

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript ES6+ |
| Charts | Chart.js 4.4 (CDN) |
| Fonts | Google Fonts — Poppins, Barlow Condensed, DM Mono |
| Storage | Browser `localStorage` |

---

## 🚀 Getting Started

### Run Locally
```bash
git clone https://github.com/Aditya4902/datavault-analytics.git
cd datavault-analytics
# open index.html in your browser
# OR use a local server:
npx serve .
```

### Deploy on GitHub Pages
```bash
git init
git add .
git commit -m "feat: DataVault Analytics dashboard"
git remote add origin https://github.com/Aditya4902/datavault-analytics.git
git push -u origin main
# Then: Settings → Pages → Source: main branch → Save
```

Live at: **https://Aditya4902.github.io/datavault-analytics**

---

## 📋 Data Fields

| Field | Type | Required |
|---|---|---|
| Sale Date | Date | ✅ |
| Outlet Name | Text | ✅ |
| Region | Text | — |
| Zone | Select | — |
| Fuel Type | Select | ✅ |
| Quantity Sold (L/Kg) | Number | ✅ |
| Unit Price (₹/L) | Number | ✅ |
| Discount % | Number | — |
| Payment Mode | Select | — |
| Shift | Select | — |

---

## 👤 Author

**Aditya** — [@Aditya4902](https://github.com/Aditya4902)

---

## 📄 License
MIT — free to use and modify.
