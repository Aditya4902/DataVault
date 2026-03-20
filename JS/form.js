//  MANUAL SAVE
// ──────────────────────────────────────────────────────────────────────────────
function saveRecord(){
  const d={
    sale_date:   document.getElementById('fDate').value,
    outlet_name: document.getElementById('fOutlet').value.trim(),
    region:      document.getElementById('fRegion').value.trim(),
    zone:        document.getElementById('fZone').value,
    fuel_type:   document.getElementById('fFuel').value,
    quantity_sold: parseFloat(document.getElementById('fQty').value)||0,
    unit_price:  parseFloat(document.getElementById('fPrice').value)||0,
    discount_pct:parseFloat(document.getElementById('fDiscount').value)||0,
    payment_mode:document.getElementById('fPayment').value,
    shift:       document.getElementById('fShift').value,
  };
  if(!d.sale_date||!d.outlet_name||!d.fuel_type||!d.quantity_sold||!d.unit_price){
    showToast('Please fill all required fields','err'); return;
  }
  d.gross_revenue = d.quantity_sold * d.unit_price;
  d.net_revenue   = d.gross_revenue * (1 - d.discount_pct/100);
  addRecords([d]);
  // clear form
  ['fDate','fOutlet','fRegion','fQty','fPrice','fDiscount'].forEach(id=>{
    document.getElementById(id).value='';
  });
  ['fZone','fFuel','fPayment','fShift'].forEach(id=>{
    document.getElementById(id).selectedIndex=0;
  });
  const s=document.getElementById('formSuccess');
  s.style.display='block'; setTimeout(()=>s.style.display='none',3000);
  showToast('Record saved!','ok');
}



// ──────────────────────────────────────────────────────────────────────────────
