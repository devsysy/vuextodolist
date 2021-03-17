<template>
  <div>
    <input
        type="text"
        placeholder="What to do today?"
        v-model.trim="newTodoItem" v-on:keyup.enter="addTodo" autofocus>
    <button type="text" @click="addTodoInput">List Add</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

  export default {
    name: "TodoInput",
    data(){
      return{
        newTodoItem: '',
      }
    },
    methods: {
      ...mapMutations({
        addTodo : 'addTodo'
      }),
      addTodoInput: function(n){
        const today = this.$moment().format('YYYY-MM-DD HH:mm:ss');


        if(this.newTodoItem !== ''){
          this.addTodo(this.newTodoItem + '작성일자' + today)
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