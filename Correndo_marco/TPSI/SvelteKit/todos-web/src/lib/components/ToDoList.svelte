<script>
    import Icon from "./icon.svelte";
    import ToDoItem from "./ToDoItem.svelte";
    import { onMount } from "svelte";
    
    let todos = [];
    let last_id = 0;
    let modPrio = true;
    let modId = true;

    onMount(async () => {
        for(let i=0;i< localStorage.length;i++){
            const key = localStorage.key(i);
            const keyn = +key?.substring(4);

            if(keyn >= last_id)
                last_id = keyn;

            const todo = JSON.parse(localStorage.getItem(key));

            if(todo != null){
                todos.push(todo);
            }
        }
        todos.sort((a,b) => a.id - b.id);
        todos = [...todos];
    });
    
    const crea_todo = async () => { 
        let todo = {
            id : ++last_id,
            task:'',
            done:false,
            priority:3
        };
        localStorage.setItem(`Todo${todo.id}`,JSON.stringify(todo));
        todos = [...todos,todo];
    }

    const toggleAll = async () => {
        for(let i =0;i<todos.length;i++){
            todos[i].done = !todos[i].done;
        }
        todos = [...todos];
    }

    const orderById = async () => {
        if(modId){
            todos.sort((a,b) => a.id - b.id);
        }else{
            todos.sort((a,b) => b.id - a.id)
        }
        modId = !modId
        todos = [...todos];
    }

    const orderByPrio = async () => {
        if(modPrio){
            todos.sort((a,b) => b.priority - a.priority);
        }else{
            todos.sort((a,b) => a.priority - b.priority)
        }
        modPrio = !modPrio
        todos = [...todos];
    }

    const changeTodoItem = async (ev) => {
        switch(ev.detail.type){
            case 'delete':
                deleteItem(ev.detail.id);
                break;
            case 'update':
                updateItem(ev.detail.id);
                break;
        }
    }

    const deleteItem = (id) => {
        todos = todos.filter(el => el.id != id);
        localStorage.removeItem(`Todo${id}`);
    }

    const updateItem = (id) => {
        const todo = todos.filter(t => t.id == id)[0];
        localStorage.setItem(`Todo${id}`,JSON.stringify(todo));
    }
</script>

<h1 class="app-title">ToDos</h1>

<div class="tolist">
    <div class="header"><Icon name="tag" handler={orderById} /></div>
    <div class="header"><Icon name="task_alt" handler={toggleAll} /></div>
    <div class="header"><Icon name="list" /></div>
    <div class="header"><Icon name="schedule" handler={orderByPrio} /></div>
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
