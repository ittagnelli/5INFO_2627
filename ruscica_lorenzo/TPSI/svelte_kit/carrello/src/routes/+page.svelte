<script>
	import FormProdotto from '../lib/components/FormProdotto.svelte';
	import RigaCarrello from '../lib/components/RigaCarrello.svelte';
	import TotaleCarrello from '../lib/components/TotaleCarrello.svelte';

	let carrello = $state([
		{ id: 1, nome: 'USB Stick', quantita: 2, costo: 3.99 },
		{ id: 2, nome: 'SSD 1TB', quantita: 1, costo: 56 },
		{ id: 3, nome: 'Cavo USB-C', quantita: 5, costo: 1.99 }
	]);

	let mostraTotale = $state(false);

	let totaleComplessivo = $derived(
		carrello.reduce((acc, item) => acc + item.quantita * item.costo, 0)
	);

	function aggiungiProdotto(nuovoProdotto) {
		carrello.push(nuovoProdotto);
	}

	function rimuoviProdotto(id) {
		carrello = carrello.filter((item) => item.id !== id);
	}

	function calcolaTotale() {
		mostraTotale = true;
	}
</script>

<main class="container">
	<h1>Carrello JS</h1>

	<div class="tabella-carrello">
		<div class="riga intestazione">
			<div>Prodotto</div>
			<div>Quantità</div>
			<div>Costo</div>
			<div></div>
		</div>

		<FormProdotto onAggiungi={aggiungiProdotto} onCalcolaTotale={calcolaTotale} />

		{#each carrello as item, i (item.id)}
			<RigaCarrello bind:item={carrello[i]} onRimuovi={rimuoviProdotto} />
		{/each}

		{#if mostraTotale && carrello.length > 0}
			<TotaleCarrello totale={totaleComplessivo} />
		{/if}
	</div>
</main>

<style>
	.container {
		max-width: 800px;
		margin: 40px auto;
		font-family: 'Times New Roman', Times, serif;
		color: #000;
	}

	h1 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 40px;
	}

	.tabella-carrello {
		width: 100%;
	}

	.riga {
		display: grid;
		grid-template-columns: 2fr 1.5fr 1.5fr 1.2fr;
		align-items: center;
		gap: 15px;
		margin-bottom: 15px;
	}

	.intestazione {
		font-weight: bold;
		font-size: 1.1rem;
		text-align: center;
		margin-bottom: 10px;
	}
</style>
