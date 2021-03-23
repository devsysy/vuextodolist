<template>
  <section>

    <!-- 완료 -->
    <ul v-if="todoArr">
      <li>{{message}}</li><br>
      <li v-for="(todoItem, index) in todoItemsSuccess" :key="index">
        <input type="checkbox" class="chkColor"
               v-model="todoItem.todoBool">
        {{ todoItem.todoId + '. &nbsp;' }}
        <span class="todo"
              v-bind:class="{active: todoItem.todoStyle}"
              @click="unDecoTodo({index})">
          {{ todoItem.todoYou }}
        </span>
        {{ todoYes + todoItem.todoDate }}
      </li>
    </ul>
  </section>
</template>

<script>

import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "TodoListOn",
  data() {
    return {
      message: '[완료]',
      todoYes: '(완료)'
    }
  },
  computed: {
    ...mapState({
      count: 'count',
      todoArr: 'todoArr',
    }),
    ...mapGetters({
      todoItemsSuccess : 'todoItemsSuccess'
    }),
  },
  methods: {
    ...mapMutations({
      unDecoTodo: 'unDecoTodo',
      chkTodoYes: 'chkTodoYes'
    }),
  }
}

</script>

<style scoped>
  li{ margin-bottom: 3px; }
  .todo { display: inline-block; width: 100px; border: 1px solid #999; border-radius: 0 0 8px 0; }
  .grayColor{ color: #666; font-size: 18px; }
  .chkColor{ width: 15px; height: 15px; }
  .btnColor{ color: #fff; background-color: black; border: none; border-radius: 10px; }
  .hidden{ display: none; width: 5px; height: 5px; }
  .active{ text-decoration: line-through; }
</style>