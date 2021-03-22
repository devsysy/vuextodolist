<template>
  <div id="todoInput">
    <input class="inputClass"
           type="text"
           placeholder="배열 2개 input"
           v-model.trim="newTodoItem" v-on:keypress.enter="addTodoInput" autofocus>&nbsp;
    <b-button type="button" @click.prevent="addTodoInput">AddTodo</b-button><br>
    <b-button type="button" @click.prevent="todoCompleteBtn">Complete</b-button>&nbsp;
    <b-button type="button" @click.prevent="todoIncompleteBtn">Incomplete</b-button>&nbsp;
    <b-button type="button" @click.prevent="listAllBtn">ListAll</b-button>&nbsp;
    <b-button type="button" class="btnColor" @click.prevent="removeBtn">Remove</b-button>&nbsp;
    <b-button type="button" class="btnColor" @click.prevent="resetBtn">Reset</b-button>
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
        todoIncompleteBtn: 'todoIncompleteBtn',
        resetBtn: 'resetBtn',
        listAllBtn: 'listAllBtn'
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
  #todoInput .inputClass{ padding-left: 5px; box-sizing: border-box; margin-bottom: 10px; border: 2px solid #000; border-radius: 0 0 8px 0; }
  #todoInput .btn-secondary{ height: 30px; line-height: 18px; border-radius: 0; }
  #todoInput .btnColor{ background-color: red; }
  #todoInput button{ height: 22px; border: none; color: #fff; background-color: #000; border-radius: 8px; }
</style>