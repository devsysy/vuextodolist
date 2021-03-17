<template>
  <section>
    <h5>{{message}}</h5>
    <!-- 완료 -->
    <ul>
      <li v-for="(todoItem, i) in todoItemsSuccess" v-bind:key="i">
        <input type="checkbox" v-model="chkBool[i]" @change="chkChange(i)">
        {{ i+1+'.'}}
        <span class="styleClass"
              :class="{active: isActive}"
              @click="todoStyle(isActive)">
          {{todoItem}}
        </span>
        <span class="alert">{{todoResult}}</span>
        <button>arrow</button>
      </li>
    </ul>
  </section>
</template>

<script>

import {mapState, mapGetters, mapMutations} from "vuex";

export default {
  name: "TodoListOn",
  data() {
    return {
      message: ': 완료',
      isActive: false,
      todoResult: '',

    }
  },
  computed: {
    ...mapState({
      chkBool: 'chkBool'
    }),
    ...mapGetters({
      todoItemsSuccess : 'todoItemsSuccess'
    }),
  },

  methods: {
    ...mapMutations({
      chkTodo: 'chkTodo'
    }),
    todoStyle() {
      this.isActive = !this.isActive
    },
    chkChange(e){
      this.chkTodo(e)
    }
  }
}

</script>

<style scoped>
.active{ text-decoration: line-through; }
.alert{ color: hotpink; }
</style>