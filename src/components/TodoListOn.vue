<template>
  <section>
    <h3>{{message}}</h3>
    <!-- 완료 -->
    <ul>
      <li v-for="(todoItem, index) in todoItemsSuccess" v-bind:key="index">
        <input type="checkbox" class="chkColor"
               v-model="todoItem.todoBool"
               @change="chkUnTodo(index)">
        {{ todoItem.todoId + '. &nbsp;' }}
        <span class="todo"
              v-bind:class="{active: todoItem.todoStyle}"
              @click="unDecoTodo({index})">
          {{ todoItem.todoYou }}
        </span>
        {{ '(' + todoItem.todoDone + ') &nbsp;' + todoItem.todoDate }}

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
      message: 'Success =>',
    }
  },
  computed: {
    ...mapState({
      count: 'count',
      //hiddenOk: 'hiddenOk'
    }),
    ...mapGetters({
      todoItemsSuccess : 'todoItemsSuccess'
    }),
  },
  methods: {
    ...mapMutations({
      unDecoTodo: 'unDecoTodo',
      chkUnTodo: 'chkUnTodo',
    }),
  }
}

</script>

<style scoped>
  .todo {
    display: inline-block;
    width: 100px;
    border: none;
  }
  .chkColor{ width: 15px; height: 15px; }
  .btnColor{ color: #fff; background-color: black; border: none; border-radius: 10px; }
  .hidden{ display: none; width: 5px; height: 5px; }
  .active{ text-decoration: line-through; }
</style>