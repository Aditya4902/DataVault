
// ── Storage ──────────────────────────────────
const STORAGE_KEY = 'datavault_records_v2';
const PAGE_SIZE   = 20;

// ── Chart.js Global Defaults ─────────────────
Chart.defaults.color           = '#4d6480';
Chart.defaults.font.family     = "'Barlow', sans-serif";
Chart.defaults.font.size       = 11;

/** Shared grid style used across all chart axes */
const GRID = { color: 'rgba(30,45,66,.6)', drawBorder: false };

// ── Color Palettes ────────────────────────────
const FUEL_COLORS = {
  'Petrol':          '#f97316',
  'Diesel':          '#3b82f6',
  'CNG':             '#10b981',
  'Power (Premium)': '#a855f7',
  'LPG':             '#f59e0b',
  'HSD Industrial':  '#64748b',
};

const PAYMENT_COLORS = {
  'Cash':       '#64748b',
  'UPI':        '#10b981',
  'Card':       '#3b82f6',
  'Fleet Card': '#f59e0b',
  'Credit':     '#a855f7',
};

const ZONE_COLORS = {
  'North':   '#3b82f6',
  'South':   '#10b981',
  'East':    '#a855f7',
  'West':    '#f97316',
  'Central': '#f59e0b',
};

/** Zone abbreviation → CSS class suffix for tag chips */
const ZONE_CLASS = {
  'North': 'n', 'South': 's',
  'East':  'e', 'West':  'w', 'Central': 'n',
};
