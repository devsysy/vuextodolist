<template>
  <section id="TodoListOff">

    <!-- 미완료 -->
    <ul v-if="todoBool">
      <li class="grayColor">{{message}}</li><br>
      <li v-for="(todoItem, index) in todoItemsUnSuccess" v-bind:key="index">
        <input type="checkbox" class="chkColor"
               v-model="todoItem.todoBool"
               @change="chkTodo(index)">
        {{ todoItem.todoId + '. &nbsp;' }}
        <span class="todo"
              @click="decoTodo({index})">
          {{ todoItem.todoYou }}
        </span>
        {{ todoItem.todoDone + '&nbsp;' + todoItem.todoDate + '&nbsp;'}}
        <template v-if="index === 0"></template>
        <b-button type="button" class="btnColor" @click="todoUpBtn({index})"
                v-bind:class="{hidden: !todoItem.todoBool}"
                v-else>
          ▲&nbsp;Up
        </b-button>
        <template v-if="index === todoItemsUnSuccess.length-1"></template>
        <b-button type="button" class="btnColor" @click="todoDownBtn({index})"
                v-bind:class="{hidden: !todoItem.todoBool}"
                v-else>
          ▼&nbsp;down
        </b-button>
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
      message: 'Todo Incomplete List',
    }
  },
  computed: {
    ...mapState({
      count: 'count',
      todoBool: 'todoBool'
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
  li{ margin-bottom: 3px; }
  h3{ color: #666666; }
  .todo {
    display: inline-block;
    width: 100px;
    border: 1px solid #999; border-radius: 0 0 8px 0;
  }
  .grayColor{ color: #666; font-size: 18px; }
  .chkColor{ width: 15px; height: 15px; }
  .btnColor{ color: #fff; background-color: black; border: none; border-radius: 10px; }
  .hidden{ display: none; width: 5px; height: 5px; background-color: cadetblue; }
  .active{ text-decoration: line-through; }

  #TodoListOff .btn-secondary{ height: 16px; line-height: 2px; margin-right: 2px; background-color: #fff; color: #000; border: 1px solid #000; box-sizing: border-box; border-radius: 10px; font-size: 15px; }
</style>