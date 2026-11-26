<script>
  import { createEventDispatcher } from 'svelte';

  // Props definite tramite $props() per la compatibilità con Svelte 5
  let { value = '', index = 0, disabled = false, isWinningCell = false } = $props();

  const dispatch = createEventDispatcher();

  function handleClick() {
    if (!disabled && value === '') {
      dispatch('select', { index });
    }
  }
</script>

<button
  type="button"
  disabled={disabled || value !== ''}
  on:click={handleClick}
  class="cell"
  class:x-symbol={value === 'X'}
  class:o-symbol={value === 'O'}
  class:winning={isWinningCell}
  data-index={index}
>
  {value}
</button>

<style>
  .cell {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
    font-weight: bold;
    background-color: #eee;
    border: 1px solid #999;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  .cell:disabled {
    cursor: default;
  }

  .x-symbol {
    color: #d9534f;
  }

  .o-symbol {
    color: #0275d8;
  }

  .winning {
    background-color: #5cb85c !important;
    color: white !important;
  }
</style>