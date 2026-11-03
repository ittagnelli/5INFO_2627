<script>
    import Icon from "./icon.svelte"
</script>

<h1>ToDos</h1>
<div class="todo-list">
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>

    <!-- ToDo Item 1 -->
    <div>Cella 1</div>
    <div>Cella 2</div>
    <div>Cella 3</div>
    <div>Cella 4</div>
    <div>Cella 5</div>

    <!-- ToDo Item 2 -->
    <div>Cella 1</div>
    <div>Cella 2</div>
    <div>Cella 3</div>
    <div>Cella 4</div>
    <div>Cella 5</div>

    <!-- ToDo Item 3 -->
    <div>Cella 1</div>
    <div>Cella 2</div>
    <div>Cella 3</div>
    <div>Cella 4</div>
    <div>Cella 5</div>
</div>

<style>
    .todo-list{
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
    }
</style>