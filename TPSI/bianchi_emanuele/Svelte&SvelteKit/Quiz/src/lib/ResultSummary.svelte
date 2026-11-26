<script>
  let { questions = [], userAnswers = [], score = 0, onrestart } = $props();

  let percentage = $derived(Math.round((score / questions.length) * 100));
</script>

<div class="result-summary">
  <h2>Risultato Finale</h2>
  <p class="score-info">Punteggio: <strong>{score}</strong> su {questions.length} ({percentage}%)</p>

  <div class="judgment">
    {#if percentage === 100}
      <p class="excellent">Eccellente! Hai risposto correttamente a tutte le domande!</p>
    {:else if percentage >= 60}
      <p class="good">Buon lavoro! Hai superato il quiz con successo.</p>
    {:else}
      <p class="poor">Puoi fare di meglio. Riprova per migliorare il tuo punteggio!</p>
    {/if}
  </div>

  <h3>Riepilogo Risposte:</h3>
  <ol class="answers-list">
    {#each questions as q, i}
      {@const isCorrect = userAnswers[i] === q.answer}
      <li class:correct-item={isCorrect} class:wrong-item={!isCorrect}>
        <p><strong>{q.question}</strong></p>
        <p>
          La tua risposta: 
          <span class="user-answer">{q.options[userAnswers[i]]}</span>
          {#if !isCorrect}
            <br />
            Risposta corretta: <em>{q.options[q.answer]}</em>
          {/if}
        </p>
      </li>
    {/each}
  </ol>

  <button class="btn-restart" onclick={onrestart}>Ricomincia</button>
</div>

<style>
  .result-summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .score-info {
    font-size: 1.2rem;
  }
  .judgment p {
    font-weight: bold;
    font-size: 1.1rem;
  }
  .excellent { color: #28a745; }
  .good { color: #007bff; }
  .poor { color: #dc3545; }

  .answers-list {
    padding-left: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  .answers-list li {
    padding: 0.6rem;
    border-radius: 4px;
    border-left: 4px solid #ccc;
  }
  .correct-item {
    background-color: #e2f0d9;
    border-left-color: #28a745 !important;
    color: #155724;
  }
  .wrong-item {
    background-color: #fce4d6;
    border-left-color: #dc3545 !important;
    color: #721c24;
  }
  .btn-restart {
    align-self: flex-start;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
  }
</style>