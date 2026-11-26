<script>
    import Counter from "#lib/components/counter.svelte";
    import DoubleCounter from "#lib/components/double_counter.svelte";

    let valoreSingolo = 127
    let valoreDoppio = 0
    let numeri = [3, 7, 19, 34, 15, 12, 5]
    let sottolineato
    $: sottolineato = valoreDoppio == 7 ? true : false 

    let doppio
    $: doppio = valoreDoppio / 2 // Questo viene eseguito ogni volta che viene modificato il valore di valoreSingolo

    function gestisci_evento(evento){
        alert(`${evento.detail.tipo} con valore ${evento.detail.valore}`)
    }
</script>

<!--  chiamata di esempio con valore di partenza diverso da quello di default (definito nel componente) -->
<Counter bind:counter={valoreSingolo} on:contatore={gestisci_evento}/>
<DoubleCounter bind:counter={valoreDoppio}/>

<h3>Valore SingleCounter {valoreSingolo}</h3>

{#if valoreDoppio < 5}
    <h3 class="rosso">Valore DoubleCounter {valoreDoppio}</h3>
{:else if valoreDoppio > 10}
    <h3 class="verde">Valore DoubleCounter {valoreDoppio}</h3>
{:else}
    <h3 class="arancione">Valore DoubleCounter {valoreDoppio}</h3>
{/if}

<h2 class:sottolineato>
    Il valore del contatore vale {valoreSingolo}
</h2>


<ul>
    {#each numeri as numero, indice}
        <li>numeri[{indice}]: {numero}</li>
    {/each}
</ul>

<style>
    .rosso{color: red;}
    .verde{color: green;}
    .arancione{color: orange}
    .sottolineato{text-decoration: underline;}
</style>