<script>
// @ts-nocheck

import Icon from "./icon.svelte";
import TodoItem from "./todo_item.svelte";
import { onMount } from "svelte";

// @ts-ignore
let todos = []

    let last_id = 0;

    const create_todo = async () => {
        let todo = {
            id: ++last_id,
            task: '',
            done: false,
            priority: 3
        };
        console.log('CREATE: ', todo)

        localStorage.setItem(`todo${todo.id}`, JSON.stringify(todo))

        // @ts-ignore
        todos = [...todos, todo]
    }
    // @ts-ignore
    const change_todo_item = async (e) => {
        switch(e.detail.type){
            case 'update':
                // @ts-ignore
                update_item,(e.detail.id)
                break
            case 'delete' :
                delete_item(e.detail.id)
                break
        }
    }
    // @ts-ignore
    const delete_item = (id) => {
        console.log('DELETE', id);
        // @ts-ignore
        todos = todos.filter(t => t.id != id);
    }
    // @ts-ignore
    const update_item = (id) => {
        console.log('UPDATE:', id)

        // @ts-ignore
        const todo = todos.filter(t => t.id == id)[0];
        // @ts-ignore
        localStorage.setItem(`todo${id}`, JSON.stringify(todo));
    }

    onMount(async () => {
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            // @ts-ignore
            const todo = JSON.parse(localStorage.getItem(key));
            if (todo != null)
                todos.push(todo)
        }

        // @ts-ignore
        todos= [...todos];
    })
</script>
<h1 class="app-title">ToDos</h1>
<div class="todo-list">
    <div class="header"><Icon name="tag" /></div>
    <div class="header"><Icon name="task_alt" /></div>
    <div class="header"><Icon name="list" /></div>
    <div class="header"><Icon name="schedule" /></div>
    <div class="header"><Icon name="add_box" handler={create_todo}/></div>

{#each todos as todo}
    <TodoItem todo={todo} on:change={change_todo_item}/>
{/each}
</div>

<style>


@import url(https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap);


    .todo-list {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 0px solid blue;
        width: 95%;
        margin: auto}
    
    .app-title {
        font-family: 'Permanent Marker', cursive;
        margin-top: 0px;
        font-size: 60px;
        opacity: 0.3;
    
    .header{
        border-bottom: 1px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-bottom: 20px;
    }

    .header-last{
        border-right: none
    }

}


</style>