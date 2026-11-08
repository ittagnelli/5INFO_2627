<script>
    import DropItem from "./dropItem.svelte";
    import  { lastNome } from "../js/store.js";

    export let nome;
    export let valori;
    export let select = null;
    
    let stato =  true;   // true chiuso, false aperto
    $: stato = $lastNome != nome;

    function fun(){
        stato = !stato;
        if(!stato){
           $lastNome = nome;
        }
    }
</script>

<h1 on:click={fun}>{nome}</h1>

<ul>
    {#each valori as val}
        <li class:stato>
            <DropItem valore={val} bind:selezionato={select} />
        </li>
    {/each}
</ul>

<style>
    h1 {
        background-color: red;
        border-radius: 10px;
        color: white;
    }
    .stato{
        visibility: hidden;
        height: 0px;
        margin: 0px;
    }
</style>
