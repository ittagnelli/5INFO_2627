<script>
    export let titolo;
    export let valori;



    console.log("VALORI:", valori)
</script>

<div class="dropdown"> 
    {titolo}
    {#each valori as valore}
        <item titolo=(valore)>
    {/each}
</div>


<style>
    .dropdown{
        font-size: 20;
        background-color: rgb(255, 0, 0);
        width: 200px;
        height: 100px;
        margin: 20px;

    }
</style>

