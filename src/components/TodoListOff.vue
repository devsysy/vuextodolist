<template>
  <section>
    <h3>{{message}}</h3>
    <!-- 미완료 -->
    <ul>
      <li v-for="(todoItem, index) in todoItemsUnSuccess" v-bind:key="index">
        <input type="checkbox" class="chkColor"
               v-model="todoItem.todoBool"
               @change="chkTodo(index)">
        {{ todoItem.todoId + '. &nbsp;' }}
        <span class="todo"
              @click="decoTodo({index})">
          {{ todoItem.todoYou }}
        </span>
        {{ '(' + todoItem.todoDone + ') &nbsp;' + todoItem.todoDate }}
        <template v-if="index === 0"></template>
        <button type="button" class="btnColor"
                v-bind:class="{hidden: !todoItem.todoBool}"
                v-else>
          ▲&nbsp;Up
        </button>
        <template v-if="index === todoItemsUnSuccess.length-1"></template>
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

import {mapState, mapGetters, mapMutations} from "vuex";

export default {
  name: "TodoListOff",
  data() {
    return {
      message: 'UnSuccess =>',
    }
  },
  computed: {
    ...mapState({
      count: 'count',
     // hiddenOk: 'hiddenOk'
    }),
    ...mapGetters({
      todoItemsUnSuccess : 'todoItemsUnSuccess',
    }),
  },
  methods: {
    ...mapMutations({
      decoTodo: 'decoTodo',
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
  .hidden{ display: none; width: 5px; height: 5px; background-color: cadetblue; }
  .active{ text-decoration: line-through; }
</style>