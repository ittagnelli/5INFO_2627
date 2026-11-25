<script>
    import { arrayPaghe } from '../lib/store.js';
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