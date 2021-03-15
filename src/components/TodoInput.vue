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
      addTodo: function(n){//Todo 생성할 때, 즉 버튼이 눌리는 시점이 작성일시가 되는 것이기 때문에!
        //Todo 생성할 때, vue-moment 라이브러리에서 날짜 date 호출하여, today 상수에 담기
        const today = this.$moment().format('YYYY-MM-DD hh:mm:ss');

        if(this.newTodoItem.trim() !== '' ){
          //Todo 생성할 때, 날짜 date를 호출해야지만, 화면 렌더링시 날짜 data update 되지 않음
          this.$store.state.todoItems.push(this.newTodoItem + '작성일자:' + today)
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