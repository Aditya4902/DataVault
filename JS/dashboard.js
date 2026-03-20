
function refresh() {
  const n          = DB.length;
  const totalRev   = DB.reduce((s, r) => s + r.net_revenue,    0);
  const totalVol   = DB.reduce((s, r) => s + r.quantity_sold,  0);
  const avgSale    = n ? totalRev / n : 0;
  const outletCount = new Set(DB.map(r => r.outlet_name)).size;

  // ── Update nav record counter
  document.getElementById('recCount').textContent =
    n.toLocaleString() + ' records';

  // ── KPI cards
  document.getElementById('kRevenue').textContent = fmtCr(totalRev);
  document.getElementById('kVolume').textContent  = fmtNum(totalVol) + 'L';
  document.getElementById('kTxns').textContent    = n.toLocaleString();
  document.getElementById('kAvg').textContent     = '₹' + fmtNum(avgSale);
  document.getElementById('kOutlets').textContent = outletCount;

  // ── Charts (charts.js)
  renderMonthly();
  renderMix();
  renderZone();
  renderPayment();
  renderVolumeChart();

  // ── Tables
  renderOutletTable();
  renderTable();          // records.js
}

// ─────────────────────────────────────────────
//  Outlet Leaderboard Table
// ─────────────────────────────────────────────

/**
 * Aggregate DB by outlet_name, rank by revenue,
 * and render the top-10 leaderboard rows.
 */
function renderOutletTable() {
  // Aggregate per outlet
  const byOutlet = {};
  DB.forEach(r => {
    const k = r.outlet_name || 'Unknown';
    if (!byOutlet[k]) {
      byOutlet[k] = {
        name:   k,
        region: r.region    || '',
        zone:   r.zone      || '',
        fuel:   r.fuel_type || '',
        rev:    0,
      };
    }
    byOutlet[k].rev += r.net_revenue;
  });

  const outlets  = Object.values(byOutlet)
    .sort((a, b) => b.rev - a.rev)
    .slice(0, 10);

  const totalRev = outlets.reduce((s, o) => s + o.rev, 0);
  const maxRev   = outlets[0]?.rev || 1;
  const RANK     = ['🥇', '🥈', '🥉'];

  const tbody = document.getElementById('outletBody');

  if (outlets.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7"
          style="text-align:center;color:var(--muted);
                 padding:24px;font-size:11px;letter-spacing:1px">
          NO DATA YET — ADD RECORDS TO SEE LEADERBOARD
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = outlets.map((o, i) => {
    const zClass = ZONE_CLASS[o.zone] || 'w';
    const share  = totalRev
      ? (o.rev / totalRev * 100).toFixed(1) + '%'
      : '—';
    const barW   = (o.rev / maxRev * 100).toFixed(0);

    return `
      <tr>
        <td>${RANK[i] || i + 1}</td>
        <td>${o.name}</td>
        <td style="color:var(--text2)">${o.region}</td>
        <td><span class="tag tag-${zClass}">${o.zone}</span></td>
        <td style="color:var(--text2)">${o.fuel}</td>
        <td>
          <span class="mono">₹${fmtNum(o.rev)}</span>
          <div class="rev-bar" style="width:${barW}%"></div>
        </td>
        <td class="mono" style="color:var(--muted)">${share}</td>
      </tr>`;
  }).join('');
}
