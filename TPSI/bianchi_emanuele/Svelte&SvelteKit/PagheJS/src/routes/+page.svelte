<script>
	// Record iniziali presenti nel template HTML
	let paghe = $state([
		{ id: 1, dipartimento: 'Marketing', cognome: 'Rossi', nome: 'Mario', mese: 'July 2024', importo: 1456 },
		{ id: 2, dipartimento: 'Finanza', cognome: 'Verdi', nome: 'Giulio', mese: 'March 2024', importo: 2190 },
		{ id: 3, dipartimento: 'Engineering', cognome: 'Bianchi', nome: 'Walter', mese: 'April 2024', importo: 2345 }
	]);

	// Stati collegati agli input del form
	let dipartimento = $state('');
	let cognome = $state('');
	let nome = $state('');
	let mese = $state('');
	let importo = $state('');

	// Stati per TOTALE e MEDIA (si attivano al click e si aggiornano senza duplicare righe)
	let mostraTotale = $state(false);
	let totale = $state(0);

	let mostraMedia = $state(false);
	let media = $state(0);

	// Converte "2024-07" in "July 2024" come nel template
	function formattaMese(valoreMese) {
		const [anno, numMese] = valoreMese.split('-');
		const mesi = [
			'January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'
		];
		return `${mesi[parseInt(numMese, 10) - 1]} ${anno}`;
	}

	// Punto 1 e 2: Aggiunta nuova paga (Icona 1: add)
	function aggiungiPaga() {
		const impNum = Number(importo);

		if (
			!dipartimento.trim() ||
			!cognome.trim() ||
			!nome.trim() ||
			!mese.trim() ||
			importo === '' ||
			isNaN(impNum) ||
			impNum < 500
		) {
			alert('Errore: compila tutti i campi correttamente (importo minimo 500 €).');
			return;
		}

		paghe = [
			...paghe,
			{
				id: Date.now(),
				dipartimento: dipartimento.trim(),
				cognome: cognome.trim(),
				nome: nome.trim(),
				mese: formattaMese(mese),
				importo: impNum
			}
		];

		// Svuota i campi dopo l'inserimento
		dipartimento = '';
		cognome = '';
		nome = '';
		mese = '';
		importo = '';
	}

	// Punto 3 e 4: Calcola / Aggiorna Totale (Icona 2: functions)
	function calcolaTotale() {
		if (paghe.length < 2) {
			alert('Devono essere presenti almeno 2 paghe per calcolare il totale.');
			return;
		}

		totale = paghe.reduce((acc, p) => acc + p.importo, 0);
		mostraTotale = true;
	}

	// Punto 5 e 6: Calcola / Aggiorna Media (Icona 3: trending_up)
	function calcolaMedia() {
		if (paghe.length < 2) {
			alert('Devono essere presenti almeno 2 paghe per calcolare la media.');
			return;
		}

		const somma = paghe.reduce((acc, p) => acc + p.importo, 0);
		const risultato = somma / paghe.length;
		media = Number.isInteger(risultato) ? risultato : Number(risultato.toFixed(2));
		mostraMedia = true;
	}
</script>

<h1 class="main-title">Gestione Paghe JS</h1>

<table id="paghe">
	<tbody>
		<tr>
			<th>Dipartimento</th>
			<th>Cognome</th>
			<th>Nome</th>
			<th>Mese</th>
			<th>Importo</th>
			<th colspan="2">Azioni</th>
		</tr>
		<tr>
			<td>
				<input list="dipartimenti" id="dipartimento" bind:value={dipartimento} />
				<datalist id="dipartimenti">
					<option value="Marketing"></option>
					<option value="Finanza"></option>
					<option value="Legale"></option>
					<option value="Engineering"></option>
					<option value="Produzione"></option>
				</datalist>
			</td>
			<td><input id="cognome" type="text" size="15" bind:value={cognome} /></td>
			<td><input id="nome" type="text" size="15" bind:value={nome} /></td>
			<td><input type="month" id="mese" name="mese" min="2024-01" bind:value={mese} /></td>
			<td><input id="importo" type="number" min="500" bind:value={importo} /></td>
			<td>
				<span
					class="material-icons icon"
					role="button"
					tabindex="0"
					onclick={aggiungiPaga}
					onkeydown={(e) => e.key === 'Enter' && aggiungiPaga()}
				>
					add
				</span>
			</td>
			<td>
				<span
					class="material-icons icon"
					role="button"
					tabindex="0"
					onclick={calcolaTotale}
					onkeydown={(e) => e.key === 'Enter' && calcolaTotale()}
				>
					functions
				</span>
			</td>
			<td>
				<span
					class="material-icons icon"
					role="button"
					tabindex="0"
					onclick={calcolaMedia}
					onkeydown={(e) => e.key === 'Enter' && calcolaMedia()}
				>
					trending_up
				</span>
			</td>
		</tr>

		{#each paghe as paga (paga.id)}
			<tr>
				<td>{paga.dipartimento}</td>
				<td>{paga.cognome}</td>
				<td>{paga.nome}</td>
				<td>{paga.mese}</td>
				<td class="importo">{paga.importo} €</td>
			</tr>
		{/each}

		{#if mostraTotale}
			<tr>
				<td colspan="5"><hr /></td>
			</tr>
			<tr>
				<td colspan="4">TOTALE</td>
				<td class="importo">{totale} €</td>
			</tr>
			<tr>
				<td colspan="5"><hr /></td>
			</tr>
		{/if}

		{#if mostraMedia}
			<tr>
				<td colspan="5"><hr /></td>
			</tr>
			<tr>
				<td colspan="4">MEDIA</td>
				<td class="importo">{media} €</td>
			</tr>
			<tr>
				<td colspan="5"><hr /></td>
			</tr>
		{/if}
	</tbody>
</table>

<style>
	.main-title {
		text-align: center;
		font-family: 'Bebas Neue';
		font-size: 60px;
	}

	table {
		margin: auto;
		width: 40%;
		border-spacing: 0px 15px;
		text-align: center;
	}

	th {
		font-size: 20px;
	}

	.importo {
		font-weight: bolder;
	}

	.icon {
		color: black;
		font-size: 2rem;
	}

	.icon:hover {
		cursor: pointer;
		color: green;
		font-weight: bolder;
	}
</style>