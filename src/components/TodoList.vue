<template>
  <section>
    <ol>
      <li v-for="(todoItem, i) in $store.state.todoItems" v-bind:key="i">
        <input type="checkbox" @click="checkOk">
        {{todoItem}}
        <button type="text" v-bind:class="$store.state.chkClass" @click="removeTodo(todoItem, todoItem.index)">remove</button>
      </li>
    </ol>
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
      removeTodo: function(){
        this.$store.commit('removeTodo');
      },
      checkOk(){
        if(this.state.chkClass === true){
          this.state.chkClass.style.color = 'red'
        }
      }
    }
  }
</script>

<style scoped>

</style>