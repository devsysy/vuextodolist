<template>
  <section>
    <h5>{{message}}</h5>
    <!-- 미완료 -->
    <ul>
      <li v-for="(todoItem, index) in todoItemsUnSuccess" v-bind:key="index">
        <input type="checkbox" v-model="todoItem.todoBool">
        {{ todoItem.todoId + '.' }}
        <span class="todo styleClass"
              @click="decoTodo({index})">
          {{ todoItem.todoYou }}
        </span>
        {{ todoItem.todoDate}}
        <button>arrow</button>
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
      message: ': 미완료',


    }
  },
  computed: {
    ...mapState({
      count: 'count'
    }),
    ...mapGetters({
      todoItemsUnSuccess : 'todoItemsUnSuccess',
    }),
  },
  methods: {
    ...mapMutations({
      decoTodo: 'decoTodo'
    }),
    // todoChkLine(r, i) {
    //   this.decoTodo({r, i})
    // }
  }
}

</script>

<style scoped>
.todo {
  display: inline-block;
  width: 100px;
  border: 1px solid cadetblue;
}
  .active{ text-decoration: line-through; }
  .alert{ color: hotpink; }
</style>