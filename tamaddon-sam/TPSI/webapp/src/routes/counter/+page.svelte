
<script>
    import Counter from "#lib/components/counter.svelte";
    import DoubleCounter from "#lib/components/double_counter.svelte";
    let contator = 0;
    let contatore = 0;
    let numeri = [1, 7, 2, 6, 9, 10];
    let sottolineato1 = true;
    let sottolineato2 = false;
    let doppio; 
    $: doppio = contatore * 2;
    $: sottolineato2 = doppio == 8
    </script>
    <h1>Pagina Counter!!!</h1>
        <h2 class:sottolineato1>
            Il valore del contatore vale: {contatore}
        </h2>
        <h2 class:sottolineato2>
            Il valore del contatore vale: {
            doppio
            }
        </h2>

        <Counter bind:counter={contatore} />
        <ul>
            {#each numeri as numero, indice}
        <li>numeri[{indice}]:{numero}</li>
    {/each}
    </ul>

<h1>Pagina Counter!!!</h1>

    <h1>Pagina Counter!!!</h1>
    {#if contatore % 2 == 0}
    <h2 class="rosso">Il valore del contatore vale: {contatore}</h2>
 
  

    {:else}
    <h2 class="verde">Il valore del contatore vale: {contatore}</h2>
    { /if}

    <Counter bind:counter={contatore} />

{#if contator % 5 == 0}
<h2 class="rosso">Il valore del contatore vale: {contator}</h2>
{:else}
<h2 class="verde">Il valore del contatore vale: {contator}</h2>
{ /if}
<DoubleCounter bind:count={contator} />


<style>
    .rosso { color: red;}
    .verde { color: green;}
    .sottolineato1 { text-decoration: underline;}
    .sottolineato2 { text-decoration: underline;}

    
    </style>