<script>
    import { domande } from "../js/domande";
    import { indice } from "../js/store";
</script>


<p>Domanda {$indice} su {domande.length}</p>

<progress value={$indice} max={domande.length}></progress>
