<template>
  <section>
    <h5>{{message}}</h5>
    <!-- 완료 -->
    <ul>
      <li v-for="(todoItem, index) in todoItemsSuccess" v-bind:key="index">
        <input type="checkbox" v-model="todoItem.todoBool">
        {{ todoItem.todoId + '.' }}
        <span class="styleClass"
              :class="[{active: todoActive}]"
              @click="unDecoTodo({index})">
          {{ todoItem.todoYou }}
        </span>
        {{ todoItem.todoDate}}
        <button>arrow</button>
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
      message: ': 완료',
    }
  },
  computed: {
    ...mapState({
      count: 'count',
      todoActive: 'todoActive'
    }),
    ...mapGetters({
      todoItemsSuccess : 'todoItemsSuccess'
    }),
  },
  methods: {
    ...mapMutations({
      unDecoTodo: 'unDecoTodo'
    }),
  }
}

</script>

<style scoped>
.active{ text-decoration: line-through; }
.alert{ color: hotpink; }
</style>