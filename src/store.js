import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todoItemsSuccess: [],
        todoItemsUnSuccess: [],
    },
    getters: {
        /*todoItemsUnSuccess: state => state.todoItemsUnSuccess,
        todoItemsSuccess: state => state.todoItemsSuccess,*/
    },
    mutations: {
        addTodo(state, payload){
            state.todoItemsUnSuccess.push(payload)
        },
        /*todoListComponent: (state, payload) => {
            state.todoItemsUnSuccess = payload.value
        },
        removeTodo(state, index){
            state.conFirm = confirm("Would you like to cancel? Really??!!??")

            if(state.conFirm === true){
                state.todoItemsUnSuccess.splice(index, 1)
            }
        },*/
        clearAll(state){
            this.conFirm = confirm("Are you sure you want to delete all?")

            if(this.conFirm === true){
                state.todoItemsUnSuccess.splice(0, 10000)

            }

        }

    },
    actions: {

    }


})