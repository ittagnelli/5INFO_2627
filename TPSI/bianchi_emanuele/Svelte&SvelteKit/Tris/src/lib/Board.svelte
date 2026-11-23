<script>
  import Cell from './Cell.svelte';

  let { board = [], winningLine = [], disabled = false } = $props();
</script>

<div class="board-grid">
  {#each board as cellValue, index (index)}
    <Cell
      value={cellValue}
      {index}
      {disabled}
      isWinningCell={winningLine.includes(index)}
      on:select
    />
  {/each}
</div>

<style>
  .board-grid {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    grid-gap: 5px;
    margin: 15px 0;
  }
</style>