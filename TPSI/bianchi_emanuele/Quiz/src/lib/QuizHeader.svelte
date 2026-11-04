<script>
  let { currentIndex, totalQuestions, score } = $props();
</script>

<header class="quiz-header">
  <p class="info-text">
    Domanda {currentIndex + 1} di {totalQuestions} · Punteggio: {score}
  </p>
  <progress value={currentIndex + 1} max={totalQuestions}></progress>
</header>

<style>
  .quiz-header {
    margin-bottom: 1.5rem;
  }
  .info-text {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  progress {
    width: 100%;
    height: 12px;
  }
</style>