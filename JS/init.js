

(function bootstrap() {
  // 1. Restore any previously saved records
  loadDB();

  // 2. Seed example data only on first visit
  if (DB.length === 0) {
    DB = [...EXAMPLE_DATA];
    saveDB();
  }

  // 3. Render everything
  refresh();
})();
