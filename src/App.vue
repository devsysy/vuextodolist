<template>
  <div id="app">
    <h1>{{message}}</h1>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";


export default {
  name: 'App',
  components: {
    'TodoInput': TodoInput,
    'TodoList': TodoList,
  },
  data(){
    return{
      message: 'TodoList App, :)',
    }
  }
}
</script>

<style>
#app li{
  list-style: none;
}

</style>
