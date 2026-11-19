<script>
    export let prio = 3;
    export let disabled = false;

    const prios = {1:"ALTA",2:"MEDIA",3:"BASSA"};
    const getPrio = (num) => prios[num]
    const chgPrio = () => {
        if(!disabled){
            prio = (prio+1) %3 +1;
        }
    }
</script>

<span class={disabled ? 'DISABILITATO' : getPrio(prio)} on:click={chgPrio}>
    {getPrio(prio)}
</span>

<style>
    span{
        display: inline-block;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        width: 100px;
        height: 30px;
    }
    span:hover{
        cursor: pointer;
    }
    .ALTA{
        background-color: red;
    }
    .MEDIA{
        background-color: orange;
    }
    .BASSA{
        background-color: green;
    }
    .DISABILITATO{
        background-color: grey;
    }
</style>
