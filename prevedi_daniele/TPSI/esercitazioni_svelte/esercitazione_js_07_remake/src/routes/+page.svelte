<svelte:head>
    from './lib/components/searchBar.svelte' import SearchBar;
</svelte:head>

<script>

    let contatti = [
        { cognome: "Rossi", nome: "Mario", indirizzo: "Via Roma 1", telefono: "1234567890" },
        { cognome: "Bianchi", nome: "Luigi", indirizzo: "Via Milano 2", telefono: "0987654321" },
        { cognome: "Verdi", nome: "Giulia", indirizzo: "Via Napoli 3", telefono: "1122334455" }
    ];
</script>

<div class="header"><h1>Rubrica JS</h1></div>
<div class="content">
    <div class="table-header" id="table-header-cognome">
        <h3>Cognome</h3>
    </div>
    <div class="table-header" id="table-header-nome">
        <h3>Nome</h3>
    </div>
    <div class="table-header" id="table-header-indirizzo">
        <h3>Indirizzo</h3>
    </div>
    <div class="table-header" id="table-header-telefono">
        <h3>Telefono</h3>
    </div>
    <div class="table-header" id="table-header-azioni">
        <h3>Azioni</h3>
    </div>
    <div class="table-search-bar" id="table-search-cognome">
        
    </div>
    <div class="table-search-bar" id="table-search-nome">
        
    </div>
    <div class="table-search-bar" id="table-search-indirizzo">
        
    </div>
    <div class="table-search-bar" id="table-search-telefono">
        
    </div>
    <div class="table-search-bar" id="table-search-azioni">
        <button class="table-actions-button" id="search-button">Cerca</button>
        <button class="table-actions-button" id="save-button">Salva</button>
        <button class="table-actions-button" id="refresh-button">Aggiorna</button>
    </div>

    <div class="elenco-contatti">
        {#each contatti as contatto, index}
            <div class="contact">
                <div class="table-cell" id="{index}cognome">{contatto.cognome}</div>
                <div class="table-cell" id="{index}nome">{contatto.nome}</div>
                <div class="table-cell" id="{index}indirizzo">{contatto.indirizzo}</div>
                <div class="table-cell" id="{index}telefono">{contatto.telefono}</div>
                <div class="table-cell" id="{index}azioni">
                    <button class="table-row-actions-button" id="{index}remove-button">Rimuovi</button>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    * {
        text-align: center;
    }

    .header {
        text-align: center;
        margin-bottom: 20px;
    }

    .content {
        display: grid;
        grid-template-columns: 2fr 2fr 3fr 2fr 3fr;
        gap: 2px;
        width: 70%;
        margin:auto;
    }

    .contact {
        display: grid;
        grid-template-columns: 2fr 2fr 3fr 2fr 3fr;
        gap: 2px;
        margin-top: 10px;
    }

    .elenco-contatti {
        grid-column: 1 / -1;
    }


</style>