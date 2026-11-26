<script>
  import { questions } from '../lib/questions.js';
  import QuizHeader from '../lib/QuizHeader.svelte';
  import QuestionCard from '../lib/QuestionCard.svelte';
  import ResultSummary from '../lib/ResultSummary.svelte';

  // Stato Svelte 5 (senza il backslash prima di $)
  let currentIndex = $state(0);
  let userAnswers = $state(Array(questions.length).fill(null));
  let showResult = $state(false);

  // Calcolo dinamico del punteggio e della selezione
  let score = $derived(
    userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].answer ? acc + 1 : acc;
    }, 0)
  );

  let currentSelection = $derived(userAnswers[currentIndex]);

  function handleSelect(selectedIndex) {
    userAnswers[currentIndex] = selectedIndex;
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      currentIndex += 1;
    } else {
      showResult = true;
    }
  }

  function handleRestart() {
    currentIndex = 0;
    userAnswers = Array(questions.length).fill(null);
    showResult = false;
  }
</script>

<main class="container">
  <h1>Quiz Svelte</h1>

  {#if !showResult}
    <QuizHeader
      {currentIndex}
      totalQuestions={questions.length}
      {score}
    />

    <QuestionCard
      questionData={questions[currentIndex]}
      selectedOption={currentSelection}
      onselect={handleSelect}
    />

    <div class="actions">
      <button
        type="button"
        disabled={currentSelection === null}
        onclick={handleNext}
      >
        {currentIndex === questions.length - 1 ? 'Vedi il risultato' : 'Avanti'}
      </button>
    </div>
  {:else}
    <ResultSummary
      {questions}
      {userAnswers}
      {score}
      onrestart={handleRestart}
    />
  {/if}
</main>

<style>
  .container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 0 1rem;
    font-family: system-ui, -apple-system, sans-serif;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .actions {
    margin-top: 1.5rem;
  }
  .actions button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
  .actions button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>