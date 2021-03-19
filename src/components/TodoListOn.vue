<template>
  <section>
    <h3>{{message}}</h3>
    <!-- 완료 -->
    <ul>
      <li v-for="(todoItem, index) in todoItemsSuccess" v-bind:key="index">
        <input type="checkbox" class="chkColor"
               v-model="todoItem.todoBool"
               @change="chkTodo(index)">
        {{ todoItem.todoId + '. &nbsp;' }}
        <span class="todo"
              v-bind:class="{active: todoItem.todoStyle}"
              @click="unDecoTodo({index})">
          {{ todoItem.todoYou }}
        </span>
        {{ '(' + todoItem.todoDone + ') &nbsp;' + todoItem.todoDate }}
        <template v-if="index === 0"></template>
        <button type="button" class="btnColor"
                v-bind:class="{hidden: !todoItem.todoBool}"
                v-else>
          ▲&nbsp;Up
        </button>
        <template v-if="index === todoItemsSuccess.length-1"></template>
        <button type="button" class="btnColor"
                v-bind:class="{hidden: !todoItem.todoBool}"
                v-else>
          ▼&nbsp;down
        </button>
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
      chkTodo: 'chkTodo',
      todoUpBtn: 'todoUpBtn',
      todoDownBtn: 'todoDownBtn',
    }),
  }
}

</script>

<style scoped>
  .todo {
    display: inline-block;
    width: 150px;
    border: 1px solid #000;
  }
  .chkColor{ width: 15px; height: 15px; }
  .btnColor{ color: #fff; background-color: black; border: none; border-radius: 10px; }
  .hidden{ display: none; width: 5px; height: 5px; }
  .active{ text-decoration: line-through; }
</style>