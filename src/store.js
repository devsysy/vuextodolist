import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todoItems: [],
        newTodoItem: '',
        todoListNum: 1,
        chkClass: '.chkClass'


    },
    getters: {

    },
    mutations: {
        addTodo(state, payload){
            if(state.newTodoItem !== ''){
                state.todoItems.push(payload)
            }else{
                alert('Nothing to do today?!')
            }
        },
        removeTodo(state, index){
            state.conFirm = confirm("Would you like to cancel? Really??!!??")

            if(state.conFirm === true){
                state.todoItems.splice(index,1)
            }
        },
        clearAll(state){
            state.conFirm = confirm("Are you sure you want to delete all?")
            console.log(state)

            if(state.conFirm === true){
                state.todoItems.length = 0

            }

        }

    },
    actions: {

    }


})