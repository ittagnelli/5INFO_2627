<script>
    const prios = ["ALTA","MEDIA","BASSA"]
    let i = 0;
    function chg(){
        i++;
    }
</script>

<span class={prios[i%3]} on:click={chg}>
    {prios[i%3]}
</span>

<style>
    span{
        display: inline-block;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        width: 100px;
        height: 30px;
    }
    span:hover{
        cursor: pointer;
    }
    .ALTA{
        background-color: red;
    }
    .MEDIA{
        background-color: yellow;
    }
    .BASSA{
        background-color: green;
    }
</style>
