<script>
	export let item;
	export let selezionato;

	function scegli() {
		selezionato = item;
	}
</script>

<button class="item" on:click={scegli}>
	{item}
</button>

<style>
	.item {
		display: block;
		width: 320px;
		padding: 12px;
		border: none;
		background: #f1f1f1;
		font-size: 18px;
		cursor: pointer;
	}

	.item:hover {
		background: #ddd;
	}
</style>