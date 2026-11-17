<svelte:head>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
</svelte:head>
<script>
    export let name;
    export let handler = () => {};
    export let color = "green"
</script>

<span class="material-icons-outlined icon" style="--color:{color};" onclick={handler}>
    {name}
</span>

<style>
    .icon {
        font-size: 32px;
        color: var(--color);
        
}
    .icon:hover {
        cursor: pointer;
}
</style>