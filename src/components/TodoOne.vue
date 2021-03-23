<template>
  <section><br>
    <p>[미완료]</p>
    <ul v-for="(todoList, index) in getTodoOneArr" :key="index +100">
      <li v-if="!todoList.todoOneBool">
        {{ (index)+1 }}
        <span className="todo" @click="decoTodoOneM(index)">
        {{ todoList.todoUser }}
      </span>
      </li>
    </ul>
    <br>
    <p>[완료]</p>
    <ul v-for="(todoList, index) in getTodoOneArr" :key="index +200">
      <li v-if="todoList.todoOneBool">
        {{ (index)+1 }}
        <span className="todo" @click="decoTodoOneM(index)">
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
      this.decoTodoOne({ change: {...this.getTodoOneArr[index], todoOneBool : !this.getTodoOneArr[index].todoOneBool }, index : index, } )
    }
  }
}
</script>

<style scoped>

</style>