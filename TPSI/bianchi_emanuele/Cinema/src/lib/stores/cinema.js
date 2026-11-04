import { writable } from 'svelte/store';

export const filmList = writable([
  {
    id: 1,
    titolo: 'Orbita Zero',
    genere: 'Fantascienza',
    durata: 128,
    sala: 'Sala 1',
    orario: '18:30',
    prezzo: 9.50,
    file: ['A', 'B', 'C', 'D'],
    postiPerFila: 8,
    occupati: ['A1', 'A2', 'B5']
  },
  {
    id: 2,
    titolo: 'Il Codice Perduto',
    genere: 'Thriller',
    durata: 112,
    sala: 'Sala 2',
    orario: '21:00',
    prezzo: 8.00,
    file: ['A', 'B', 'C', 'D', 'E'],
    postiPerFila: 10,
    occupati: ['C3', 'C4', 'D1']
  },
  {
    id: 3,
    titolo: 'La Rete',
    genere: 'Documentario',
    durata: 95,
    sala: 'Sala 3',
    orario: '16:15',
    prezzo: 6.50,
    file: ['A', 'B', 'C'],
    postiPerFila: 6,
    occupati: ['B2']
  }
]);

export const filmSelezionato = writable(null);
export const postiSelezionati = writable([]);