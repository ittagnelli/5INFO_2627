<script>
    export let prio = 3;
    const prios = {1:"ALTA",2:"MEDIA",3:"BASSA"};
    const getPrio = (num) => {
        return prios[num];
    }
</script>

<span class={getPrio(prio)} on:click={()=>{prio = (prio+1) %3 +1}}>
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
</style>
