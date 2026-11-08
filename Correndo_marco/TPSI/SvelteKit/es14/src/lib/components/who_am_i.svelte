<script>
    export let nome = "Antonio";
    export let cognome = "Montana";
    export let eta = 10;
    export let ruolo;
    export let url,desc,w,h;
</script>

<h1>Chi sono?</h1>
<p>Sono {nome} {cognome} e ho {eta} anni e sono {ruolo}</p>

<img src={url} alt={desc} width={w} height={h} />
