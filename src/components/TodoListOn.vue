<template>
  <section>
    <h3>{{demo}}</h3>
    <ul>
      <li v-for="(todoItem, i) in todoItems2" v-bind:key="i">
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
  name: "TodoListOn",
  data() {
    return {
      //textDecorationLine: 'line-through',
      demo: '완료',
      isActive: false,
      checked: false,
      todoItems2: []
    }
  },
  /*computed:{
    styleObject(){
      return{
        lineThrough: this.isActive,
        lineNo: !this.isActive,
      }
    }
  },*/
  methods:{
    todoStyle(){
      this.isActive = !this.isActive
    },
    chkTodoToggle(){
      console.log(this.checked)
      if(!this.checked){
        console.log('오늘 할일 완료로 넘어가기!')
      }else{
        console.log('오늘 할일 미완료 this.stay!')
      }
    }
  }
}
</script>

<style scoped>
  .active{ text-decoration: line-through; }
</style>