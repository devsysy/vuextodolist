import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todoItems: [],
    },
    getters: {

    },
    mutations: {

        removeTodo(state, index){
            state.conFirm = confirm("Would you like to cancel? Really??!!??")

            if(state.conFirm === true){
                state.todoItems.splice(index.i,1)
            }
        },
        clearAll(state){
            this.conFirm = confirm("Are you sure you want to delete all?")

            if(this.conFirm === true){
                state.todoItems.splice(0, 10000)

            }

        }

    },
    actions: {

    }


})