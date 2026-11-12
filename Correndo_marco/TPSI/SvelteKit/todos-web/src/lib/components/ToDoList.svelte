<script>
    import Icon from "./icon.svelte"
    import ToDoItem from "./ToDoItem.svelte";
</script>

<h1>TODOS</h1>
<div class="tolist">
    <div class="header"><Icon name="tag" /></div>
    <div class="header"><Icon name="task_alt" /></div>
    <div class="header"><Icon name="list" /></div>
    <div class="header"><Icon name="schedule" /></div>
    <div class="header"><Icon name="add_box" /></div>

    <ToDoItem />

    <ToDoItem />

    <ToDoItem />
</div>


<style>
    .tolist{
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
    }
</style>
