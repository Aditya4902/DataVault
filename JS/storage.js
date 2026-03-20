//  STORAGE & STATE
// ──────────────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'datavault_records_v2';
let DB = [];
let page = 0;
const PAGE_SIZE = 20;

function loadDB(){ try{ const r=localStorage.getItem(STORAGE_KEY); DB=r?JSON.parse(r):[]; }catch(e){DB=[];} }
function saveDB(){ try{ localStorage.setItem(STORAGE_KEY,JSON.stringify(DB)); }catch(e){} }
function addRecords(rows){ DB.push(...rows); saveDB(); refresh(); }

// ──────────────────────────────────────────────────────────────────────────────
