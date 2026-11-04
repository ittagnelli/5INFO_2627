<script>
	let { items = [], onSelect } = $props();
</script>

<ul class="items-list">
	{#each items as item}
		<li onclick={() => onSelect(item)}>
			{item}
		</li>
	{/each}
</ul>

<style>
	.items-list {
		list-style: none;
		padding: 0;
		margin: 8px 0 0 0;
		background-color: #f2f2f2;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	li {
		padding: 10px 18px;
		border-bottom: 1px solid #e0e0e0;
		color: #333;
		font-family: serif;
		font-size: 16px;
		cursor: pointer;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover {
		background-color: #e5e5e5;
	}
</style>