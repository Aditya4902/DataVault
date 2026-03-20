
let cMonthly=null, cMix=null, cZone=null, cPayment=null, cVolume=null;

// Chart.js global defaults - tuned for light white cards
Chart.defaults.color = '#94a3b8';
Chart.defaults.font.family = "'Poppins','Segoe UI',sans-serif";
Chart.defaults.font.size = 11;

// Grid lines - light gray for white card backgrounds
const GRID = { color: 'rgba(226,232,240,0.9)', drawBorder: false };

// Fuel type colors
const FUEL_COLORS = {
  'Petrol':          '#f97316',
  'Diesel':          '#3b82f6',
  'CNG':             '#10b981',
  'Power (Premium)': '#8b5cf6',
  'LPG':             '#f59e0b',
  'HSD Industrial':  '#64748b',
};

// Payment mode colors
const PAYMENT_COLORS = {
  'Cash':       '#64748b',
  'UPI':        '#10b981',
  'Card':       '#3b82f6',
  'Fleet Card': '#f59e0b',
  'Credit':     '#8b5cf6',
};

// Zone colors
const ZONE_COLORS = {
  'North':   '#3b82f6',
  'South':   '#10b981',
  'East':    '#8b5cf6',
  'West':    '#f97316',
  'Central': '#f59e0b',
};

// Zone → CSS tag class suffix
const ZONE_CLASS = { 'North':'n','South':'s','East':'e','West':'w','Central':'n' };

function destroyChart(c){ if(c){ try{c.destroy();}catch(e){} } }
