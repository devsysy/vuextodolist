<template>
  <div>
    <input class="inputClass"
           type="text"
           placeholder="배열 1개 input"
           v-model.trim="newTodo" v-on:keypress.enter="addTodoOne" autofocus>&nbsp;
    <b-button type="button" @click.prevent="addTodoOne">AddTodo</b-button>&nbsp;
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "TodoInput",
  data(){
    return{
      newTodo: '',
    }
  },
  computed: {
    ...mapState({
      count: 'count',
    })
  },
  methods: {
    ...mapMutations({
      todoOne: 'todoOne'
    }),
    addTodoOne: function(n){
      if(this.newTodo !== ''){
        this.todoOne({
          todoNum: this.count,
          todoUser: this.newTodo,
          todoOneBool: false
        })
        n.preventDefault()
      }else{
        alert('Nothing to do today?!')
      }
      this.clearInput();
    },
    clearInput(){
      this.newTodo = '';
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