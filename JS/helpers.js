/**
 * helpers.js
 * ─────────────────────────────────────────────
 * Pure utility functions: number formatting,
 * toast notifications, and tab switching for
 * DataVault Analytics.
 */

// ── Number Formatters ─────────────────────────

/**
 * Format a rupee value as compact KPI label.
 * ≥ 1 Cr → "₹X.XCr"  |  ≥ 1 L → "₹X.XL"  |  else plain
 * @param {number} n
 * @returns {string}
 */
function fmtCr(n) {
  if (n >= 10_000_000) return '₹' + (n / 10_000_000).toFixed(1) + 'Cr';
  if (n >= 100_000)    return '₹' + (n / 100_000).toFixed(1) + 'L';
  return '₹' + n.toFixed(0);
}

/**
 * Format a number compactly without currency symbol.
 * Used for volume, averages, and chart tick labels.
 * @param {number} n
 * @returns {string}
 */
function fmtNum(n) {
  if (n >= 10_000_000) return (n / 10_000_000).toFixed(2) + 'Cr';
  if (n >= 100_000)    return (n / 100_000).toFixed(1) + 'L';
  if (n >= 1_000)      return (n / 1_000).toFixed(1) + 'K';
  return n.toFixed(0);
}

// ── Toast Notification ────────────────────────

let _toastTimer = null;

/**
 * Show a brief status toast at the bottom-right.
 * @param {string} msg   - Message to display
 * @param {'ok'|'err'} type - Visual style
 */
function showToast(msg, type) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className   = `toast ${type} show`;
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { el.className = 'toast'; }, 3000);
}

// ── Tab Navigation ────────────────────────────

/**
 * Switch the active panel and highlight the
 * corresponding nav tab button.
 * @param {string} id   - Panel element ID
 * @param {HTMLElement} btn - Clicked tab button
 */
function switchTab(id, btn) {
  document.querySelectorAll('.panel')
    .forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn')
    .forEach(b => b.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  btn.classList.add('active');

  // Render table fresh whenever Records tab opens
  if (id === 'records') renderTable();
}

// ── Chart Helper ──────────────────────────────

/**
 * Safely destroy a Chart.js instance.
 * @param {Chart|null} c
 */
function destroyChart(c) {
  if (c) { try { c.destroy(); } catch (_) {} }
}
