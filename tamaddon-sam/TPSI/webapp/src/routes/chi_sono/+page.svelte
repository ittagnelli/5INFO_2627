<script>
    import WhoAmI from "#lib/components/who_am_i.svelte";

    let arrImg = [
        "https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjDZhlvXkHPzZs42rL48wYkjg-VDcYdDtR6t0mwfETlHeSzXcYhWdnkrt&s=10",
        "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
        "https://img.magnific.com/foto-gratuito/close-up-di-un-macao-scarlatto-da-vista-laterale-close-up-della-testa-dell-ara-scarlatta_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
    ]

    let link
    setTimeout(() => {arrImg.forEach((link) => {link})}, 800)
    
</script>

<WhoAmI nome = "Sam" cognome = "Tamaddon" eta = 18 src = {link} larghezza = "250px"/>
<WhoAmI/>