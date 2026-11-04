<script>
  import { filmSelezionato, postiSelezionati } from '#lib/stores/cinema.js';
  import Posto from '#lib/components/Posto.svelte';

  const MAX_POSTI = 6;

  let totale = $derived($filmSelezionato ? ($postiSelezionati.length * $filmSelezionato.prezzo).toFixed(2) : 0);
  let limiteRaggiunto = $derived($postiSelezionati.length >= MAX_POSTI);

  function togglePosto(codice) {
    if ($postiSelezionati.includes(codice)) {
      $postiSelezionati = $postiSelezionati.filter(p => p !== codice);
    } else {
      if ($postiSelezionati.length < MAX_POSTI) {
        $postiSelezionati = [...$postiSelezionati, codice];
      }
    }
  }

  function getStato(codice) {
    if ($filmSelezionato.occupati.includes(codice)) return 'occupato';
    if ($postiSelezionati.includes(codice)) return 'selezionato';
    return 'libero';
  }
</script>

{#if !$filmSelezionato}
  <p>Nessun film selezionato. Torna alla <a href="/">Programmazione</a>.</p>
{:else}
  <h2>Scegli i posti per {$filmSelezionato.titolo}</h2>

  {#if limiteRaggiunto}
    <p class="avviso">Hai raggiunto il limite massimo di 6 posti!</p>
  {/if}

  <div class="legenda">
    <span class="box libero"></span> Libero
    <span class="box occupato"></span> Occupato
    <span class="box selezionato"></span> Selezionato
  </div>

  <div class="griglia">
    {#each $filmSelezionato.file as fila}
      <div class="fila">
        {#each Array($filmSelezionato.postiPerFila) as _, i}
          {@const codice = `${fila}${i + 1}`}
          <Posto 
            {codice} 
            stato={getStato(codice)} 
            disabilitato={limiteRaggiunto && getStato(codice) === 'libero'}
            ontoggle={togglePosto} 
          />
        {/each}
      </div>
    {/each}
  </div>

  <div class="info">
    <p>Posti selezionati: {$postiSelezionati.length}</p>
    <p>Totale: € {totale}</p>
    {#if $postiSelezionati.length > 0}
      <a href="/riepilogo">Vai al riepilogo</a>
    {/if}
  </div>
{/if}

<style>
  .avviso { color: red; font-weight: bold; }
  .legenda { margin: 10px 0; }
  .box { display: inline-block; width: 12px; height: 12px; margin-left: 10px; }
  .libero { background-color: #e0e0e0; }
  .occupato { background-color: #ff4d4d; }
  .selezionato { background-color: #4caf50; }
  .fila { display: flex; align-items: center; }
  .info { margin-top: 20px; }
</style>