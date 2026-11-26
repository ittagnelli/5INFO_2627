<script>
  let { questionData, selectedOption = null, onselect } = $props();

  function handleButtonClick(index) {
    if (selectedOption === null && onselect) {
      onselect(index);
    }
  }
</script>

<div class="question-card">
  <h2>{questionData.question}</h2>

  <div class="options">
    {#each questionData.options as option, index}
      <button
        type="button"
        disabled={selectedOption !== null}
        onclick={() => handleButtonClick(index)}
        class:correct={selectedOption !== null && index === questionData.answer}
        class:wrong={selectedOption !== null && selectedOption === index && index !== questionData.answer}
      >
        {option}
      </button>
    {/each}
  </div>

  {#if selectedOption !== null}
    <div class="feedback">
      {#if selectedOption === questionData.answer}
        <p class="feedback-correct">Risposta corretta!</p>
      {:else}
        <p class="feedback-wrong">
          Risposta sbagliata. La risposta giusta è: <strong>{questionData.options[questionData.answer]}</strong>
        </p>
      {/if}
    </div>
  {/if}
</div>

<style>
  .question-card h2 {
    margin-bottom: 1.2rem;
    font-size: 1.25rem;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1rem;
  }
  button {
    padding: 0.6rem 1rem;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #f8f9fa;
    border-radius: 4px;
  }
  button:disabled {
    cursor: not-allowed;
  }
  button.correct {
    background-color: #d4edda !important;
    border-color: #c3e6cb !important;
    color: #155724 !important;
    font-weight: bold;
  }
  button.wrong {
    background-color: #f8d7da !important;
    border-color: #f5c6cb !important;
    color: #721c24 !important;
  }
  .feedback {
    margin-top: 1rem;
    font-size: 1.05rem;
  }
  .feedback-correct {
    color: #28a745;
    font-weight: bold;
  }
  .feedback-wrong {
    color: #dc3545;
  }
</style>