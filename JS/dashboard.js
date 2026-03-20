//  REFRESH — rebuilds all KPIs + charts from DB
// ──────────────────────────────────────────────────────────────────────────────
function refresh(){
  const n = DB.length;
  document.getElementById('recCount').textContent = n.toLocaleString()+' records';

  const totalRev   = DB.reduce((s,r)=>s+r.net_revenue,0);
  const totalVol   = DB.reduce((s,r)=>s+r.quantity_sold,0);
  const avgSale    = n ? totalRev/n : 0;
  const outlets    = new Set(DB.map(r=>r.outlet_name)).size;

  document.getElementById('kRevenue').textContent = fmtCr(totalRev);
  document.getElementById('kVolume').textContent  = fmtNum(totalVol)+'L';
  document.getElementById('kTxns').textContent    = n.toLocaleString();
  document.getElementById('kAvg').textContent     = '₹'+fmtNum(avgSale);
  document.getElementById('kOutlets').textContent = outlets;

  renderMonthly();
  renderMix();
  renderZone();
  renderPayment();
  renderVolumeChart();
  renderOutletTable();
  renderTable();
}
