<template>
  <div id="todoOneInput">
    <input class="inputClass"
           type="text"
           placeholder="배열 1개 input"
           v-model.trim="newTodo" v-on:keypress.enter="addTodoOne" autofocus>&nbsp;
    <b-button type="button" @click.prevent="addTodoOne">Add</b-button>&nbsp;
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "TodoInput",
  data(){
    return{
      newTodo: '',
    }
  },
  methods: {
    ...mapMutations({
      todoOne: 'todoOne'
    }),
    addTodoOne: function(n){
      if(this.newTodo !== ''){
        this.todoOne({
          todoUser: this.newTodo,
          todoOneBool: false
        })
        n.preventDefault()
      }else alert('Nothing to do today?!')
      this.newTodo = '';
    }
  }
}
</script>

<style scoped>
  #todoOneInput .btn-secondary{ position: relative; top: -1px; height: 30px; line-height: 18px; }
</style>