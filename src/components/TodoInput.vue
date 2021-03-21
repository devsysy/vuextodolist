<template>
  <div>
    <input
        type="text"
        placeholder="What to do today?"
        v-model.trim="newTodoItem" v-on:keypress.enter="addTodoInput" autofocus>&nbsp;
    <button type="button" @click.prevent="addTodoInput">AddTodo</button>&nbsp;
    <button type="button" @click.prevent="todoCompleteBtn">Complete</button>&nbsp;
    <button type="button" @click.prevent="todoIncompleteBtn">Incomplete</button>&nbsp;
    <button type="button" @click.prevent="removeBtn">Remove</button>
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
        todoBool: 'todoBool'
      }),
      /*...mapGetters({
        todoItemsDone: 'todoItemsDone'
      })*/
    },
    methods: {
      ...mapMutations({
        addTodo : 'addTodo',
        chkTodo : 'chkTodo',
        removeBtn: 'removeBtn',
        todoCompleteBtn: 'todoCompleteBtn',
        todoIncompleteBtn: 'todoIncompleteBtn'
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
            todoDone: '미완료'
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
    }
  }
</script>

<style scoped>
 button{ height: 22px; border: none; color: #fff; background-color: #000; }
</style>