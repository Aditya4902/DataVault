
// ── Chart instance references ─────────────────
let cMonthly = null;
let cMix     = null;
let cZone    = null;
let cPayment = null;
let cVolume  = null;

// ─────────────────────────────────────────────
//  Monthly Revenue Trend  (Line Chart)
// ─────────────────────────────────────────────
function renderMonthly() {
  // Aggregate: { 'YYYY-MM': { fuelType: totalRevenue } }
  const byMonth = {};
  DB.forEach(r => {
    const m    = r.sale_date ? r.sale_date.substring(0, 7) : 'Unknown';
    const fuel = r.fuel_type || 'Other';
    if (!byMonth[m]) byMonth[m] = {};
    byMonth[m][fuel] = (byMonth[m][fuel] || 0) + r.net_revenue;
  });

  const months = Object.keys(byMonth).sort();
  const fuels  = [...new Set(DB.map(r => r.fuel_type || 'Other'))];
  const isEmpty = months.length === 0;

  // Toggle empty-state placeholder
  document.getElementById('emptyMonthly').style.display = isEmpty ? 'flex'  : 'none';
  document.getElementById('chartMonthly').style.display = isEmpty ? 'none'  : 'block';

  if (isEmpty) { destroyChart(cMonthly); cMonthly = null; return; }

  const datasets = fuels.map(f => ({
    label:           f,
    data:            months.map(m => ((byMonth[m][f] || 0) / 100_000)),
    borderColor:     FUEL_COLORS[f] || '#888',
    backgroundColor: (FUEL_COLORS[f] || '#888') + '22',
    borderWidth:     2,
    tension:         0.4,
    fill:            true,
    pointRadius:     2,
  }));

  destroyChart(cMonthly);
  cMonthly = new Chart(document.getElementById('chartMonthly'), {
    type: 'line',
    data: { labels: months, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 9, padding: 12 } },
      },
      scales: {
        x: { grid: GRID, ticks: { maxTicksLimit: 8 } },
        y: { grid: GRID, ticks: { callback: v => '₹' + v.toFixed(1) + 'L' } },
      },
    },
  });
}

// ─────────────────────────────────────────────
//  Fuel Revenue Mix  (Doughnut Chart)
// ─────────────────────────────────────────────
function renderMix() {
  const byFuel = {};
  DB.forEach(r => {
    const f = r.fuel_type || 'Other';
    byFuel[f] = (byFuel[f] || 0) + r.net_revenue;
  });

  const labels  = Object.keys(byFuel);
  const isEmpty = labels.length === 0;

  document.getElementById('emptyMix').style.display = isEmpty ? 'flex'  : 'none';
  document.getElementById('chartMix').style.display = isEmpty ? 'none'  : 'block';

  if (isEmpty) { destroyChart(cMix); cMix = null; return; }

  destroyChart(cMix);
  cMix = new Chart(document.getElementById('chartMix'), {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data:            labels.map(l => byFuel[l]),
        backgroundColor: labels.map(l => FUEL_COLORS[l] || '#888'),
        borderColor:     '#0f1623',
        borderWidth:     3,
        hoverOffset:     6,
      }],
    },
    options: {
      responsive:          true,
      maintainAspectRatio: true,
      cutout:              '60%',
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 9, padding: 10 } },
        tooltip: {
          callbacks: {
            label: ctx => {
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
              return ` ${ctx.label}: ${(ctx.parsed / total * 100).toFixed(1)}%`;
            },
          },
        },
      },
    },
  });
}

// ─────────────────────────────────────────────
//  Zone Performance  (Horizontal Bar Chart)
// ─────────────────────────────────────────────
function renderZone() {
  const byZone = {};
  DB.forEach(r => {
    const z = r.zone || 'Other';
    byZone[z] = (byZone[z] || 0) + r.net_revenue;
  });

  const labels = Object.keys(byZone).sort();

  destroyChart(cZone);
  cZone = new Chart(document.getElementById('chartZone'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data:            labels.map(l => byZone[l] / 100_000),
        backgroundColor: labels.map(l => ZONE_COLORS[l] || '#888'),
        borderRadius:    5,
        borderSkipped:   false,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ' ₹' + ctx.parsed.x.toFixed(1) + 'L' } },
      },
      scales: {
        x: { grid: GRID, ticks: { callback: v => '₹' + v + 'L' } },
        y: { grid: { display: false } },
      },
    },
  });
}

// ─────────────────────────────────────────────
//  Payment Mode Split  (Polar Area Chart)
// ─────────────────────────────────────────────
function renderPayment() {
  const byPay = {};
  DB.forEach(r => {
    const p = r.payment_mode || 'Other';
    byPay[p] = (byPay[p] || 0) + 1;
  });

  const labels = Object.keys(byPay);

  destroyChart(cPayment);
  cPayment = new Chart(document.getElementById('chartPayment'), {
    type: 'polarArea',
    data: {
      labels,
      datasets: [{
        data:            labels.map(l => byPay[l]),
        backgroundColor: labels.map(l => (PAYMENT_COLORS[l] || '#888') + 'bb'),
        borderColor:     labels.map(l => PAYMENT_COLORS[l] || '#888'),
        borderWidth:     1.5,
      }],
    },
    options: {
      responsive:          true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 9, padding: 10 } },
      },
      scales: {
        r: { grid: { color: 'rgba(30,45,66,.6)' }, ticks: { display: false } },
      },
    },
  });
}

// ─────────────────────────────────────────────
//  Fuel Volume  (Vertical Bar Chart)
// ─────────────────────────────────────────────
function renderVolumeChart() {
  const byFuel = {};
  DB.forEach(r => {
    const f = r.fuel_type || 'Other';
    byFuel[f] = (byFuel[f] || 0) + r.quantity_sold;
  });

  const labels = Object.keys(byFuel);

  destroyChart(cVolume);
  cVolume = new Chart(document.getElementById('chartVolume'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data:            labels.map(l => byFuel[l]),
        backgroundColor: labels.map(l => FUEL_COLORS[l] || '#888'),
        borderRadius:    5,
        borderSkipped:   false,
      }],
    },
    options: {
      responsive:          true,
      maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: GRID, ticks: { callback: v => fmtNum(v) + 'L' } },
      },
    },
  });
}
