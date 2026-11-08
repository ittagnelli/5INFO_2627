<script>
    export let valore;
    export let selezionato;
    function fn(){
        selezionato = valore;
    }
</script>

<p on:click={fn}>{valore}</p>

<style>
    p:hover{
        background-color: lightgray;
    }
</style>
