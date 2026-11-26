<script>
    export let last = false;

    import { fade } from 'svelte/transition'

</script>

<div class='cell {last ? 'cell-last' : ''}'
    in:fade="{{duration: 700}}"
    out:fade="{{duration: 350}}">
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