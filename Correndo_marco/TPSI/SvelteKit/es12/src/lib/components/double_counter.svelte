<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=add" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=remove" />
</svelte:head>

<script>
    export let counter = 1;

    function incr(){
        counter += 2;
    }
    function decr(){
        counter -= 3;
    }
</script>

<div class="container">
    <div class="pulsante">
        <button on:click={decr}>
            <span class="material-symbols-outlined icon">remove</span>
        </button>
    </div>
    <div class="number">
        {counter}
    </div>
    <div class="pulsante">
        <button on:click={incr}>
            <span class="material-symbols-outlined icon">add</span>
        </button>
    </div>
</div>

<style>
    .container{
        border: 4px solid #D43C2f;
        display: flex;
        justify-content: space-between;
        border-radius: 30px;
        width: 300px;
        padding: 10px;
    }

    .pulsante{
        display: flex;
        align-items: center;
    }

    button{
        border: none;
        background: none;
    }
    .icon{
        font-size: 2.5rem;
        color: #F09C00;
        font-weight: bolder;
    }
    .icon:hover{
        color: #D43C2F;
        cursor: pointer;
    }
    .icon:active{
        text-shadow: 1px 1px 10px #D43C2F;
    }
    .number{
        font-size: 4rem;
        font-family: 'Bungee Spice', cursive;
    }
</style>