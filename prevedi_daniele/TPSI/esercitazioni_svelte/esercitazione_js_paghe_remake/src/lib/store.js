import { writable } from 'svelte/store';

export let arrayPaghe = writable([]);

export let totaleEuro = writable(0);
export let mediaEuro = writable(0);
export let totaleVisibile = writable(false);
export let mediaVisibile = writable(false);