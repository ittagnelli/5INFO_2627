<script>
    let nome, cognome, eta
    let confermato
</script>

<h1>Input Page</h1>

<br><br>

Io sono {nome} {cognome} ed ho {eta} anni
Confermato <input type="checkbox" bind:checked={confermato}>

<br><br>

Io sono {nome} {cognome} ed ho {eta} anni

<br><br>

<button disabled={!confermato}>Invia</button>