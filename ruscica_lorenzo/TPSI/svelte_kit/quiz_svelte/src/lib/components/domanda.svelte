<script>
	import { createEventDispatcher } from 'svelte';

	export let domanda;
	export let rispostaData;
	export let ultima;

	const dispatch = createEventDispatcher();

	function scegli(i) {
		if (rispostaData === undefined) {
			dispatch('risposta', i);
		}
	}

	function avanti() {
		dispatch('avanti');
	}

	$: disabilitato = rispostaData === undefined;
</script>

<h3>{domanda.testo}</h3>

{#each domanda.opzioni as opzione, i}
	<p>
		<button
			on:click={() => scegli(i)}
			class:verde={rispostaData !== undefined && i === domanda.corretta}
			class:rosso={rispostaData === i && i !== domanda.corretta}
		>
			{opzione}
		</button>
	</p>
{/each}

{#if rispostaData !== undefined}
	{#if rispostaData === domanda.corretta}
		<p>Risposta corretta!</p>
	{:else}
		<p>Risposta sbagliata. La risposta giusta è: {domanda.opzioni[domanda.corretta]}</p>
	{/if}
{/if}

<button on:click={avanti} disabled={disabilitato}>
	{#if ultima}
		Vedi il risultato
	{:else}
		Avanti
	{/if}
</button>

<style>
	.verde {
		background-color: lightgreen;
	}
	.rosso {
		background-color: lightcoral;
	}
</style>