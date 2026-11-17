
<script:head>
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
</script:head>
<script>
  export let nome;
  export let handler = () => {};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span class="material-symbols-outlined icon" onclick={handler}> {nome} </span>
<style>
  .icon {
    font-size: 32px;
  }

  .icon:hover {
    cursor: pointer;
  }
</style>
