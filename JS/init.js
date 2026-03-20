// INIT
loadDB();
if(DB.length === 0){
  DB = [...EXAMPLE_DATA];
  saveDB();
}
refresh();

</script>
