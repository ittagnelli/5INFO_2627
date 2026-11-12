<script>
  import { createEventDispatcher } from "svelte";

  export let testo;

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("scelta", testo);
  }
</script>

<button on:click={click}>{testo}</button>

<style>
  button {
    display: block;
    width: 100%;
    padding: 8px;
    border: none;
    background: white;
  }
  button:hover {
    background: #eee;
  }
</style>