<script>
  import { filmList, filmSelezionato, postiSelezionati } from '#lib/stores/cinema.js';
  import FilmCard from '#lib/components/FilmCard.svelte';
  import { goto } from '$app/navigation';

  function avviaPrenotazione(filmScelto) {
    filmSelezionato.set(filmScelto);
    postiSelezionati.set([]);
    goto('/sala');
  }
</script>

<h2>Programmazione di oggi</h2>

<div class="lista">
  {#each $filmList as film}
    <FilmCard {film} onselect={avviaPrenotazione} />
  {/each}
</div>

<style>
  .lista {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>