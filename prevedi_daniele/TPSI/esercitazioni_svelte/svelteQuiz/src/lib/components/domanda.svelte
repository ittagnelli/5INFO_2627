<script>
    import { risposteDomande } from "../js/store.js"
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    export let domanda

    let testoDomanda = domanda.domanda
    let arrayRisposte = Object.entries(domanda.risposte)

</script>

<h3>{testoDomanda}</h3>
{#each arrayRisposte as risposta}
    <button on:click={() => risposteDomande.update((val) => [...val, risposta[0]])}>{risposta[0]}</button>
{/each}

<style>
    button {
        display: block;
        margin: 10px 0;
    }
</style>