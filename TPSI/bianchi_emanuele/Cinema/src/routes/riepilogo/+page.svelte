<script>
  import { filmSelezionato, postiSelezionati, filmList } from '#lib/stores/cinema.js';
  import { goto } from '$app/navigation';

  let postiOrdinati = $derived([...$postiSelezionati].sort((a, b) => {
    const filaA = a[0];
    const filaB = b[0];
    const numA = parseInt(a.slice(1));
    const numB = parseInt(b.slice(1));

    if (filaA !== filaB) {
      return filaA.localeCompare(filaB);
    }
    return numA - numB;
  }));

  let totale = $derived($filmSelezionato ? (postiOrdinati.length * $filmSelezionato.prezzo).toFixed(2) : 0);

  function conferma() {
    filmList.update(lista => {
      return lista.map(f => {
        if (f.id === $filmSelezionato.id) {
          return { ...f, occupati: [...f.occupati, ...$postiSelezionati] };
        }
        return f;
      });
    });

    alert('Prenotazione confermata!');
    postiSelezionati.set([]);
    goto('/');
  }

  function annulla() {
    postiSelezionati.set([]);
    goto('/sala');
  }
</script>

{#if !$filmSelezionato}
  <p>Nessun film selezionato. Torna alla <a href="/">Programmazione</a>.</p>
{:else}
  <h2>Riepilogo Prenotazione</h2>
  <p><strong>Film:</strong> {$filmSelezionato.titolo}</p>
  <p><strong>Sala:</strong> {$filmSelezionato.sala} - Ore {$filmSelezionato.orario}</p>

  {#if postiOrdinati.length === 0}
    <p>Non hai selezionato alcun posto.</p>
  {:else}
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>Posto</th>
          <th>Prezzo</th>
        </tr>
      </thead>
      <tbody>
        {#each postiOrdinati as posto}
          <tr>
            <td>{posto}</td>
            <td>€ {$filmSelezionato.prezzo.toFixed(2)}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <h3>Totale da pagare: € {totale}</h3>

    <button onclick={conferma}>Conferma Prenotazione</button>
    <button onclick={annulla}>Annulla Selezione</button>
  {/if}
{/if}