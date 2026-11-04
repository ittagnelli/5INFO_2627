<script>
  let { onAdd } = $props();

  let nome = $state('');
  let cognome = $state('');
  let telefono = $state('');
  let email = $state('');

  let isFormInvalido = $derived(!nome.trim() || !cognome.trim() || !telefono.trim());

  function inviaForm(e) {
    e.preventDefault();
    if (isFormInvalido) return;

    onAdd({
      nome: nome.trim(),
      cognome: cognome.trim(),
      telefono: telefono.trim(),
      email: email.trim()
    });

    nome = '';
    cognome = '';
    telefono = '';
    email = '';
  }
</script>

<div class="form-container">
  <h2>Nuovo contatto</h2>
  <form onsubmit={inviaForm}>
    <div class="grid">
      <label>
        Nome
        <input type="text" bind:value={nome} />
      </label>

      <label>
        Cognome
        <input type="text" bind:value={cognome} />
      </label>

      <label>
        Telefono
        <input type="text" bind:value={telefono} />
      </label>

      <label>
        Email
        <input type="text" bind:value={email} />
      </label>
    </div>

    <button type="submit" disabled={isFormInvalido}>Aggiungi</button>
  </form>
</div>

<style>
  .form-container {
    margin-top: 20px;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 15px;
    max-width: 500px;
    margin-bottom: 15px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
  }

  input {
    padding: 4px;
    margin-top: 2px;
  }

  button {
    padding: 4px 12px;
  }
</style>