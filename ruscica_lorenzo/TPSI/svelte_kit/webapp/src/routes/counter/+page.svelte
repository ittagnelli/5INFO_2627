<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "#lib/components/double_counter.svelte";

    let contatore = 1;
    let double_counter = 0;
    let numeri = [1, 7, 2, 6, 9, 10];
    let sottolineato = true;  
    let doppio = 0;

    $: {
        doppio = contatore * 2;
        sottolineato = double_counter == 7 ? false : true;
    }

    function gestisci_evento(evento) {
        alert(`${evento.detail.tipo} -- ${evento.detail.valore}`);
    }

    
</script>

<h1>Pagina Counter</h1>

{#if contatore < 5}
    <h2 class="rosso">Il valore del contatore vale: {contatore}</h2>
{:else if contatore > 10}
    <h2 class="blu">Il valore del contatore vale: {contatore}</h2>
{:else}
    <h2 class="verde">Il valore del contatore vale: {contatore}</h2>
{/if}

<Counter bind:counter={contatore} on:contatore={gestisci_evento}/>

<h2>Il suo doppio vale {doppio}</h2>

<ul>
    {#each numeri as numero, indice}
        <li>numeri[{indice}]: {numero}</li>
    {/each}
</ul>

<h2 class:sottolineato>Il valore del contatore vale: {double_counter}</h2>
<DoubleCounter bind:counter={double_counter} />

<style>
    .rosso { color: red;}
    .verde { color: green;}
    .blu   { color: blue;}
    .sottolineato { text-decoration: underline;}
</style>
