<script>

    import Item from "./item.svelte";
    export let titolo;
    export let valori;
    export let ultimoElementoCliccato

    console.log("VALORI:", valori)
</script>

<div class="dropdown"> 
    {titolo}
    {#each valori as valore}
        <Item titolo={valore} bind:contenutoElementoCliccato={ultimoElementoCliccato} />
    {/each}
</div>


<style>
    .dropdown{
        font-size: 20;
        background-color: rgb(255, 0, 0);
        width: 300px;
        height: 70px;
        margin: 20px;

    }
</style>

