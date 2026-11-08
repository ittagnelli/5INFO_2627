<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    let contatore = 1;
    let contatore1 = 1;
    let numeri = [1,3,4,5,51,231,24,51,241,24312,421521,412,1213];
    $: sottolineato = !(contatore % 2);
    
    function gestisci(evento){
        alert(`Evento: ${evento.detail.tipo} , valore: ${evento.detail.valore}`);
    }
</script>

<h1>Counter page</h1>

<Counter bind:counter={contatore1} on:contatore={gestisci}/>
{#if contatore1 < 5}
    <h3 class="red">Counter settato a {contatore1}</h3>
{:else if contatore1 >= 5 && contatore1 < 10}
    <h3 class="green">Counter settato a {contatore1}</h3>
{:else}
    <h3 class="purple">Counter settato a {contatore1}</h3>
{/if}

<DoubleCounter bind:counter={contatore} on:increment={gestisci} on:decrement={gestisci}/>
<h3 class:sottolineato>Double Counter settato a {contatore}</h3>

<h3>Lista di numeri</h3>
<ul>
    {#each numeri as numero,indice}
        {#if indice %2==0}
            <li class="red">numeri[{indice}] = {numero}</li>
        {:else}
            <li class="green">numeri[{indice}] = {numero}</li>
        {/if}
    {/each}
</ul>


<style>
    .purple{color:purple;}
    .red{color: red;}
    .green{color: green;}
    .sottolineato{text-decoration: underline;}
</style>
