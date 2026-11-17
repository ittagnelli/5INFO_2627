<script>
  import Cell from "./cell.svelte";
  import Icon from "./icon.svelte";
  import Priority from "./priority.svelte";

  export let todo;

  const toggleStatus = () => {
    todo.done = !todo.done;
  };
</script>

<Cell>{todo.id}</Cell>
<Cell>
  {#if todo.done == false}
    <Icon nome="circle" handler={toggleStatus} />
  {:else}
    <Icon nome="task_alt" handler={toggleStatus} />
  {/if}
</Cell>
<Cell>{todo.task}</Cell>
<Cell><Priority /></Cell>
<Cell><Icon nome="delete_forever" /></Cell>
