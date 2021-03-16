<template>
  <section>
    <h5>{{message}}</h5>
    <ul>
      <li v-for="(todoItem, i) in $store.state.todoItems" v-bind:key="todoItem.i">
        <input type="checkbox"
               @change="chkTodoToggle(checked)" v-model="checked">
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

export default {
  name: "TodoListOff",
  data(){
    return{
      message: ': 미완료',
      isActive: false,
      checked: false,
      chkValue: { chkTrue : '완료', chkFalse : '미완료' },
      todoResult: ''
    }
  },
  methods:{
    todoStyle(){
      //console.log('dddd')
      this.isActive = !this.isActive
    },
    chkTodoToggle(){
      //console.log(this.checked) //false 초기값 체크 안되게 하기 위해 true
      if(!this.checked){
        //console.log( )
        this.todoResult = this.chkValue.chkFalse
        //this.$store.commit('todoListComponent', this.todoResult)
      }else{
        this.todoResult = this.chkValue.chkTrue
      }
    }
  }
}
</script>

<style scoped>
  .active{ text-decoration: line-through; }
  .alert{ color: hotpink; }
</style>