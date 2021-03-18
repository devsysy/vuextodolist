import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 1,
        todoUnSuccess: [], //배열 리터럴
        todoSuccess: [],
        //todoActive: false

    },
    getters: {
        todoItemsUnSuccess: state => state.todoUnSuccess,
        todoItemsSuccess: state => state.todoSuccess,
        //todoUnSuccess: state => state.todoUnSuccess
    },
    mutations: {
        addTodo(state, payload){
            state.count ++
            state.todoUnSuccess = [payload, ...state.todoUnSuccess]

        },
        decoTodo(state, payload){
            console.log(payload+'메롱')
            console.log(state.todoUnSuccess[payload.index].todoStyle);
            // console.log(state.todoItemsUnSuccess[payload.index].todoStyle)
            //state.todoActive = !state.todoActive
            //
            // if(state.todoItemsUnSuccess[payload.index].todoStyle === true){
            //     //console.log(state.chkBool[payload])
            //     state.todoSuccess = [...state.todoSuccess, state.todoUnSuccess[payload.index]]
            //
            //     const idx = state.todoUnSuccess.indexOf(state.todoUnSuccess[payload.index])
            //     //console.log(...state.todoUnSuccess.splice(state.todoUnSuccess[payload], 1))
            //     //console.log(...state.todoUnSuccess)
            //     state.todoUnSuccess.splice(idx, 1)
            //     //파괴적 함수, 비파괴적 함수
            // }
        },
        unDecoTodo(state, payload){
            console.log(payload)
            /*const idx2 = state.todoSuccess.indexOf(state.todoSuccess[payload.index])
            //console.log(state.todoSuccess.indexOf(state.todoSuccess[payload.index]))
            console.log(state.todoSuccess)
            state.todoSuccess = [...state.todoSuccess, state.todoSuccess.splice((idx2), 1)]*/
        },
        chkTodo(state, payload){
            console.log(payload)
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