<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</svelte:head>

<script>
    export let nomeIcona = ""
</script>

<span class="material-icons icon">{nomeIcona}</span>

<style>
    .icon {
        color: black;
        font-size: 2rem;
    }
    
    .icon:hover {
        cursor: pointer;
        color: green;
        font-weight: bolder;
    }
</style>