<script>
    // @ts-ignore
    import { updated } from "$app/state";
  import Icon from "./icon.svelte";
  import Item from "./todo_items.svelte";
  import {onMount} from "svelte";

  // @ts-ignore
  /**
   * @type {any[] | null | undefined}
   */
  let todos = [];
  let lastID = 0;

  async function createTodo() {
    let todo = {
      id: ++lastID,
      task: "",
      done: false,
      priority: 1,
    };
    console.log("Crato", todo);
    localStorage.setItem(`todo${todo.id}`, JSON.stringify(todo));
    // @ts-ignore
    todos = [...todos, todo];
  }

  // @ts-ignore
  const changeToDoItem = async (e) => {
    switch(e.detail.type){
        case 'update':
          update_item(e.detail.id);
        break;
        case 'delete':
          // @ts-ignore
          deleteItems(e.detail.id);
        break;
    }
  };


  // @ts-ignore
  const update_item = (id) => {
      console.log("UPDATE:", id);
    //aggiorna Il localstroage
      // @ts-ignore
      const todo = todos.filter(t => t.id = id)[0];
      // @ts-ignore
      localStorage.setItem(todo$(id), JSON.stringify(todo));
  }

  // @ts-ignore
  // @ts-ignore
  const deleteItems = (id) => {
    console.log("DELETE:", id);
    // @ts-ignore
    todos = todos.filter((t) => t.id != id);
    localStorage.removeItem(`todo&{is}`);
    };
  onMount(async()=>{
    for(let i=0; i < localStorage.length; i++ ){
      const key = localStorage.key(i);
      const keyn = +key.substring(4);
      if (keyn>=last_id) {
        last_id = keyn;
        
      }
      // @ts-ignore
      const todo = JSON.parse(localStorage.getItem(key));
      if (todo != null)
        // @ts-ignore
        todos.push(todo);
    }
    todos = [...todos]
  })
 
  


</script>
<h1 class="app-title">ToDos</h1>
<div class="todo-list">
  <div class="header"><Icon nome="tag" /></div>
  <div class="header"><Icon nome="task_alt" /></div>
  <div class="header"><Icon nome="list" /></div>
  <div class="header"><Icon nome="schedule" /></div>
  <div class="header header-last">
    <Icon nome="add_box" handler={createTodo} />
  </div>

  {#each todos as todo}
    <Item {todo} on:change={changeToDoItem} />
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
    display: grid;
    grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    width: 95%;
    height: 80vh;
  }
  .header {
    border-bottom: 1px solid #e7ecee;
    border-right: 1px solid #e7ecee;
    text-align: center;
    padding-bottom: 20px;
  }
  .header-last {
    border-right: none;
  }
</style>