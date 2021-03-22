<template>
  <section>
    <p className="grayColor">Todo Incomplete List</p>
    <ul v-for="(todoList, index) in getTodoOneArr" v-bind:key="index+100">
      <li v-if="!todoList.todoOneBool">
        {{ todoList.todoNum + '&nbsp;'}}
        <span className="todo" @click="decoTodoOne({index})">
        {{ todoList.todoUser }}
      </span>
      </li>
    </ul>
    <br>
    <p className="grayColor">Todo Complete List</p><br>
    <ul v-for="(todoList, index2) in getTodoOneArr" v-bind:key="index2 +200">
      <li v-if="todoList.todoOneBool">
        {{ todoList.todoNum + '&nbsp;' }}
        <span className="todo" @click="decoTodoOne">
        {{ todoList.todoUser }}
      </span>
      </li>
    </ul>
  </section>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "TodoOne",
  data() {
    return {
      message: 'Todo List One',
    }
  },
  computed: {
    ...mapState({
      count: 'count',
    }),
    ...mapGetters({
      getTodoOneArr: 'getTodoOneArr'
    })
  },
  methods: {
    ...mapMutations({
      decoTodoOne: 'decoTodoOne',
    }),
  }
}
</script>

<style scoped>
.textBox {
  border: 1px solid #000;
  width: 20px;
}

button {
  margin-bottom: 20px;
}
</style>