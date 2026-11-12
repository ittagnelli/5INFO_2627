<script>
  import { createEventDispatcher } from "svelte";
  import { aperto } from "../js/store.js";
  import Item from "./item.svelte";

  export let titolo;
  export let voci = [];

  const dispatch = createEventDispatcher();

  function toggle() {
    if ($aperto === titolo) {
      $aperto = null;
    } else {
      $aperto = titolo;
    }
  }

  function scelta(e) {
    dispatch("scelta", { tipo: titolo, voce: e.detail });
  }
</script>

<div class="dropdown">
  <button class="bottone" on:click={toggle}>{titolo} ⌄</button>

  {#if $aperto === titolo}
    <div class="lista">
      {#each voci as voce}
        <Item testo={voce} on:scelta={scelta} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .dropdown {
    width: 280px;
    margin-bottom: 20px;
  }
  .bottone {
    width: 100%;
    padding: 12px;
    background: red;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
  }
  .lista {
    width: 70%;
    margin: 0 auto;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
</style>