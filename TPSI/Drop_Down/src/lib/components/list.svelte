<script>
  let { options = [], selected = null, onselect } = $props();
</script>

<ul class="list">
  {#each options as option}
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <li class:active={option === selected} onclick={() => onselect(option)}>
      {option}
    </li>
  {/each}
</ul>

<style>
  .list {
    width: 20rem;
    margin-top: 10px;
    padding: 0;
    list-style: none;
    border: 1px solid gray;
    border-radius: 0.5rem 0.5rem;
    background: white;
  }

  li {
    padding: 0.5rem 1rem;
    height: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    border-bottom: 1px solid #eee;
  }

  li:hover {
    background-color: #f0f0f0;
  }
</style>
