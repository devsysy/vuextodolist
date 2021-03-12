<template>
  <div>
    <input
        type="text"
        placeholder="What to do today?"
        v-model="newTodoItem" v-on:keyup.enter="addTodo" autofocus>
    <button type="text" @click="addTodo">List Add</button>
  </div>
</template>

<script>
  export default {
    name: "TodoInput",
    data(){
      return{
        newTodoItem: '',
      }
    },
    methods: {
      addTodo: function(){
        this.$store.commit('addTodo', this.newTodoItem);
        this.clearInput();
      },
      clearInput(){
        this.newTodoItem = '';
      }
    }
  }
</script>

<style scoped>

</style>