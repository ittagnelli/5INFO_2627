<script>
    export let prio = 3;
    export let disabled = false;

    const prio2str = (prio) => {
        let map = {
            1: "ALTA",
            2: "MEDIA",
            3: "BASSA"
        };
        return map[prio];
    };

    const change_prio = () => {
        if (!disabled) {
            prio = (prio % 3) + 1;
        }
    };
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<span class={disabled ? 'DISABILITATO' : prio2str(prio)} on:click={change_prio}>
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
    }

    span:hover {
        cursor: pointer;
    }

    .ALTA { background-color: red; }
    .MEDIA { background-color: orange; }
    .BASSA { background-color: green; }
    .DISABILITATO { background-color: gray; }
</style>