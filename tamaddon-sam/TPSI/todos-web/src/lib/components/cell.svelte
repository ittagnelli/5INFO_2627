<script>
    export let isLast = false;
    
</script>
<div class="cell {isLast ? 'last-cell' : ''}">
    <slot/>
</div>
<style>
    .cell{
        border-bottom: 1px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-top: 10px;
        color: #525252;
        line-height: 32px;
        font-size: 18px;
    }
    .last-cell{
        border-right: none;
    }
</style>