<script>
    let nome,cognome,eta,conf=false,resid;
</script>

<h1>Input Page</h1>

Nome <input bind:value={nome}><br>
Cognome <input bind:value={cognome}><br>
Eta <input bind:value={eta}><br>
Residenza <input bind:value={resid}>
<br>
Confermato <input type="checkbox" bind:checked={conf}>

<p>Io sono {nome} {cognome} e ho {eta} anni, abito a {resid}</p>

<button disabled={!conf}>Invia</button>
