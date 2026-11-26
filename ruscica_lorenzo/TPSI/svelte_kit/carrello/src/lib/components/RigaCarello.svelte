<script>
	let { item = $bindable(), onRimuovi } = $props();

	function validaQuantita() {
		if (!item.quantita || item.quantita < 1) {
			item.quantita = 1;
		}
	}

	function formattaPrezzo(valore) {
		const arrotondato = Math.round(valore * 100) / 100;
		return Number.isInteger(arrotondato) ? `${arrotondato} €` : `${arrotondato.toFixed(2)} €`;
	}
</script>

<div class="riga prodotto">
	<div class="nome-prodotto">{item.nome}</div>
	<div>
		<input type="number" min="1" bind:value={item.quantita} oninput={validaQuantita} />
	</div>
	<div class="prezzo-unitario">{formattaPrezzo(item.costo)}</div>
	<div class="cella-totale-riga">
		<span class="subtotale">{formattaPrezzo(item.quantita * item.costo)}</span>
		<button class="btn-rimuovi" onclick={() => onRimuovi(item.id)}>
			🛒<span class="barra-rossa">/</span>
		</button>
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

	.nome-prodotto,
	.prezzo-unitario {
		text-align: center;
	}

	.cella-totale-riga {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.subtotale {
		font-weight: bold;
	}

	.btn-rimuovi {
		position: relative;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.1rem;
		padding: 2px 6px;
	}

	.barra-rossa {
		position: absolute;
		left: 10px;
		top: -2px;
		color: red;
		font-weight: bold;
		font-size: 1.4rem;
		transform: rotate(-20deg);
	}
</style>
