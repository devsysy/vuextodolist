<template>
  <section>
    <ol>
      <li v-for="(todoItem, i) in $store.state.todoItems" v-bind:key="i">
        <input type="checkbox" v-bind:class="chkClass"
               @click="checkOk" ref="chkLine">
        {{todoItem}}
        <button type="text"
                v-bind:class="chkClass"
                @click="removeTodo(todoItem, i)">remove</button>
      </li>
    </ol>
  </section>
</template>

<script>
  export default {
    name: "TodoList",
    data(){
      return{
        chkClass: '.chkClass'
      }
    },
    methods: {
      removeTodo: function(todoItem, i){
        this.$store.commit('removeTodo',{todoItem, i});
      },
      checkOk(){
        //console.log(this.$refs)
        console.log(this.chkClass.checked)
        /*if(this.chkClass.checked === true){

          //this.$refs.chkLine.style.textDecoration = 'overLine'
        }*/

      }
    }
  }
</script>

<style scoped>

</style>