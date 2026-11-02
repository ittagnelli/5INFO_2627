<script>
  let { film, onselect } = $props();
</script>

<div class="card">
  <h3>{film.titolo}</h3>
  <p>{film.genere} · {film.durata} min</p>
  <p>{film.sala} · ore {film.orario}</p>
  <p>€ {film.prezzo.toFixed(2)}</p>
  <button onclick={() => onselect(film)}>Scegli i posti</button>
</div>

<style>
  .card {
    border: 1px solid #000;
    padding: 15px;
    margin-bottom: 15px;
    width: 250px;
  }
  button {
    background: none;
    border: none;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
  }
</style>