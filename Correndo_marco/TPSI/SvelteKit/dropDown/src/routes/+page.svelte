<script>
    import DropList from "../lib/components/dropList.svelte";
    let valori = {
        "Regione" : ["Piemonte","Liguria","Lombardia","Veneto","Emilia-Romagna"],
        "Stato" : ["Italia","Germania","Giappone"],
        "Citta" : ["Torino","Genova","Milano","Aosta","Venezia","Perugia"]
    };
</script>

<h1>DROP DOWN TESTER</h1>

<DropList valori={valori} />
