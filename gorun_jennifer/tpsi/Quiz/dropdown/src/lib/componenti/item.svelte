<script>
    export let titolo = ""
    export let contenutoElementoCliccato
    function clickHandler(){
        contenutoElementoCliccato = titolo
    }
</script>

<div id="oggetto" on:click={clickHandler}>
    <p>{titolo}</p>
</div>

<style>
    *{
        margin: 0;
    }

    #oggetto{
        background-color: rgb(216, 215, 215);
    }

    #oggetto:hover{
        background-color: grey;
    }

</style>