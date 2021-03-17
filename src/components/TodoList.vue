<template>
  <div>
    <!-- 미완료 -->
    <TodoListOff></TodoListOff>
    <!-- 완료 -->
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
    data(){
      return{

      }
    },
    methods: {
      /*removeTodo: function(todoItem, i){
        this.$store.commit('removeTodo',{todoItem, i});
      },*/
    }
  }
</script>

<style scoped>

</style>