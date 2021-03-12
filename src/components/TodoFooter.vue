<template>
  <footer>
    <button type="reset" @click="clearAll($store.state.todoItems)">Clear All</button>
  </footer>
</template>

<script>
  export default {
    name: "TodoFooter",
    data(){
      return{

      }
    },
    methods: {
      clearAll: function(){
        this.$store.commit('clearAll', this.$store.state.todoItems.length)
      }
    }
  }
</script>

<style scoped>

</style>