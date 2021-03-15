<template>
  <section>
    <h3>{{message}}</h3>
    <ul>
      <li v-for="(todoItem, i) in $store.state.todoItems" v-bind:key="i">
        <input type="checkbox"
               @click="chkTodoToggle(checked)" v-model="checked">
        {{i+1+'.'}}
        <span class="styleClass"
              :class="{active: isActive}"
              @click="todoStyle(isActive)">
          {{todoItem}}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "TodoListOff",
  data(){
    return{
      message: '미완료',
      isActive: false,
      checked: false,
    }
  },
  methods:{
    todoStyle(){
      //console.log('dddd')
      this.isActive = !this.isActive
    },
    chkTodoToggle(){
      console.log(this.checked) //false 초기값 체크 안되게 하기 위해 true
      if(!this.checked){
        console.log('할일 완료 go away')
      }else{
        console.log('할일 미완료 this.stay here!')
      }
    }
  }
}
</script>

<style scoped>
  .active{ text-decoration: line-through; }
</style>