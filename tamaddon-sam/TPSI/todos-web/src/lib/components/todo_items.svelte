<script>
    import Cell from "./cell.svelte";
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import {createEventDispatcher} from "svelte"
  
    export let todo;
    const dispatch = createEventDispatcher();
  
    // @ts-ignore
    const itemChange = (type) =>{
      dispatch("change",{
        id: todo.id,
        type: type
      });
    }
  
    const toggleStatus = () => {
      todo.done = !todo.done;
    };
  
      const editTask = () => {
      // @ts-ignore
      document.getElementById(todo.id).blur();
    }
  
  
  </script>
  
  <Cell>{todo.id}</Cell>
  <Cell>
    {#if todo.done == false}
      <Icon nome="circle" handler={toggleStatus} color = "red"/>
    {:else}
      <Icon nome="task_alt" handler={toggleStatus} />
    {/if}
  </Cell>
  <Cell><input type="text" class="todo-item-input-text" id="{todo.id}" placeholder="Inserisci il ToDo" bind:value={todo.task} on:change={editTask}></Cell>
  <Cell><Priority /></Cell>
  <Cell><Icon nome="delete_forever" color="red" handler={() => itemChange('delete')} /></Cell>
  
  <style>
    .todo-item-input-text {
      border: none;
      width: 90%;
      height: 30px;
      font-size: 20px;
      color: #525252;
  
      &:focus{
        background-color: rgb(202, 229, 253);
        color: black;
        padding: 4px;
        padding-left: 10px;
      }
    }
  </style>