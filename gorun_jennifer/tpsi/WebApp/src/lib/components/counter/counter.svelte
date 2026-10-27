<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=favorite" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=add" />
</svelte:head>

<script>
    export let counter = 0;
</script>

<div class="container"> 
    <div class="pulsante">
        <button>
            <span class="material-symbols-outlined icon">remove</span>
        </button>
    </div>
    <div class="number">
        {counter}
    </div>
    <div class="pulsante">
        <button>
            <span class="material-symbols-outlined icon"></span>
        </button>
    </div>
</div>
<style>
    .container{
        border: 4px solid #D43C2F;
        display : flex;
        justify-content : space-between;
        width: 300px;
        padding : 10px;
    }

    .pulsante{
        display : flex;
        align-items: center;
    }

    .button {
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
