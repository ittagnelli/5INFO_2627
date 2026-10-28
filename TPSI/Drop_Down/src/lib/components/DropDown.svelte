<script:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=stat_minus_1" />
</script:head>

<script>
  let { text, ontoggle } = $props();
</script>

<button class="trigger" onclick={ontoggle}>
  <span>{text}</span>
  <span class="chevron material-symbols-outlined">stat_minus_1</span>
</button>

<style>
  .trigger {
    width: 20rem;
    height: 3rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    font-weight: 600;
  }

  .trigger:hover {
    background-color: #cc0000;
  }
</style>