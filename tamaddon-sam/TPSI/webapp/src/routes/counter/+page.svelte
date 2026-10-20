<script>
    import Counter from "#lib/components/counter.svelte";
    import DoubleCounter from "#lib/components/double_counter.svelte";
    

let contatore = 0;
let contator = 0;
</script>

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
        .rosso { color: rgb(255, 0, 212);}
        .verde { color: rgb(250, 0, 0);}
        .caolo1 { color: rgb(250, 225, 0);}
        
    </style>