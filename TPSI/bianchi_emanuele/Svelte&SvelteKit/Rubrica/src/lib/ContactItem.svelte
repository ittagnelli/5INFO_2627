<script>
  let { contatto, onToggle, onDelete } = $props();
</script>

<li class:preferito={contatto.preferito}>
  <button onclick={() => onToggle(contatto.id)} aria-label="Preferito">
    {#if contatto.preferito}★{:else}☆{/if}
  </button>

  <span class="dettagli">
    <strong>{contatto.cognome} {contatto.nome}</strong> · {contatto.telefono}
    {#if contatto.email}
      · {contatto.email}
    {/if}
  </span>

  <button onclick={() => onDelete(contatto.id)}>Elimina</button>
</li>

<style>
  li {
    margin-bottom: 4px;
    padding: 2px 4px;
    list-style-type: disc;
  }

  li.preferito {
    background-color: #fefec8;
  }

  .dettagli {
    margin: 0 4px;
  }
</style>