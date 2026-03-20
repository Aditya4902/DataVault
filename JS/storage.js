

let DB   = [];   // live in-memory record array
let page = 0;    // current pagination page index

/** Load records from localStorage into DB */
function loadDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    DB = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn('loadDB: parse error, resetting.', e);
    DB = [];
  }
}

/** Persist current DB array to localStorage */
function saveDB() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DB));
  } catch (e) {
    console.warn('saveDB: write failed.', e);
  }
}

/**
 * Append one or more records, persist, and
 * trigger a full UI refresh.
 * @param {Object[]} rows - Validated record objects
 */
function addRecords(rows) {
  DB.push(...rows);
  saveDB();
  refresh();
}

/**
 * Delete a single record by its DB index,
 * persist, and refresh the UI.
 * @param {number} idx - Index in the DB array
 */
function deleteRecord(idx) {
  DB.splice(idx, 1);
  saveDB();
  refresh();
  showToast('Record deleted', 'ok');
}

/** Wipe all records after user confirmation */
function clearAllData() {
  if (!confirm('Delete all records? This cannot be undone.')) return;
  DB = [];
  saveDB();
  refresh();
  showToast('All records cleared', 'ok');
}
