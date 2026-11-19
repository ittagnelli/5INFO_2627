<script>
    let { 
        nome = "Mario", 
        cognome = "Rossi", 
        age = "99",
        width = "100",
        height = "100"
    } = $props();
    let url = 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png';
</script>

<div>
    <h3>Ciao sono {nome} {cognome} ho {age} anni</h3>
    <h4>Sono studente all'istituto agnelli di torino</h4>
    <img src={url} alt="profilo" {width} {height}>    
</div>
