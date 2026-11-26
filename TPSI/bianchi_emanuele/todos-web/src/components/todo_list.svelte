<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_items.svelte";
    import { onMount } from "svelte";
    
    onMount(async () => {
        for (let i=0; i<localStorage.length; i++) {
            // @ts-ignore
            const key = localStorage.key(i);

            // @ts-ignore
            const keyn = +key?.substring(4);
            
            // @ts-ignore
            if (keyn >= last_id)
                // @ts-ignore
                last_id = keyn;
            // @ts-ignore
            const todo = JSON.parse(localStorage.getItem(key));
            if (todo!= null)
                // @ts-ignore
                todos.push(todo);
        }
        // @ts-ignore
        todos = [... todos];
    });
    // @ts-ignore
    /**
     * @type {any[] | null | undefined}
     */
    let todos = [];
    let last_id = 0;

    const create_todo = async () => {
        let todo = {
            id: ++last_id,
            task: '',
            done: false,
            priority: 3
        };
        console.log("CREATE", todo);

        localStorage.setItem(`todo${todo.id}`, JSON.stringify(todo));
        // @ts-ignore
        todos = [...todos, todo];
    };

    // @ts-ignore
    const handle_change = (e) => {
        if (e.detail.type === 'delete') {
            // @ts-ignore
            todos = todos.filter((t) => t.id !== e.detail.id);
        }
    };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    const change_todo_item = async (e) => {
        switch (e.detail.type) {
            case 'update':
                update_item(e.detail.id);
                break;
            case 'delete':
                // @ts-ignore
                delete_item(e.detail.id);
                break;
            }
        }

    // @ts-ignore
    const update_item = (id)=> {
        console.log("UPDATE", id);

        // @ts-ignore
        const todo = todos.filter(t => t.id == id) [0];
        localStorage.setItem(`todo${id}`, JSON.stringify(todo));
    }

    // @ts-ignore
    const delete_item = (id) =>
    {
        console.log("DELETE:", id);
        // @ts-ignore
        todos = todos.filter(t => t.id != id);

        localStorage.removeItem(`todo${id}`);
    }
</script>

<h1 class="app-title">ToDos</h1>

<div class="todo-list">
    <div class="header"><Icon name="tag" /></div>
    <div class="header"><Icon name="task_alt" /></div>
    <div class="header"><Icon name="list" /></div>
    <div class="header"><Icon name="schedule" /></div>
    <div class="header"><Icon name="add_box" handler={create_todo} /></div>

    {#each todos as todo (todo.id)}
        <TodoItem {todo} on:change={handle_change} />
    {/each}
</div>

<style>
    @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
    .app-title {
        font-family: 'Permanent Marker', cursive;
        margin-top: 0px;
        font-size: 60px;
        opacity: 0.3;
    }
    .todo-list {
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    }
</style>