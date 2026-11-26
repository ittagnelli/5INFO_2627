<script>
	import Items from '#lib/components/items.svelte';

	export let title;
	export let items = [];
	export let selezionato = '';
	export let aperto;

	function toggle() {
		if (aperto === title) {
			aperto = '';
		} else {
			aperto = title;
		}
	}
</script>

<div class="box">
	<button class="btn" on:click={toggle}>
		<span>{title}</span>
		<span>▼</span>
	</button>

	{#if aperto === title}
		{#each items as item}
			<Items {item} bind:selezionato={selezionato} />
		{/each}
	{/if}
</div>

<style>
	.box {
		margin-bottom: 25px;
	}

	.btn {
		display: flex;
		justify-content: space-between;
		background: red;
		color: white;
		border: none;
		padding: 15px 25px;
		border-radius: 15px;
		width: 320px;
		font-size: 20px;
	}
</style>

