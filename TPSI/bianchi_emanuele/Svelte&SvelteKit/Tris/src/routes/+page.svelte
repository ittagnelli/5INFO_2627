<script>
  // Import con percorso relativo (senza usare $lib) per evitare errori di alias
  import Board from '../lib/Board.svelte';
  import Scoreboard from '../lib/Scoreboard.svelte';
  import { checkWinner } from '../lib/gameLogic.js';

  // Stato gestito tramite $state()
  let board = $state(Array(9).fill(''));
  let turn = $state('X');
  let scores = $state({ x: 0, o: 0, draws: 0, total: 0 });
  let matchEnded = $state(false);

  // Valori reattivi calcolati tramite $derived()
  let winningInfo = $derived(checkWinner(board));
  let isBoardFull = $derived(board.every((cell) => cell !== ''));
  let isGameOver = $derived(Boolean(winningInfo || isBoardFull));
  let winningLine = $derived(winningInfo ? winningInfo.line : []);

  // Effetto reattivo tramite $effect() per l'aggiornamento del punteggio
  $effect(() => {
    if (isGameOver && !matchEnded) {
      matchEnded = true;
      scores.total += 1;
      if (winningInfo) {
        if (winningInfo.winner === 'X') scores.x += 1;
        else if (winningInfo.winner === 'O') scores.o += 1;
      } else if (isBoardFull) {
        scores.draws += 1;
      }
    }
  });

  function handleSelect(event) {
    const { index } = event.detail;

    if (board[index] !== '' || isGameOver) return;

    board[index] = turn;

    if (!checkWinner(board) && !board.every((c) => c !== '')) {
      turn = turn === 'X' ? 'O' : 'X';
    }
  }

  function handleNewGame() {
    board = Array(9).fill('');
    turn = 'X';
    matchEnded = false;
  }

  function handleResetScore() {
    scores = { x: 0, o: 0, draws: 0, total: 0 };
  }
</script>

<main class="app-container">
  <h1>Tris</h1>

  <h2>
    {#if winningInfo}
      Ha vinto {winningInfo.winner}!
    {:else if isBoardFull}
      Pareggio!
    {:else}
      Tocca a: {turn}
    {/if}
  </h2>

  <Board
    {board}
    {winningLine}
    disabled={isGameOver}
    on:select={handleSelect}
  />

  <button
    type="button"
    on:click={handleNewGame}
    disabled={!isGameOver}
  >
    Nuova partita
  </button>

  <Scoreboard
    {scores}
    on:resetScore={handleResetScore}
  />
</main>

<style>
  .app-container {
    font-family: sans-serif;
    padding: 20px;
    max-width: 400px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  button {
    padding: 5px 10px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
</style>