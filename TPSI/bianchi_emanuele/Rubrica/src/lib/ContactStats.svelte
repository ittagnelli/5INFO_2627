<script>
  let { totali = 0, preferiti = 0, visualizzati = 0 } = $props();
</script>

<p class="stats">
  Contatti: {totali} · Preferiti: {preferiti} · Visualizzati: {visualizzati}
</p>

<style>
  .stats {
    font-weight: normal;
    margin: 10px 0;
  }
</style>