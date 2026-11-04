<script>
  // Importazioni con percorso relativo per evitare l'errore $lib
  import { contattiIniziali } from '../lib/contatti.js';
  import ContactItem from '../lib/ContactItem.svelte';
  import ContactStats from '../lib/ContactStats.svelte';
  import ContactForm from '../lib/ContactForm.svelte';

  let contatti = $state([...contattiIniziali]);
  let searchQuery = $state('');
  let onlyFavorites = $state(false);

  let contattiOrdinati = $derived(
    [...contatti].sort((a, b) => 
      a.cognome.localeCompare(b.cognome, 'it', { sensitivity: 'base' })
    )
  );

  let contattiFiltrati = $derived(
    contattiOrdinati.filter(c => {
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = 
        c.nome.toLowerCase().includes(query) ||
        c.cognome.toLowerCase().includes(query) ||
        c.telefono.toLowerCase().includes(query);

      const matchFav = onlyFavorites ? c.preferito : true;

      return matchSearch && matchFav;
    })
  );

  let totaleContatti = $derived(contatti.length);
  let totalePreferiti = $derived(contatti.filter(c => c.preferito).length);
  let totaleVisualizzati = $derived(contattiFiltrati.length);

  function handleTogglePreferito(id) {
    contatti = contatti.map(c => 
      c.id === id ? { ...c, preferito: !c.preferito } : c
    );
  }

  function handleElimina(id) {
    contatti = contatti.filter(c => c.id !== id);
  }

  function handleAggiungi(nuovoDato) {
    const nuovo = {
      id: Date.now(),
      ...nuovoDato,
      preferito: false
    };
    contatti = [...contatti, nuovo];
  }
</script>

<main>
  <h1>Rubrica</h1>

  <div class="filters">
    <label>
      Cerca
      <input 
        type="text" 
        placeholder="nome, cognome o telefono" 
        bind:value={searchQuery} 
      />
    </label>

    <label class="checkbox-label">
      <input type="checkbox" bind:checked={onlyFavorites} />
      Solo preferiti
    </label>
  </div>

  <ContactStats 
    totali={totaleContatti} 
    preferiti={totalePreferiti} 
    visualizzati={totaleVisualizzati} 
  />

  {#if contattiFiltrati.length === 0}
    <p>Nessun contatto trovato</p>
  {:else}
    <ul>
      {#each contattiFiltrati as contatto (contatto.id)}
        <ContactItem 
          {contatto} 
          onToggle={handleTogglePreferito} 
          onDelete={handleElimina} 
        />
      {/each}
    </ul>
  {/if}

  <hr />

  <ContactForm onAdd={handleAggiungi} />
</main>

<style>
  main {
    font-family: sans-serif;
    max-width: 650px;
    margin: 20px auto;
    padding: 0 10px;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  .filters {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  ul {
    padding-left: 20px;
  }

  hr {
    margin-top: 25px;
    border: 0;
    border-top: 1px solid #ccc;
  }
</style>