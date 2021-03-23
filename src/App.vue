<template>
  <div id="app">
    <h2>{{message}}</h2><br>
    <TodoInput></TodoInput><br>
    <TodoList></TodoList>
    <hr>
    <h2>TodoListOne App</h2><br>
    <TodoOnPush></TodoOnPush>
    <TodoOne></TodoOne>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoOnPush from "@/components/TodoOnPush";
import TodoOne from "@/components/TodoOne";


export default {
  name: 'App',
  components: {
    'TodoOnPush': TodoOnPush,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoOne': TodoOne
  },
  data(){
    return{
      message: "TodoList App, '-'",
    }
  }
}
</script>

<style>
  #app{ margin-top: 10px; margin-left: 10px; }
  #app li{ list-style: none; }
</style>
