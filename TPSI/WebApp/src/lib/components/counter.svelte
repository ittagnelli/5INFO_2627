<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Bungee+Spice&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<script>
    let {counter = $bindable()} = $props();

    function decrementa() {
        if(counter > 0) {
            counter--;
        }
    }

    function incrementa() {
        counter++;
    }
</script>

<div class="container">
  <div class="pulsante">
    <button onclick={decrementa}>
      <span class="material-symbols-outlined icon">remove</span>
    </button>
  </div>
  <div class="number">
    {counter}
  </div>
  <div class="pulsante">
    <button onclick={incrementa}>
      <span class="material-symbols-outlined icon">add</span>
    </button>
  </div>
</div>

<style>
  .container {
    border: 4px solid #d43c2f;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    width: 300px;
    padding: 10px;
  }
  .pulsante {
    display: flex;
    align-items: center;
  }
  button {
    border: none;
    background: none;
  }
  .icon {
    font-size: 2.5rem;
    color: #f09c00;
    font-weight: bolder;
  }
  .icon:hover {
    color: #d43c2f;
    cursor: pointer;
  }
  .icon:active {
    text-shadow: 1px 1px 10px #d43c2f;
  }
  .number {
    font-size: 4rem;
    font-family: "Bungee Spice", cursive;
  }
</style>
