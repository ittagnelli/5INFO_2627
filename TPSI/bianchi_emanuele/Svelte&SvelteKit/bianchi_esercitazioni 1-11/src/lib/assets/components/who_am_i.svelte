<script>
    export let nome = "Emaunuele"
    export let cognome = "Bianchi"
    export let eta = "20"
    let url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHjwnnfolsOhGOiTRvRiBS9dUKzduVkEzdx14zz51kg&s=10'
    let src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehle62gxI84NdCV-MzBNbUQ9GEJHoY8eOkWpVJ1HkEA&s=10'
    let height = 450
    let width = 450
</script>

<h1>Ciao sono {nome} {cognome} ed ho {eta} anni</h1>
<h4>Sono uno studente di informatica presso l'Istituto Agenlli di Torino</h4>

<img src={url} alt= "zucca" {height} {width}> metodo 1 <br>
<img src="{src}" alt="logo Agnelli" {height} {width}> metodo 2 <br>
<img {src} alt="logo Agnelli" {height} {width}> metodo 2.1