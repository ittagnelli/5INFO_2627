<script>
  import { createEventDispatcher } from 'svelte';

  let { scores = { x: 0, o: 0, draws: 0, total: 0 } } = $props();

  const dispatch = createEventDispatcher();

  function reset() {
    dispatch('resetScore');
  }
</script>

<div class="scoreboard-container">
  <h3>Punteggio</h3>
  <p>
    X: {scores.x} · O: {scores.o} · Pareggi: {scores.draws} · Partite giocate: {scores.total}
  </p>
  <button
    type="button"
    on:click={reset}
    disabled={scores.total === 0}
  >
    Azzera punteggio
  </button>
</div>

<style>
  .scoreboard-container {
    margin-top: 20px;
  }

  h3 {
    margin-bottom: 5px;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
</style>