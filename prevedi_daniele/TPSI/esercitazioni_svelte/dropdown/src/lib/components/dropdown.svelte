<script>
    export let titolo = "Titolo";
    export let elencoItem;
    export let isStatoMenuOpen;
    export let lastElementClicked

    function mostraElenco(){
        isStatoMenuOpen = !isStatoMenuOpen
    }

    function elementoCliccato(item){
        lastElementClicked = item
        mostraElenco()
    }
</script>

<div id="header" on:click={mostraElenco}><p id="testo">{titolo}</p></div>
<div id="elenco" class:isStatoMenuOpen>
    {#each elencoItem as item}
        <div class="item" on:click={() => elementoCliccato(item)}>{item}</div>
    {/each}
</div>

<style>
    #header {
        background-color: red;
        color: white;
        height: 50px;
        width: 300px;
        font-size: 1.5em;
        margin-top: 40px;
        border-radius: 15px;
    }

    #testo {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
        font-weight: bold;
    }

    #header:hover {
        box-shadow: 0 0 0 4px rgb(255, 144, 144);
    }

    #elenco {
        background-color: rgb(238, 237, 237);
        border: 1px solid rgb(221, 219, 219);
        color: black;
        width: 150px;
        margin-left: 75px;
        margin-top: 4px;
        border-radius: 10px;
    }

    .item {
        height: 30px;
        width: 100%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item:hover {
        background-color: rgb(146, 146, 146);
        color: white;
    }

    .isStatoMenuOpen {
        display: none;
    }

    span {
        color: white;
    }
</style>