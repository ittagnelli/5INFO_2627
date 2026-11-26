<script>
    import Dropdown from "#lib/components/dropdown.svelte";

    let isStatoMenuRegioneOpen = true;
    let isStatoMenuCittaOpen = true;
    let isStatoMenuNazioneOpen = true;
    let previousRegioneState = true;
    let previousCittaState = true;
    let previousNazioneState = true;

    $: {
        const regioneJustOpened = previousRegioneState && !isStatoMenuRegioneOpen;
        const cittaJustOpened = previousCittaState && !isStatoMenuCittaOpen;
        const nazioneJustOpened = previousNazioneState && !isStatoMenuNazioneOpen;

        if (regioneJustOpened) {
            isStatoMenuCittaOpen = true;
            isStatoMenuNazioneOpen = true;
        } else if (cittaJustOpened) {
            isStatoMenuRegioneOpen = true;
            isStatoMenuNazioneOpen = true;
        } else if (nazioneJustOpened) {
            isStatoMenuRegioneOpen = true;
            isStatoMenuCittaOpen = true;
        }

        previousRegioneState = isStatoMenuRegioneOpen;
        previousCittaState = isStatoMenuCittaOpen;
        previousNazioneState = isStatoMenuNazioneOpen;
    }

    let lastRegioneClicked = "";
    let lastCittaClicked = "";
    let lastNazioneClicked = "";

</script>

<h1>DROP DOWN TESTER</h1>

<Dropdown titolo="Regione" elencoItem={["Piemonte", "Lombardia", "Lazio", "Liguria", "Puglia"]} bind:isStatoMenuOpen={isStatoMenuRegioneOpen} bind:lastElementClicked={lastRegioneClicked}/>
<Dropdown titolo="Città" elencoItem={["Torino", "Milano", "Roma", "Genova"]} bind:isStatoMenuOpen={isStatoMenuCittaOpen} bind:lastElementClicked={lastCittaClicked}/>
<Dropdown titolo="Nazione" elencoItem={["Italia", "Francia", "Germania", "Olanda"]} bind:isStatoMenuOpen={isStatoMenuNazioneOpen} bind:lastElementClicked={lastNazioneClicked}/>

{#if lastRegioneClicked}
    <h1>Ultima regione selezionata: {lastRegioneClicked}</h1>
{/if}

{#if lastCittaClicked}
    <h1>Ultima città selezionata: {lastCittaClicked}</h1>
{/if}

{#if lastNazioneClicked}
    <h1>Ultima nazione selezionata: {lastNazioneClicked}</h1>
{/if}