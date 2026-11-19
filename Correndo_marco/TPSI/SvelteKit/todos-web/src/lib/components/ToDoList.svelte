<script>
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import ToDoItem from "./ToDoItem.svelte";

    let todos = localStorage.getItem("todos");
    todos = todos == null ? [] : todos;
    let last_id = 0;

    const crea_todo = async () => {
        let todo = {
            id : ++last_id,
            task:'',
            done:false,
            priority:3
        };
        todos = [...todos,todo];
    }
    const changeTodoItem = async (ev) => {
        deleteItem(ev.detail.id);
    }
    const deleteItem = (id) => {
        todos = todos.filter(el => el.id != id);
    }
</script>

<h1 class="app-title">ToDos</h1>

<div class="tolist">
    <div class="header"><Icon name="tag" /></div>
    <div class="header"><Icon name="task_alt" /></div>
    <div class="header"><Icon name="list" /></div>
    <div class="header"><Icon name="schedule" /></div>
    <div class="header header_last"><Icon name="add_box" handler={crea_todo} /></div>

    {#each todos as todo}
        <ToDoItem todo={todo} on:change={changeTodoItem} />
    {/each}
</div>


<style>
    
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    .app-title{
        font-family: "Press Start 2P", system-ui;
        margin-top: 0px;
        font-size: 60px;
        opacity: 0.3;
    }

    .tolist{
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 0px solid blue;
        width: 95%;
        margin: auto;
    }
    .header{
        border-bottom: 1px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-bottom: 20px;
    }
    .header_last{
        border-right: none;
    }
</style>
