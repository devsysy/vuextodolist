<template>
  <footer>
    <button type="reset"
            @click="clearAll()">Clear All</button>
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
        this.$store.commit('clearAll')
      }
    }
  }
</script>

<style scoped>

</style>