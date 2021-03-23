<template>
  <div>
    <TodoListOff></TodoListOff>
    <TodoListOn></TodoListOn>
  </div>
</template>

<script>
import TodoListOff from "./TodoListOff";
import TodoListOn from "./TodoListOn";

  export default {
    name: "TodoList",
    components: {
      'TodoListOff': TodoListOff,
      'TodoListOn': TodoListOn,
    },
  }
</script>

<style scoped>

</style>