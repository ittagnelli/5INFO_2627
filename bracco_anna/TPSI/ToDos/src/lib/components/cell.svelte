<script>
    export let last = false;
</script>

<div class='cell {last ? 'cell-last' : ''}'>
    <slot/>
</div>

<style>

    div {

        margin: 0px 5px 30px 5px;
        width: 90px;
        height: 90px;
    }
    .cell-last{
        border-right: none;
    }

</style>