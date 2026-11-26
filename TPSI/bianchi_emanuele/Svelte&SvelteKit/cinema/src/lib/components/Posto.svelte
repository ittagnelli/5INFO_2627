<script>
  let { codice, stato, disabilitato = false, ontoggle } = $props();

  function handleClick() {
    if (stato !== 'occupato' && !disabilitato) {
      ontoggle(codice);
    }
  }
</script>

<button 
  class="posto {stato}" 
  class:libero={stato === 'libero'}
  class:occupato={stato === 'occupato'}
  class:selezionato={stato === 'selezionato'}
  disabled={stato === 'occupato' || (disabilitato && stato === 'libero')}
  onclick={handleClick}
>
  {codice}
</button>

<style>
  .posto {
    width: 35px;
    height: 35px;
    margin: 3px;
    border: 1px solid #999;
    cursor: pointer;
  }
  .libero { background-color: #e0e0e0; }
  .occupato { background-color: #ff4d4d; cursor: not-allowed; }
  .selezionato { background-color: #4caf50; color: white; }
</style>