//  DATA TABLE + PAGINATION
// ──────────────────────────────────────────────────────────────────────────────
function renderTable(){
  const q=(document.getElementById('searchBox')?.value||'').toLowerCase();
  const filtered=q ? DB.filter(r=>
    (r.outlet_name||'').toLowerCase().includes(q)||
    (r.region||'').toLowerCase().includes(q)||
    (r.fuel_type||'').toLowerCase().includes(q)||
    (r.payment_mode||'').toLowerCase().includes(q)
  ) : DB;

  const total=filtered.length;
  const maxPage=Math.max(0,Math.ceil(total/PAGE_SIZE)-1);
  if(page>maxPage) page=maxPage;
  const start=page*PAGE_SIZE, end=Math.min(start+PAGE_SIZE,total);
  const slice=filtered.slice(start,end);

  document.getElementById('pgInfo').textContent=`Showing ${start+1}–${end} of ${total}`;
  document.getElementById('pgPrev').disabled=page===0;
  document.getElementById('pgNext').disabled=end>=total;

  const FUEL_DOT={
    'Petrol':'#f97316','Diesel':'#3b82f6','CNG':'#10b981',
    'Power (Premium)':'#a855f7','LPG':'#f59e0b','HSD Industrial':'#64748b'
  };
  const tbody=document.getElementById('tableBody');
  if(total===0){
    tbody.innerHTML='<tr><td colspan="13" style="text-align:center;color:var(--muted);padding:28px;font-size:11px;letter-spacing:1px">NO RECORDS YET — USE "ADD DATA" TAB</td></tr>';
    return;
  }
  tbody.innerHTML=slice.map((r,i)=>{
    const dot=FUEL_DOT[r.fuel_type]||'#888';
    const idx=DB.indexOf(r);
    return `<tr>
      <td class="mono" style="color:var(--muted)">${start+i+1}</td>
      <td class="mono">${r.sale_date||'—'}</td>
      <td>${r.outlet_name||'—'}</td>
      <td style="color:var(--text2)">${r.region||'—'}</td>
      <td>${r.zone||'—'}</td>
      <td><span style="color:${dot};font-weight:600">${r.fuel_type||'—'}</span></td>
      <td class="mono">${(r.quantity_sold||0).toFixed(2)}</td>
      <td class="mono">₹${(r.unit_price||0).toFixed(2)}</td>
      <td class="mono">${(r.discount_pct||0).toFixed(1)}%</td>
      <td class="mono" style="color:var(--accent3)">₹${fmtNum(r.net_revenue||0)}</td>
      <td>${r.payment_mode||'—'}</td>
      <td>${r.shift||'—'}</td>
      <td><button class="del-btn" onclick="deleteRecord(${idx})">✕</button></td>
    </tr>`;
  }).join('');
}

function changePage(d){ page+=d; renderTable(); }
function deleteRecord(i){ DB.splice(i,1); saveDB(); refresh(); showToast('Record deleted','ok'); }

// ──────────────────────────────────────────────────────────────────────────────
