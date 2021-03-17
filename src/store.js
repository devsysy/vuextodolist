import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todoUnSuccess: [], //배열 리터럴
        todoSuccess: [],
        chkBool: []
    },
    getters: {
        todoItemsUnSuccess: state => state.todoUnSuccess,
        todoItemsSuccess: state => state.todoSuccess,
    },
    mutations: {
        addTodo(state, payload){
            //state.todoUnSuccess.push(payload)
            //state.todoUnSuccess.unshift(payload)
            state.todoUnSuccess = [...state.todoUnSuccess, payload]

        },
        chkTodo(state, payload){
            //console.log(state.chkBool)
            console.log(state.chkBool[payload])
            //console.log(state.todoUnSuccess.shift(payload))

            if(state.chkBool[payload] === true){
                state.chkBool[payload] = false
                //state.todoUnSuccess.shift(payload)
                state.todoSuccess.unshift(payload)
            }
        },
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