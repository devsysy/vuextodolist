<template>
  <section>
    <br>
    <p className="grayColor">Todo Incomplete List</p>
    <ul v-for="(todoList, index) in getTodoOneArr" :key="index+100">
      <li v-if="!todoList.todoOneBool">
        인덱스로 노출
        <span className="todo" @click="decoTodoOneM(index)">
        {{ todoList.todoUser }}
      </span>
      </li>
    </ul>
    <br>
    <p className="grayColor">Todo Complete List</p>
    <ul v-for="(todoList, index2) in getTodoOneArr" :key="index2 +200">
      <li v-if="todoList.todoOneBool">
        인덱스로 노출
        <span className="todo" @click="decoTodoOneM(index2)">
        {{ todoList.todoUser }}
      </span>
      </li>
    </ul>
  </section>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "TodoOne",
  computed: {
    ...mapGetters({
      getTodoOneArr: 'getTodoOneArr'
    })
  },
  methods: {
    ...mapMutations({
      decoTodoOne: 'decoTodoOne',
    }),
    decoTodoOneM(index){
      this.decoTodoOne({change: {...this.getTodoOneArr[index], todoOneBool : !this.getTodoOneArr[index].todoOneBool}, index : index} )
    }
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