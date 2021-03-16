<template>
  <div>
    <input
        type="text"
        placeholder="What to do today?"
        v-model.trim="newTodoItem" v-on:keyup.enter="addTodo" autofocus>
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
      addTodo: function(n){
        const today = this.$moment().format('YYYY-MM-DD hh:mm:ss');

        if(this.newTodoItem !== '' ){
          this.$store.state.todoItems.unshift(this.newTodoItem + '작성일자:' + today)
          n.preventDefault()
        }else{
          alert('Nothing to do today?!')
        }
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