<template>
  <div>
    <input type="text" placeholder="What to do today?" v-model="$store.state.newTodoItem" v-on:keyup.enter="addTodo" autofocus>
    <button type="text" @click="addTodo">List Add</button>
  </div>
</template>

<script>
  export default {
    name: "TodoInput",
    data(){
      return{

      }
    },
    methods: {
      addTodo: function(){
        this.$store.commit('addTodo', this.$store.state.newTodoItem);
        this.clearInput();
      },
      clearInput(){
        this.$store.state.newTodoItem = '';
      }
    }
  }
</script>

<style scoped>

</style>