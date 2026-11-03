<script>
    import Dropdown from '../lib/components/dropdown.svelte';

    let drop = null;
    let doppioclick = { Regione: null, Città: null, Nazione: null };
    let messagge = { Regione: "", Città: "", Nazione: "" };

    const Tendina = (id) => {
        drop = drop === id ? null : id
    };

    const Selezione = (item, nomeBlocco) => {
        if (doppioclick[nomeBlocco] === item) {
            messagge[nomeBlocco] = `hai selezionato la ${nomeBlocco} : ${item}`;
        } else {
            doppioclick[nomeBlocco] = item;
            messagge[nomeBlocco] = ""; 
        }
        messagge = { ...messagge }
    };

    const regioni = ['Piemonte', 'Lombardia', 'Lazio', 'Campania']
    const citta = ['Torino', 'Milano', 'Roma', 'Napoli']
    const nazioni = ['Italia', 'Spagna', 'Francia', 'Germania']
</script>

<h1>DROP DOWN TESTER</h1>

<Dropdown 
    nome="Regione" 
    Aperto={drop === 'regioni'} 
    items={regioni}
    onToggle={() => Tendina('regioni')}
    onSelect={(valore) => Selezione(valore, 'Regione')}
/>

<Dropdown 
    nome="Città" 
    Aperto={drop === 'citta'} 
    items={citta}
    onToggle={() => Tendina('citta')}
    onSelect={(valore) => Selezione(valore, 'Città')}
/>

<Dropdown 
    nome="Nazione" 
    Aperto={drop === 'nazioni'} 
    items={nazioni}
    onToggle={() => Tendina('nazioni')}
    onSelect={(valore) => Selezione(valore, 'Nazione')}
/>

<div class="messaggio">
    {#each Object.values(messagge) as msg}
        {#if msg !== ""}
            <h2>
                <b>{msg}</b>
            </h2>
        {/if}
    {/each}
</div>

<style>
    h1 {
        font-family: 'Times New Roman', Times, serif;
        font-size: 2.2rem;
        font-weight: bold;
        margin-bottom: 2rem;
        letter-spacing: 1px;
    }

    .messaggio {
        margin-top: 1.5rem;
        font-size: 1.2rem;
    }

    h2 {
        margin: 0.5rem 0;
    }
</style>