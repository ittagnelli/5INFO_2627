import { writable } from "svelte/store";

export let numeroDomandeQuiz = writable(0)
export let avanzamentoQuiz = writable(0)
export let numeroDomandeCorrette = writable(0)
export let risposteDomande = writable([])