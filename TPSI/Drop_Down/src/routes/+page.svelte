<script>
// @ts-nocheck

  import DropDown      from "../lib/components/DropDown.svelte";
  import List          from "../lib/components/list.svelte";
  import SelectionText from "../lib/components/SelectionText.svelte";

  const regioniOptions = ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Piemonte", "Puglia", "Sardegna", "Valle d'Aosta", "Veneto"];
  const cittaOptions   = ["Roma", "Milano", "Napoli", "Torino", "Palermo", "Genova", "Bologna", "Firenze", "Bari", "Catania"];
  const nazioneOptions = ["Italia", "Francia", "Germania", "Spagna", "Portogallo", "Grecia", "Polonia", "Olanda", "Belgio", "Svizzera"];

  let openDropdown    = $state();
  let selectedRegione = $state();
  let selectedCitta   = $state();
  let selectedNazione = $state();

  // @ts-ignore
  function toggle(id) {
    openDropdown = openDropdown === id ? null : id;
  }
</script>

<main>
  <h1>DROP DOWN TESTER</h1>

  <div class="dropdowns">

    <div class="gruppo">
      <DropDown text="Regione" open={openDropdown === 'regione'} ontoggle={() => toggle('regione')} />
      <div style="display: {openDropdown === 'regione' ? 'block' : 'none'}">
        <List options={regioniOptions} selected={selectedRegione} onselect={(v) => { selectedRegione = v; openDropdown = null; }} />
      </div>
    </div>

    <div class="gruppo">
      <DropDown text="Città" open={openDropdown === 'citta'} ontoggle={() => toggle('citta')} />
      <div style="display: {openDropdown === 'citta' ? 'block' : 'none'}">
        <List options={cittaOptions} selected={selectedCitta} onselect={(v) => { selectedCitta = v; openDropdown = null; }} />
      </div>
    </div>

    <div class="gruppo">
      <DropDown text="Nazione" open={openDropdown === 'nazione'} ontoggle={() => toggle('nazione')} />
      <div style="display: {openDropdown === 'nazione' ? 'block' : 'none'}">
        <List options={nazioneOptions} selected={selectedNazione} onselect={(v) => { selectedNazione = v; openDropdown = null; }} />
      </div>
    </div>

  </div>

  <div class="selezioni">
    {#if selectedRegione}
      <SelectionText label="Regione" selected={selectedRegione} />
    {/if}
    {#if selectedCitta}
      <SelectionText label="Città" selected={selectedCitta} />
    {/if}
    {#if selectedNazione}
      <SelectionText label="Nazione" selected={selectedNazione} />
    {/if}
  </div>
</main>

<style>
  :global(body) {
    background: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .dropdowns {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: fit-content;
  }

  .gruppo {
    display: flex;
    flex-direction: column;
  }

  .selezioni {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
</style>
