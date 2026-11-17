<script>
    import { domande } from "../js/domande";

    let punteggio = 0;
    let indice= 0;
    let domandaAttuale;
    $: domandaAttuale = domande[indice];
    let hidden = true;

    function prossimaDomanda() {
		if (indice < domande.length - 1) {
			indice++;
            hidden = !hidden;
		} else {
			alert('Quiz completato!');
		}
	}

    function corretta() {
        punteggio++;
        hidden = !hidden;
    }

    function sbagliata() {
        console.log(punteggio);
        hidden = !hidden;
    }
</script>
{#if domandaAttuale} 
    <h2>{domandaAttuale.testo}</h2>

    {#each domandaAttuale.risposte as risposta, i}
        <button type="button" value={i} onclick={() => {domandaAttuale.risposta_corretta == i ? corretta() : sbagliata()}}> {risposta} </button>
        <br>
    {/each}
    <button onclick={prossimaDomanda} class:hidden>
        {indice === domande.length - 1 ? 'Finisci Quiz' : 'Prossima Domanda'}
    </button>
{:else}
    <p>Quiz completato!</p>
{/if}
<p>Punteggio: {punteggio}</p>

<style>
    .hidden{
        display: none;
    }
</style>