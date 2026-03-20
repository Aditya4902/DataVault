
function saveRecord() {
  // ── Read inputs
  const d = {
    sale_date:     document.getElementById('fDate').value,
    outlet_name:   document.getElementById('fOutlet').value.trim(),
    region:        document.getElementById('fRegion').value.trim(),
    zone:          document.getElementById('fZone').value,
    fuel_type:     document.getElementById('fFuel').value,
    quantity_sold: parseFloat(document.getElementById('fQty').value)      || 0,
    unit_price:    parseFloat(document.getElementById('fPrice').value)     || 0,
    discount_pct:  parseFloat(document.getElementById('fDiscount').value)  || 0,
    payment_mode:  document.getElementById('fPayment').value,
    shift:         document.getElementById('fShift').value,
  };

  // ── Validate required fields
  if (!d.sale_date || !d.outlet_name || !d.fuel_type ||
      !d.quantity_sold || !d.unit_price) {
    showToast('Please fill all required fields', 'err');
    return;
  }

  // ── Derived fields
  d.gross_revenue = parseFloat((d.quantity_sold * d.unit_price).toFixed(2));
  d.net_revenue   = parseFloat(
    (d.gross_revenue * (1 - d.discount_pct / 100)).toFixed(2)
  );

  // ── Persist
  addRecords([d]);

  // ── Reset form
  resetForm();

  // ── Success feedback
  const banner = document.getElementById('formSuccess');
  banner.style.display = 'block';
  setTimeout(() => { banner.style.display = 'none'; }, 3000);

  showToast('Record saved!', 'ok');
}

// ─────────────────────────────────────────────
//  Form Utilities
// ─────────────────────────────────────────────

/** Clear all form inputs back to default state */
function resetForm() {
  ['fDate', 'fOutlet', 'fRegion', 'fQty', 'fPrice', 'fDiscount']
    .forEach(id => { document.getElementById(id).value = ''; });

  ['fZone', 'fFuel', 'fPayment', 'fShift']
    .forEach(id => { document.getElementById(id).selectedIndex = 0; });

  // Re-set date to today for next entry
  document.getElementById('fDate').valueAsDate = new Date();
}

// ─────────────────────────────────────────────
//  Init — set default date on page load
// ─────────────────────────────────────────────
document.getElementById('fDate').valueAsDate = new Date();
