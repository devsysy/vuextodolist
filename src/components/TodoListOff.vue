<template>
  <section id="TodoListOff">

    <!-- 미완료 -->
    <ul v-if="todoBool">
      <li>{{message}}</li><br>
      <li v-for="(todoItem, index) in todoItemsUnSuccess" :key="index">
        <input type="checkbox" class="chkColor"
               v-model="todoItem.todoBool"
               @change="chkTodoYes(index)">
        {{ todoItem.todoId }}
        <span class="todo"
              @click="decoTodo({index})">
          {{ todoItem.todoYou }}
        </span>
        {{ todoNo + todoItem.todoDate }}
<!--        <template v-if="index === 0"></template>
        <b-button type="button" class="btnColor" @click="todoUpBtn({index})"
                v-bind:class="{hidden: !todoItem.todoBool}"
                v-else>▲&nbsp;Up
        </b-button>
        <template v-if="index === todoItemsUnSuccess.length-1"></template>
        <b-button type="button" class="btnColor" @click="todoDownBtn({index})"
                v-bind:class="{hidden: !todoItem.todoBool}"
                v-else>▼&nbsp;down
        </b-button>-->
      </li>
    </ul>
  </section>
</template>

<script>

import {mapState, mapGetters, mapMutations} from "vuex";

export default {
  name: "TodoListOff",
  data() {
    return {
      message: '[미완료]',
      todoNo: '(미완료)'
    }
  },
  computed: {
    ...mapState({
      count: 'count',
      todoBool: 'todoBool',
    }),
    ...mapGetters({
      todoItemsUnSuccess : 'todoItemsUnSuccess',
    }),
  },
  methods: {
    ...mapMutations({
      decoTodo: 'decoTodo',
      chkTodoYes: 'chkTodoYes'
    }),
  }
}

</script>

<style scoped>
  li{ margin-bottom: 3px; }
  .todo { display: inline-block; width: 100px; border: 1px solid #999; border-radius: 0 0 8px 0; }
  .chkColor{ width: 15px; height: 15px; }
  .btnColor{ color: #fff; background-color: black; border: none; border-radius: 10px; }
  .hidden{ display: none; }
  .active{ text-decoration: line-through; }
  #TodoListOff .btn-secondary{ height: 18px; line-height: 1px; margin-right: 2px; color: #fff; background-color: black; border-radius: 10px; }
</style>