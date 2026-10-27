<script>
    import Counter from "#lib/components/counter/counter.svelte";


    let valore_singolo = 0
    let valore_doppio = 0
    let sottolineato = true

    $: doppio = valore_singolo *2 

    function gestisci_evento(evento){
        alert(` ${evento.detail.tipo} -- ${evento.detail.valore}` )
    }
</script>
<h1>Pagina counter</h1>


<!-- esempio con if-->
{#if valore_singolo < 5}
    <h2 class="rosso">il valore del contatore vale: {valore_singolo}</h2>
{:else if valore_singolo > 5 && valore_singolo < 10}
    <h2 class=sottolineato>il valore del contatore vale: {valore_singolo}</h2>
    <h2> il doppio di questo contatore vale {doppio}</h2>
{:else}
    <h2 class="giallo">il valore del contatore vale: {valore_singolo}</h2>
    <h2> il doppio di questo contatore vale {doppio}</h2>
    {/if}

<!-- esempio con reattivita-->
    <h2 class={valore_doppio < 5? 'rosso' : 'verde'}>il valore del contatore vale: {valore_doppio}</h2>

<Counter bind:counter={valore_singolo} on:contatore={gestisci_evento}/>

<style>
    .rosso {color: #e797ab;}
    .verde {color: #e435d5;}
    .giallo {color: rgb(194, 17, 179);}
    .sottolineato {text-decoration: underline;}
</style>