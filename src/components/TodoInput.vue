<template>
  <div>
    <input
        type="text"
        placeholder="What to do today?"
        v-model.trim="newTodoItem" v-on:keypress.enter="addTodoInput" autofocus>
    <button type="button" @click.prevent="addTodoInput">List Add</button>
    <button type="button" @click.prevent="chkChange">Delete</button>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

  export default {
    name: "TodoInput",
    data(){
      return{
        newTodoItem: '',
      }
    },
    computed: {
      ...mapState({
        count: 'count',
      })
    },
    methods: {
      ...mapMutations({
        addTodo : 'addTodo',
        chkTodo : 'chkTodo'
      }),
      addTodoInput: function(n){
        const today = this.$moment().format('YYYY-MM-DD HH:mm:ss');

        if(this.newTodoItem !== ''){
          this.addTodo({
            todoId: this.count,
            todoYou: this.newTodoItem,
            todoDate: today,
            todoBool: false,
            todoStyle: false,
          })
          n.preventDefault()
        }else{
          alert('Nothing to do today?!')
        }
        this.clearInput();
      },
      clearInput(){
        this.newTodoItem = '';
      },
      chkChange(){
        this.chkTodo()
      }
    }
  }
</script>

<style scoped>

</style>