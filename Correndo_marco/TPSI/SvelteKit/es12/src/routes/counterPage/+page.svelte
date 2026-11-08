<script>
    import Counter from "../../lib/components/counter.svelte";
    import DoubleCounter from "../../lib/components/double_counter.svelte";
    let contatore = 1;
    let normale = 1;
    $: sottolineato = !(contatore == 7);
</script>

<header>
    <h1>Counter page</h1>
</header>

<Counter bind:counter={normale}/>
<h3>Counter settato a {normale}</h3>

<DoubleCounter bind:counter={contatore}/>
<h3 class:sottolineato>Double Counter settato a {contatore}</h3>


<style>
    .sottolineato{
        text-decoration: underline;
    }
</style>
