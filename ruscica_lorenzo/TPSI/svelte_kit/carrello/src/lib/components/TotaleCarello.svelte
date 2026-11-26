<script>
	let { totale } = $props();

	function formattaPrezzo(valore) {
		const arrotondato = Math.round(valore * 100) / 100;
		return Number.isInteger(arrotondato) ? `${arrotondato} €` : `${arrotondato.toFixed(2)} €`;
	}
</script>

<hr />
<div class="riga totale">
	<div></div>
	<div class="etichetta-totale">TOTALE</div>
	<div></div>
	<div class="valore-totale">{formattaPrezzo(totale)}</div>
</div>

<style>
	hr {
		border: 0;
		border-top: 1px solid #888;
		margin: 25px 0 15px 0;
	}

	.riga {
		display: grid;
		grid-template-columns: 2fr 1.5fr 1.5fr 1.2fr;
		align-items: center;
		gap: 15px;
		margin-bottom: 15px;
	}

	.totale {
		font-size: 1.05rem;
	}

	.etichetta-totale,
	.valore-totale {
		text-align: left;
	}
</style>
