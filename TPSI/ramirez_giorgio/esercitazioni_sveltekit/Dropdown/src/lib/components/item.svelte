<script>
    export let value = "";
</script>

<button class="item-btn" on:click>
    {value}
</button>

<style>
    .item-btn {
        display: block;
        width: 100%;
        padding: 12px 20px;
        text-align: left;
        border: none;
        border-bottom: 1px solid
        font-size: 1rem;
        color: #333;
        font-family: 'Times New Roman', Times, serif;
    }

    .item-btn:last-child {
        border-bottom: none;
    }
</style>