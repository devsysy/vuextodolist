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
            //unSuccess 배열 체크 => 완료/미완료

            state.todoDone = !state.todoDone

            //console.log(state.todoDone)
            if(state.todoDone){
                state.todoUnSuccess[payload].todoDone = '완료'
            }else{
                state.todoUnSuccess[payload].todoDone ='미완료'
            }
        },
        chkUnTodo(state, payload){
            //Success 배열 체크 => 완료/미완료
            state.todoDone = !state.todoDone

            if(state.todoDone){
                state.todoSuccess[payload].todoDone = '완료'
            }else{
                state.todoSuccess[payload].todoDone ='미완료'
            }
        },

        todoUpBtn(state, payload){
            //const unArr = state.todoUnSuccess[payload.index].length
            //unArr.copyWithin(복사한 값을 넣을 위치 인덱스번호, 카피할 시작번호, 어디까지 카피?)
            //console.log((payload.index)-1) //복사한 값을 넣을 위치 인덱스번호
            //const test = unArr.copyWithin((payload.index)-1, payload.index, -1)
            //state.todoUnSuccess = [...state.todoUnSuccess, test]
            //console.log(state.todoUnSuccess)

            //console.log(payload.index)
            //const upBtnSplice = state.todoUnSuccess.splice( payload.index,-1, state.todoUnSuccess[payload.index])
            //const upBtnSpliceAdd = state.todoUnSuccess.splice(payload.index,1, payload.index)
            //state.todoUnSuccess = [upBtnSplice]
            //console.log(upBtnSplice)

            state.todoUnSuccess.splice( (payload.index)-1,0,state.todoUnSuccess[payload.index])
            state.todoUnSuccess.splice( (payload.index)+1, 0)
            state.todoUnSuccess.splice( (payload.index)+1, 1)

            //state.todoUnSuccess.splice( payload.index,1)


            /*if(state.todoUnSuccess.length < 0) return;
            if(payload.index < 0 || payload.index >= state.todoUnSuccess) return
            const arrTest = [];
            const target = state.todoUnSuccess.splice(payload.index,1)[0]

            arrTest.splice(payload.index, 0, target);
            return arrTest*/

        },
        todoDownBtn(state, payload){
            state.todoUnSuccess.splice( (payload.index)+1,0,state.todoUnSuccess[payload.index])
            state.todoUnSuccess.splice( (payload.index)-2,0)
            state.todoUnSuccess.splice( (payload.index)-2,1)

            console.log((payload.index)+1)
            console.log((payload.index)-3)
            //state.todoUnSuccess.splice( (payload.index)+1,2)
        },




        removeBtn(state){
            if(confirm("Are you sure you want to delete all?")){
                state.todoUnSuccess.splice(0, 10000)
            }
            if(confirm("Are you sure you want to delete all?")){
                state.todoSuccess.splice(0, 10000)
            }
        }
    },
    actions: {

    }


})