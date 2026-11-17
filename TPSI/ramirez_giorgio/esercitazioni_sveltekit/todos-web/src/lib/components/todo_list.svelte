<script>
    import Icon from './icon.svelte'
    import Priority from './priority.svelte';
    import TodoItem from './todo_item.svelte';

    let todos = [
        {
            id:1,
            task: 'studiare TPSI',
            done:false,
            priority:1
        },
        {
            id:2,
            task: 'studiare RETI',
            done:false,
            priority:2
        },
        {
            id:3,
            task: 'studiare Informatica',
            done:false,
            priority:3
        },
    ]
</script>

<h1>ToDos</h1>

<div class="todo-list">


<div class="header"><Icon name='tag'/></div>
<div class="header"><Icon name='task_alt'/></div>
<div class="header"><Icon name='list'/></div>
<div class="header"><Icon name='schedule'/></div>
<div class="header"><Icon name='add_box'/></div>

<TodoItem todo={todos[0]}/>
<TodoItem todo={todos[1]}/>
<TodoItem todo={todos[2]}/>
</div>
<style>
    .todo-list {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    height: 80%;
    border: 3px solid blue;
    width: 95%;
    margin: auto;
    }
</style>
