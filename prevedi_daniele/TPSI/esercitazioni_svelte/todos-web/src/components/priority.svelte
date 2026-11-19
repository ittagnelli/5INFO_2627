<script>
    export let prio = 3
    export let disabled = false

    const prio2str = (prio) => {
        let map = {
            1: 'ALTA',
            2: 'MEDIA',
            3: 'BASSA'
        }
        return map[prio]
    }

    const change_prio = () => {
        prio = (prio + 1) % 3 + 1
    }
</script>

<span class={disabled ? 'disabilitato' : prio2str(prio)} on:click={change_prio}>
    {prio2str(prio)}
</span>

<style>
    span {
        display: inline-block;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        width: 100px;
        height: 30px;
        user-select: none;
    }

    span:hover {
        cursor: pointer;
    }

    .disabilitato {
        background-color: grey;
    }

    .ALTA {
        background-color: red;
    }

    .MEDIA {
        background-color: orange;
    }

    .BASSA {
        background-color: green;
    }
</style>