<script>
  import { contatore } from "../../lib/js/store.js";
  import { doppio } from "../../lib/js/store.js";
</script>

<div>
  <p>Pagina About</p>
  <p>Valore contatore: {$contatore}</p>
  <p>Valore doppio: {$doppio}</p>
</div>
<style>
    div {
        border-color: rgb(128, 0, 0);
        border-width: 2px;
        border-style: solid;
        height: 100%;
    }
</style>