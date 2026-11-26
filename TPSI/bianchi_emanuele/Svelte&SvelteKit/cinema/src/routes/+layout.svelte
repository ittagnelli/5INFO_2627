<script>
  import { postiSelezionati } from '#lib/stores/cinema.js';

  let { children } = $props();
</script>

<header>
  <h1>CineSvelte</h1>
  <nav>
    <a href="/">Programmazione</a>
    <a href="/sala">Sala</a>
    <a href="/riepilogo">
      Riepilogo
      {#if $postiSelezionati.length > 0}
        <span class="badge">{$postiSelezionati.length}</span>
      {/if}
    </a>
  </nav>
</header>

<main>
  {#if children}
    {@render children()}
  {/if}
</main>

<style>
  header {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
  nav a {
    margin-right: 15px;
    text-decoration: none;
    color: blue;
  }
  .badge {
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 7px;
    font-size: 0.8rem;
  }
</style>