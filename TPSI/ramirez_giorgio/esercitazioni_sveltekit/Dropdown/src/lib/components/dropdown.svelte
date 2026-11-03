<script>
    import Item from './item.svelte'; 

    export let nome = "Menu"
    export let Aperto = false
    export let items = []
    export let onToggle = () => {}
    export let onSelect = (valore) => {}
</script>

<div class="dropdown-wrapper">
    <button class="dropdown-btn" on:click={onToggle}>
        <span class="nome">{nome}</span>
        <span class="freccia">
            ▼
        </span>
    </button>
    
    {#if Aperto}
        <div class="dropdown-list">
            {#each items as item}
                <Item value={item} on:click={() => onSelect(item)} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .nome {
        font-family: Times New Roman, Times, serif;
    }
    
    .dropdown-wrapper {
        width: 320px;
        margin-bottom: 25px;
    }

    .dropdown-btn {
        width: 100%;
        background-color: #ff0000;
        color: white;
        font-size: 1.25rem;
        font-weight: bold;
        padding: 14px 20px;
        border: 0px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .freccia {
        position: absolute;
        right: 20px;
        display: flex;
    }

    .dropdown-list {
        width: 100%;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-top: 8px;
        overflow: hidden;
    }
</style>