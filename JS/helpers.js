//  HELPERS
// ──────────────────────────────────────────────────────────────────────────────
function fmtCr(n){
  if(n>=10000000) return '₹'+(n/10000000).toFixed(1)+'Cr';
  if(n>=100000)   return '₹'+(n/100000).toFixed(1)+'L';
  return '₹'+n.toFixed(0);
}
function fmtNum(n){
  if(n>=10000000) return (n/10000000).toFixed(2)+'Cr';
  if(n>=100000)   return (n/100000).toFixed(1)+'L';
  if(n>=1000)     return (n/1000).toFixed(1)+'K';
  return n.toFixed(0);
}

function showToast(msg,type){
  const t=document.getElementById('toast');
  t.textContent=msg; t.className=`toast ${type} show`;
  setTimeout(()=>t.className='toast',3000);
}

function clearAllData(){
  if(!confirm('Delete all records? This cannot be undone.')) return;
  DB=[]; saveDB(); refresh(); showToast('All records cleared','ok');
}

function switchTab(id,btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  if(id==='records') renderTable();
}

// set default date to today
document.getElementById('fDate').valueAsDate=new Date();

// ──────────────────────────────────────────────────────────────────────────────
