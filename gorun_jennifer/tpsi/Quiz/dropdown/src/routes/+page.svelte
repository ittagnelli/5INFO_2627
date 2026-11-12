<script> 
    import Dropdown from "#lib/componenti/dropdown.svelte";
</script>

<h1>Dropdown tester</h1>

<Dropdown titolo='regione' valori={["Piemonte", "Lombardia", "Liguria", "VdA"]}/>

<Dropdown titolo='città'valori={["Torino", "Milano", "Roma"]}/>

<Dropdown titolo='nazione' valori={["italia", "francia", "germania"]}/>