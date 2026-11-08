<script>
    import DropDown from "./dropDown.svelte";
    export let valori;
    let selezionati = {};
    for(let i in valori){
        selezionati[i] = null;
    }
</script>

<div class="cont">
    {#each Object.keys(valori) as nome}
        <DropDown nome={nome} valori={valori[nome]} bind:select={selezionati[nome]} />
    {/each}

    {#each Object.keys(valori) as nome}
        {#if selezionati[nome]}
            <h2>Hai selezionato come {nome}: {selezionati[nome]}</h2>
        {/if}
    {/each}
</div>

<style>
    .cont{
        align-items: center;
        width: 30%;
    }
</style>
