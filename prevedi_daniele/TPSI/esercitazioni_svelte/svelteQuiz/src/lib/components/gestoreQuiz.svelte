<script>
    import Domanda from "../components/domanda.svelte"
    import { numeroDomandeQuiz, avanzamentoQuiz, risposteDomande } from "../js/store.js"

    export let domandeQuiz = []

    function prossimaDomanda(rispostaSelezionata){
        const {rispostaCorretta, testoDomanda} = rispostaSelezionata.detail
        $avanzamentoQuiz = $avanzamentoQuiz + 1
        if (rispostaCorretta == true) {
            punteggio = punteggio + 1
        }
    }

    $numeroDomandeQuiz = domandeQuiz.length
    let punteggio = 0

</script>

<p>Domanda {$avanzamentoQuiz} di {$numeroDomandeQuiz} - Punteggio: {punteggio}</p>
<progress max="{Number($numeroDomandeQuiz)}" value="{Number($avanzamentoQuiz)}"></progress>

<Domanda domanda={domandeQuiz[$avanzamentoQuiz]} />