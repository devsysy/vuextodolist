<template>
  <div id="app">
    <h1>{{message}}</h1>
    <TodoInput></TodoInput><br>
    <TodoList></TodoList>
    <h2>TodoListOne App</h2>
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
      message: 'TodoList App, :)',
    }
  }
}
</script>

<style>
#app{ margin-top: 30px; margin-left: 30px; }
#app li{ list-style: none; }
#app h1{ margin-bottom: 20px; }


</style>
