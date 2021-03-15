<template>
  <section>
    <ul>
      <li v-for="(todoItem, i) in $store.state.todoItems" v-bind:key="i" ref="chkValue2">
        <input type="checkbox"
               ref="chkValue"
               v-bind:class="chkOn = !chkOn"
               @click="toggleBtn(lineThroughOn = !lineThroughOn)"
               >
        {{i+1+'.'}}
        <span v-bind:class="todoItemClasses">{{todoItem}}</span>
        <button type="button"
                @click="removeTodo(todoItem, i)">Remove</button>
        <button type="button">완료</button>
        <button type="button">미완료</button>

      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "TodoList",
    data(){
      return{
        lineThroughOn: true,
        chkOnchk: 'checked'
      }
    },
    /*computed: {
      todoItemChk: function(){

      }
    },*/
    computed: {
      todoItemClasses: function(){
        return{
          lineOn: this.lineThroughOn,
          lineOff: !this.lineThroughOn,
        }
      }
    },
    methods: {
      removeTodo: function(todoItem, i){
        this.$store.commit('removeTodo',{todoItem, i});
      },
      /*toggleBtn(i){
        if(this.$refs.chkValue[i].checked === true){
          //this.$refs.chkValue2[i].style.textDecoration="line-through";
          console.log('fdsfsd');
        }
      },*/
    }
  }
</script>

<style scoped>
  li{list-style: none;}
  .lineThroughOn{ text-decoration: line-through; }
</style>