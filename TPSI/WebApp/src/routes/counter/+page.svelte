<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    let contatore = $state(0);
    let contatore2 = $state(0);

    let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<h1>Counter Page</h1>
<Counter bind:counter={contatore}/>
<DoubleCounter bind:counter={contatore2}/>

{#if contatore > 10}
    <p style="color: red;">Il contatore è arrivato a {contatore}</p>
 {:else if contatore > 2}
    <p style="color: orange;">Il contatore è arrivato a {contatore}</p>

 {:else}
    <p style="color: green;">Il contatore è arrivato a {contatore}</p>
{/if}

<ul>
{#each numeri as numero, index}
    <li>{index}. {numero}</li>
{/each}
</ul>

