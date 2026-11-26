<script>
    export let testo = ""
    export let valoreEuro = 0
    export let visibile = false
</script>

{#if visibile}
    <table>
        <tbody>
            <tr>
                <td colspan=5>
                    <hr>
                </td>
            </tr>
            <tr>
                <td colspan=4>
                    <p>{testo.toUpperCase()}</p>
                </td>
                <td>
                    <p class="valore">{valoreEuro.toFixed(2)} €</p>
                </td>
            </tr>
            <tr>
                <td colspan=5>
                    <hr>
                </td>
            </tr>
        </tbody>
    </table>
{/if}

<style>
    table {
        margin: auto;
        width: 40%;
        border-spacing: 0px 15px;
        text-align: center;
    }

    .valore {
        font-weight: bolder;
    }
</style>