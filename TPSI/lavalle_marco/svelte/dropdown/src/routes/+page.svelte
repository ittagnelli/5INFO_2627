<script>
	import Dropdown from "../lib/images/components/dropdown.svelte";

  let selezioni = [];

  function aggiungi(e) {
    selezioni = [...selezioni, e.detail];
  }
</script>

<h1>DROP DOWN TESTER</h1>

<Dropdown titolo="Regione" voci={["Lombardia", "Piemonte", "Lazio"]} on:scelta={aggiungi} />
<Dropdown titolo="Città" voci={["Torino", "Milano", "Roma", "Genova"]} on:scelta={aggiungi} />
<Dropdown titolo="Nazione" voci={["Italia", "Germania", "Francia"]} on:scelta={aggiungi} />

{#each selezioni as s}
  <h2>Hai selezionato la {s.tipo}: {s.voce}</h2>
{/each}