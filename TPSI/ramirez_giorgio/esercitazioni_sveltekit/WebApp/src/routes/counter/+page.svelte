<script>
    import Counter from '../../lib/components/counter.svelte'
    import DoubleCounter from '../../lib/components/double_counter.svelte'    
    let contatore=0
    let cont1=0
    let numeri = [1,7,2,6,9,10]
    let sottolineato = true
    let doppio = 0
    $: {
        doppio =contatore*2;
        sottolineato = contatore==7?false:true
    }

    function gestisci_evento(evento){
        alert(`${evento.detail.tipo} -- ${evento.detail.valore}`)
    }
</script>

<h1>
Pagina Counter!!!
</h1>

<h2>il valore del contatore vale : {contatore}</h2>
<Counter bind:counter={contatore} on:contatore={gestisci_evento}/>

<h2 class:sottolineato>Il valore del contatore vale : {contatore}</h2>
<h2>il suo doppio vale {doppio}</h2>
<Counter bind:counter={contatore}/>

<h2 class={cont1<5?'rosso':'verde'}>Il valore del contatore vale : {cont1}</h2>
<DoubleCounter bind:counter={cont1}/>

<ul>
    {#each numeri as numero, indice}
    <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>

<style>
    .rosso{color: red;}
    .verde{color: green;}
    .sottolineato{text-decoration: underline;}
</style>