<script>
	// Stato iniziale dei contatti come da template HTML
	let contatti = $state([
		{ id: 1, cognome: 'Marconi', nome: 'Guglielmo', indirizzo: 'Via Spalato 33', telefono: '3332545434' },
		{ id: 2, cognome: 'Linus', nome: 'Torvalds', indirizzo: 'strada Kernel 6', telefono: '432323432' }
	]);

	// Stati collegati agli input nella parte superiore
	let cognome = $state('');
	let nome = $state('');
	let indirizzo = $state('');
	let telefono = $state('');

	// Tiene traccia dell'ID del contatto attualmente in fase di modifica (null se è un nuovo inserimento)
	let idInModifica = $state(null);

	// Funzione di utilità per svuotare i campi (Punto 5)
	function svuotaCampi() {
		cognome = '';
		nome = '';
		indirizzo = '';
		telefono = '';
		idInModifica = null;
	}

	// Punto 3 e 4: Cerca per cognome o telefono e popola i campi superiori (Pulsante 1)
	function cercaContatto() {
		const queryCognome = cognome.trim().toLowerCase();
		const queryTelefono = telefono.trim();

		if (!queryCognome && !queryTelefono) {
			alert('Inserisci almeno un cognome o un numero di telefono per effettuare la ricerca.');
			return;
		}

		const trovato = contatti.find(
			(c) =>
				(queryCognome && c.cognome.toLowerCase() === queryCognome) ||
				(queryTelefono && c.telefono === queryTelefono)
		);

		if (trovato) {
			cognome = trovato.cognome;
			nome = trovato.nome;
			indirizzo = trovato.indirizzo;
			telefono = trovato.telefono;
			idInModifica = trovato.id; // Abilita la modalità modifica
		} else {
			alert('Nessun contatto trovato con i criteri inseriti.');
			idInModifica = null;
		}
	}

	// Punto 1, 4 e 5: Salva un nuovo contatto o aggiorna quello ricercato (Pulsante 2 / Pulsante 3)
	function salvaOAggiorna() {
		// Controllo che tutti i campi siano forniti (Punto 1)
		if (!cognome.trim() || !nome.trim() || !indirizzo.trim() || !telefono.trim()) {
			alert('Attenzione: tutti i campi (Cognome, Nome, Indirizzo, Telefono) devono essere compilati!');
			return;
		}

		if (idInModifica !== null) {
			// Punto 4: Aggiorna il contatto esistente (Pulsante 3)
			contatti = contatti.map((c) =>
				c.id === idInModifica
					? {
							...c,
							cognome: cognome.trim(),
							nome: nome.trim(),
							indirizzo: indirizzo.trim(),
							telefono: telefono.trim()
						}
					: c
			);
		} else {
			// Punto 1: Inserisce un nuovo contatto (Pulsante 2)
			const nuovoContatto = {
				id: Date.now(),
				cognome: cognome.trim(),
				nome: nome.trim(),
				indirizzo: indirizzo.trim(),
				telefono: telefono.trim()
			};
			contatti = [...contatti, nuovoContatto];
		}

		// Punto 5: Svuota i campi dopo il salvataggio o l'aggiornamento
		svuotaCampi();
	}

	// Punto 2: Rimuove un contatto dalla rubrica (Pulsante 4)
	function rimuoviContatto(id) {
		contatti = contatti.filter((c) => c.id !== id);
		// Se stavamo modificando proprio il contatto appena eliminato, resettiamo il form
		if (idInModifica === id) {
			svuotaCampi();
		}
	}
</script>

<h1 class="main-title">Rubrica JS</h1>

<table>
	<thead>
		<tr>
			<th>Cognome</th>
			<th>Nome</th>
			<th>Indirizzo</th>
			<th>Telefono</th>
			<th colspan="2">Azioni</th>
		</tr>
	</thead>
	<tbody>
		<tr class="inputx">
			<td><input type="text" size="15" bind:value={cognome} placeholder="Cognome" /></td>
			<td><input type="text" size="15" bind:value={nome} placeholder="Nome" /></td>
			<td><input type="text" size="30" bind:value={indirizzo} placeholder="Indirizzo" /></td>
			<td><input type="text" size="10" bind:value={telefono} placeholder="Telefono" /></td>
			<td>
				<!-- Pulsante 1 -->
				<button type="button" onclick={cercaContatto}>Cerca</button>
			</td>
			<td>
				<!-- Pulsante 2 (Salva) / Pulsante 3 (Aggiorna se in modifica) -->
				<button type="button" onclick={salvaOAggiorna}>
					{idInModifica !== null ? 'Aggiorna' : 'Salva'}
				</button>
			</td>
		</tr>

		{#each contatti as contatto (contatto.id)}
			<tr>
				<td>{contatto.cognome}</td>
				<td>{contatto.nome}</td>
				<td>{contatto.indirizzo}</td>
				<td>{contatto.telefono}</td>
				<td colspan="2">
					<!-- Pulsante 4 -->
					<button type="button" onclick={() => rimuoviContatto(contatto.id)}>Rimuovi</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.main-title {
		text-align: center;
		font-family: 'Bebas Neue', sans-serif;
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

	button {
		cursor: pointer;
	}
</style>