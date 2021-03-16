<template>
  <section>
    <h5>{{message}}</h5>
    <!-- 미완료 -->
    <ul>
      <li v-for="(todoItem, i) in todoItemsUnSuccess" v-bind:key="i">
        <input type="checkbox"
               @change="chkTodoToggle(i)" v-model="todoItemsUnSuccess[i].checked">
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
    <!-- 완료 -->
    <ul>
      <li v-for="(todoItem, i) in todoItemsUnSuccess" v-bind:key="i">
        <input type="checkbox"
               @change="chkTodoToggle(checked)" v-model="todoItem[i].checked">
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

import {mapState} from "vuex";

export default {
  name: "TodoListOff",
  data(){
    return{
      message: ': 미완료',
      isActive: false,
      todoResult: ''
    }
  },
  computed:{
    ...mapState({
      todoItemsUnSuccess: 'todoItemsUnSuccess',
    })
  },
  methods:{
    todoStyle(){
      this.isActive = !this.isActive
    },
    chkTodoToggle(i){
      if(this.todoItemsUnSuccess[i].checked === true){
        console.log(true)

      }else{
        console.log(false)
      }
    }
  }
}
</script>

<style scoped>
  .active{ text-decoration: line-through; }
  .alert{ color: hotpink; }
</style>