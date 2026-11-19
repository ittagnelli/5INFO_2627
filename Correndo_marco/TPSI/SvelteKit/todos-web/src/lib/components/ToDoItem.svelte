<script>
    import Icon from "./icon.svelte";
    import Cell from "./cell.svelte";
    import Priority from "./priority.svelte";
    import { createEventDispatcher } from "svelte";
    
    export let todo;
    const dispatcher = createEventDispatcher();

    const toggleStatus = () => {
        todo.done = !todo.done;
    }
    const editTask = () => {
        document.getElementById(todo.id).blur();
    }

    const itemChange = (type) => {
        dispatcher('change',{type:type, id:todo.id});
        console.log(`DELETE ${JSON.stringify(todo)}`)
    }
    
</script>

<Cell>{todo.id}</Cell>

<Cell>
    {#if todo.done}
        <Icon name="task_alt" handler={toggleStatus} />
    {:else}
        <Icon name="circle" handler={toggleStatus} color="red" />
    {/if}
</Cell>

<Cell>
    <input 
        type="text" 
        class="todo-item-input-text {todo.done ? 'text-done' : ''}"
        id="{todo.id}"
        placeholder="Inserisci il tuo nuovo To Do"
        disabled={todo.done}
        bind:value={todo.task}
        on:change={editTask} />
</Cell>

<Cell><Priority disabled={todo.done} /></Cell>

<Cell last>
    <Icon name="delete_forever" color="red" handler={() => itemChange('delete')} />
</Cell>


<style>
    .todo-item-input-text{
        border: none;
        width: 90%;
        height: 30px;
        font-size: 20px;
        color: #525252;
    }
    .todo-item-input-text:focus{
        background-color: rgb(204,229,253);
        color: black;
        padding: 4px;
        padding-left: 10px;
    }

    .text-done{
        text-decoration: line-through;
        opacity: 0.3;
    }
</style>