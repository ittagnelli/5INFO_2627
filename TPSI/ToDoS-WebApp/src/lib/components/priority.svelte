<script>
    export let prio = 3;
    export let disable = false;

    // @ts-ignore
    const prio2Str = (prio) => {
        let map = {
            1: 'ALTA',
            2: 'MEDIA',
            3: 'BASSA'
        }
        // @ts-ignore
        return map[prio];
    }

    const changePrio = () =>{
      if (!disable)
        prio = ((prio + 1) % 3) + 1;
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<span class={disable ? "DISABILITATO" : prio2Str(prio)} onclick={disable ? () => {} : changePrio}>
  {prio2Str(prio)}
</span>

<style>
  span {
    display: inline-block;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    width: 100px;
    height: 30px;

    &:hover {
      cursor: pointer;
    }
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

  .DISABILITATO {
    background-color: grey;
  }
</style>
