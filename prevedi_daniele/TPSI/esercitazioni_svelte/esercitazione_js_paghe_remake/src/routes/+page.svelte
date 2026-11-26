<script>
    import { arrayPaghe, totaleEuro, mediaEuro, totaleVisibile, mediaVisibile } from '../lib/store.js';
    import Button from '#lib/components/button.svelte';
    import Input from '#lib/components/input.svelte';
    import Result from '#lib/components/result.svelte';

    function aggiungi(){
        console.log("Aggiungi")
    }

    function mostraSomma(){
        console.log("Mostra Somma")
    }

    function mostraMedia(){
        console.log("Mostra Media")
    }
</script>

<table id="paghe">
	<thead>
        <tr>
            <th>Dipartimento</th>
            <th>Cognome</th>
            <th>Nome</th>
            <th>Mese</th>
            <th>Importo</th>
            <th colspan=2>Azioni</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><Input typeInput="datalist" idInput="dipartimento" datalistOptions={["Marketing", "Finanza", "Legale", "Engineering", "Produzione"]} /></td>
            <td><Input typeInput="text" idInput="cognome" /></td>
            <td><Input typeInput="text" idInput="nome" /></td>
            <td><Input typeInput="month" idInput="mese" minInput="2024-01" /></td>
            <td><Input typeInput="number" idInput="importo" minInput="500" /></td>
            <td><Button nomeIcona="add" on:click={aggiungi} /></td>
            <td><Button nomeIcona="functions" on:click={mostraSomma} /></td>
            <td><Button nomeIcona="trending_up" on:click={mostraMedia} /></td>
        </tr>

        {#each $arrayPaghe as paga}
            <tr>
                <td>{paga.dipartimento}</td>
                <td>{paga.cognome}</td>
                <td>{paga.nome}</td>
                <td>{paga.mese}</td>
                <td>{paga.importo}</td>
            </tr>
        {/each}
    </tbody>
</table>

<Result testo="Totale" totale={$totaleEuro} visibile={$totaleVisibile} />
<Result testo="Media" totale={$mediaEuro} visibile={$mediaVisibile} />


<style>
    table {
        margin: auto;
        width: 40%;
        border-spacing: 0px 15px;
        text-align: center;
    }

    th {
        font-size: 20px;
    }
</style>