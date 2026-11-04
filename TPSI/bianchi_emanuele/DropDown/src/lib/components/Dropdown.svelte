<script>
	import Items from './Items.svelte';

	let { id, label, items = [], openId, onToggle, onSelect } = $props();

	let isOpen = $derived(openId === id);
</script>

<div class="dropdown-container">
	<button class="dropdown-btn" onclick={() => onToggle(id)}>
		<span>{label}</span>
		<span class="arrow" class:rotated={isOpen}>▼</span>
	</button>

	{#if isOpen}
		<Items {items} onSelect={(item) => onSelect(id, item)} />
	{/if}
</div>

<style>
	.dropdown-container {
		width: 280px;
		margin-bottom: 18px;
	}

	.dropdown-btn {
		width: 100%;
		background-color: #ff0000;
		color: white;
		border: none;
		padding: 12px 22px;
		border-radius: 18px;
		font-size: 20px;
		font-weight: bold;
		font-family: serif;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
	}

	.dropdown-btn:hover {
		background-color: #e60000;
	}

	.arrow {
		font-size: 13px;
		transition: transform 0.2s ease;
	}

	.arrow.rotated {
		transform: rotate(180deg);
	}
</style>