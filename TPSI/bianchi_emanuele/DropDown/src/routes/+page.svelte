<script>
	import Dropdown from '../lib/components/Dropdown.svelte';

	let openId = $state(null);
	let lastSelected = $state('');

	let selections = $state({
		regione: '',
		citta: '',
		nazione: ''
	});

	const dropdowns = [
		{
			id: 'regione',
			label: 'Regione',
			items: ['Lombardia', 'Lazio', 'Campania', 'Sicilia', 'Veneto']
		},
		{
			id: 'citta',
			label: 'Città',
			items: ['Milano', 'Roma', 'Napoli', 'Palermo', 'Venezia']
		},
		{
			id: 'nazione',
			label: 'Nazione',
			items: ['Italia', 'Francia', 'Germania', 'Spagna', 'Giappone']
		}
	];

	function handleToggle(id) {
		if (openId === id) {
			openId = null;
		} else {
			openId = id;
		}
	}

	function handleSelect(id, value) {
		selections[id] = value;
		lastSelected = value;
		openId = null;
	}
</script>

<main>
	<h1>DROP DOWN TESTER</h1>

	<div class="list">
		{#each dropdowns as dropdown}
			<Dropdown
				id={dropdown.id}
				label={dropdown.label}
				items={dropdown.items}
				{openId}
				onToggle={handleToggle}
				onSelect={handleSelect}
			/>
		{/each}
	</div>

	<div class="summary">
		<p>Regione: <strong>{selections.regione}</strong></p>
		<p>Città: <strong>{selections.citta}</strong></p>
		<p>Nazione: <strong>{selections.nazione}</strong></p>
	</div>
</main>

<style>
	main {
		padding: 30px;
		font-family: serif;
	}

	h1 {
		font-size: 32px;
		font-weight: bold;
		letter-spacing: 1.5px;
		margin-bottom: 30px;
	}

	.list {
		display: flex;
		flex-direction: column;
	}

	.selection-text {
		margin-top: 25px;
		font-size: 19px;
	}

	.summary {
		margin-top: 15px;
		font-size: 19px;
	}

	.summary p {
		margin: 6px 0;
	}
</style>