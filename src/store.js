import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 1,
        todoUnSuccess: [], //배열 리터럴
        todoSuccess: [],
        hiddenOk: false,
        todoDone: false,
    },
    getters: {
        todoItemsUnSuccess: state => state.todoUnSuccess,
        todoItemsSuccess: state => state.todoSuccess,
        //todoItemsFirst: state => state.todoUnSuccess.todoBool
        //todoChkCount: state => state.todoUnSuccess.find(todoId => state.todoUnSuccess.todoId)
    },
    mutations: {
        addTodo(state, payload){
            state.count ++
            state.todoUnSuccess = [payload, ...state.todoUnSuccess]
        },

        decoTodo(state, payload){
            state.todoUnSuccess[payload.index].todoStyle = true
            //state.todoUnSuccess[payload.index].todoDone = '완료'
            //console.log(state.todoUnSuccess[payload.index].todoStyle)

            state.todoSuccess = [state.todoUnSuccess[payload.index], ...state.todoSuccess]
            //const idx = state.todoUnSuccess.indexOf(state.todoUnSuccess[payload.index].todoId, 1)
            //console.log(state.todoUnSuccess.splice(idx, 1))
            state.todoUnSuccess.splice(payload.index,1)
            //console.log(state.todoUnSuccess.splice(payload.index,1))
        },
        unDecoTodo(state, payload){
            state.todoSuccess[payload.index].todoStyle = false
            //state.todoSuccess[payload.index].todoDone = '미완료'
            //console.log(state.todoUnSuccess[payload.index].todoStyle)

            state.todoUnSuccess = [state.todoSuccess[payload.index], ...state.todoUnSuccess]

            state.todoSuccess.splice(payload.index,1)
        },

        chkTodo(state, payload){
            //체크 => 완료/미완료
            console.log(payload)
            console.log(state.todoDone)
            state.todoDone = !state.todoDone
            //state.todoUnSuccess[payload].todoDone = '완료'

            console.log(state.todoDone)
            if(state.todoDone){
                state.todoUnSuccess[payload].todoDone = '완료'
            }else{
                state.todoUnSuccess[payload].todoDone ='미완료'
            }
            /*if(state.todoDone){
                state.todoSuccess[payload].todoDone = '완료'
            }else{
                state.todoSuccess[payload].todoDone ='미완료'
            }*/

        },
        todoUpBtn(state){
            console.log(state.todoUnSuccess)
        },
        todoDownBtn(state){
            console.log(state.todoUnSuccess)
        },
        clearAll(state){
            if(confirm("Are you sure you want to delete all?")){
                state.todoItemsUnSuccess.splice(0, 10000)
            }
        }
    },
    actions: {

    }


})