export const questions = [
  {
    id: 1,
    question: "In Svelte 4, come si dichiara una prop in un componente?",
    options: [
      "props nome;",
      "export let nome;",
      "let prop nome;",
      "import nome;"
    ],
    answer: 1
  },
  {
    id: 2,
    question: "Quale blocco si usa in Svelte per ciclare su un array?",
    options: [
      "{#for item in items}",
      "{#each items as item}",
      "{#loop items as item}",
      "{#map items as item}"
    ],
    answer: 1
  },
  {
    id: 3,
    question: "Come si definisce una dichiarazione reattiva in Svelte?",
    options: [
      "reactive: x = y + 1;",
      "$: x = y + 1;",
      "watch: x = y + 1;",
      "let $: x = y + 1;"
    ],
    answer: 1
  },
  {
    id: 4,
    question: "Quale direttiva si usa per applicare condizionalmente una classe CSS?",
    options: [
      "class:nome-classe={condizione}",
      "v-bind:class={condizione}",
      "ng-class={condizione}",
      "style:class={condizione}"
    ],
    answer: 0
  },
  {
    id: 5,
    question: "Come si ascolta un evento DOM su un elemento?",
    options: [
      "onclick={gestore}",
      "on:click={gestore}",
      "@click={gestore}",
      "v-on:click={gestore}"
    ],
    answer: 1
  },
  {
    id: 6,
    question: "Quale elemento HTML standard è richiesto per la barra di avanzamento?",
    options: [
      "<meter>",
      "<progress>",
      "<bar>",
      "<loading>"
    ],
    answer: 1
  }
];