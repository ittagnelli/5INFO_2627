<script>
  import Icon from "./icon.svelte";
  import Item from "./todo_items.svelte";

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
    // @ts-ignore
    todos = [...todos, todo];
  }

  // @ts-ignore
  const changeToDoItem = async (e) => {
    deleteItems(e.detail.id);
  };

  // @ts-ignore
  const deleteItems = (id) => {
    console.log("DELETE:", id);
    // @ts-ignore
    todos = todos.filter((t) => t.id != id);
  };
</script>

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
