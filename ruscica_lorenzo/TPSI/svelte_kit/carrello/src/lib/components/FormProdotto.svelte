<script>
	let { onAggiungi, onCalcolaTotale } = $props();

	let nomeProdotto = $state('');
	let quantita = $state(1);
	let costo = $state('');

	function gestisciAggiunta() {
		const qta = Number(quantita);
		const prezzo = Number(costo);

		if (!nomeProdotto.trim() || qta < 1 || isNaN(prezzo) || prezzo < 0 || costo === '') {
			alert('Inserisci dati validi e una quantità maggiore o uguale a 1.');
			return;
		}

		onAggiungi({
			id: Date.now(),
			nome: nomeProdotto.trim(),
			quantita: qta,
			costo: prezzo
		});

		nomeProdotto = '';
		quantita = 1;
		costo = '';
	}
</script>

<div class="riga inserimento">
	<div>
		<input type="text" bind:value={nomeProdotto} />
	</div>
	<div>
		<input type="number" min="1" bind:value={quantita} />
	</div>
	<div>
		<input type="number" step="0.01" min="0" bind:value={costo} />
	</div>
	<div class="pulsanti-principali">
		<button class="btn-icona" onclick={gestisciAggiunta}>+</button>
		<button class="btn-icona" onclick={onCalcolaTotale}>Σ</button>
	</div>
</div>

<style>
	.riga {
		display: grid;
		grid-template-columns: 2fr 1.5fr 1.5fr 1.2fr;
		align-items: center;
		gap: 15px;
		margin-bottom: 15px;
	}

	input {
		width: 100%;
		padding: 4px 6px;
		border: 1px solid #767676;
		border-radius: 2px;
		font-family: inherit;
		font-size: 0.95rem;
		box-sizing: border-box;
	}

	.pulsanti-principali {
		display: flex;
		gap: 12px;
		justify-content: flex-start;
	}

	.btn-icona {
		background: none;
		border: none;
		font-size: 1.5rem;
		font-weight: bold;
		cursor: pointer;
		padding: 0 4px;
	}

	.btn-icona:hover {
		opacity: 0.7;
	}
</style>
