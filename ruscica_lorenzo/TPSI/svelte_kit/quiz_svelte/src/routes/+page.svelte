<script>
	import Domanda from '../lib/components/domanda.svelte';

	let domande = [
		{
			testo: "In Svelte 4, come si dichiara una prop in un componente?",
			opzioni: ["props nome;", "export let nome;", "let prop nome;", "import nome;"],
			corretta: 1
		},
		{
			testo: "Quale costrutto permette di iterare un array in Svelte?",
			opzioni: ["{#for}", "{#loop}", "{#each}", "{#map}"],
			corretta: 2
		},
		{
			testo: "Come si introduce una dichiarazione reattiva in Svelte?",
			opzioni: ["$:", "@:", "#:", "!:"],
			corretta: 0
		},
		{
			testo: "Come si gestisce l'evento click su un pulsante in Svelte?",
			opzioni: ["onclick={fn}", "on:click={fn}", "@click={fn}", "v-on:click={fn}"],
			corretta: 1
		},
		{
			testo: "Quale funzione si usa per emettere Component Events?",
			opzioni: ["createEvent()", "emitEvent()", "createEventDispatcher()", "dispatchEvent()"],
			corretta: 2
		},
		{
			testo: "Chi è il miglior professore dell'agnelli",
			opzioni: ["Mancuso", "Arruzza", "Giannattasio", "Moretti"],
			corretta: 3
		}
	];

	let indice = 0;
	let punteggio = 0;
	let risposteDate = [];
	let finito = false;
