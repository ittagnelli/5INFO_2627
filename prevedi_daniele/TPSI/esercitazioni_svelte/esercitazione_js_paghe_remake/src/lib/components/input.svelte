<script>
    export let typeInput = ""
    export let idInput = ""
    export let sizeInput = 15
    export let minInput = 0
    export let datalistOptions = []
</script>

<input type={typeInput} id={idInput} size={typeInput == "text" ? sizeInput : undefined} min={typeInput == "number" || typeInput == "month" ? minInput : undefined} />
{#if typeInput == "datalist"}
    <datalist id={idInput}>
        {#each datalistOptions as option}
            <option value={option}></option>
        {/each}
    </datalist>
{/if}