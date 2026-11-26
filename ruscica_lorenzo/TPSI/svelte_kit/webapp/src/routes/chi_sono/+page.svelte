<h1>Pagina: Chi sono</h1>

<script>
    import WhoAmI from "../../lib/components/who_am_i.svelte";

    let imgs = [ 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxHEzBXVJsGWkdNqi_KmpPOeA89pA4oe1I667B2EOUg&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYSOB7mXz2gQeR1ULHxlc2O7tx_2xICdlye-tjeZHYw&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBGf2hfRrlzSvSGYlKlq419aWYvK9MisARrOxASBdow&s=10'
    ];

    let idx = 0;
    let url;

    setInterval(() => {
        url = imgs[idx];
        idx = (idx + 1) % 3;     
    }, 2000)
</script>

<WhoAmI nome="Lorenzo" cognome="Ruscica" eta={18} url={url} width ="300"/>
<WhoAmI nome="John" cognome="Doe" eta={25} url={url} width ="400"/>