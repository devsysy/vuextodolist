<template>
  <section>
    <ul>
      <li v-for="(todoItem, i) in $store.state.todoItems" v-bind:key="i">
        <input type="checkbox"
               ref="chkValue"
               @click="chkBtn(todoItem, i)">
        {{i+1+'.'}}
        {{todoItem}}
        <button type="text"
                @click="removeTodo(todoItem, i)">remove</button>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "TodoList",
    data(){
      return{
      }
    },
    methods: {
      removeTodo: function(todoItem, i){
        this.$store.commit('removeTodo',{todoItem, i});
      },
      chkBtn(todoItem, i){
        if(this.$refs.chkValue[i].checked === true){
          console.log(this.$refs.chkValue[i]) //input checkbox
          console.log(todoItem)
          console.log(this.$refs.chkValue[i].value)
          ``
          this.$refs.chkValue[i].style.color = 'red'
        }
      }
    }
  }
</script>

<style scoped>
  li{list-style: none;}
</style>