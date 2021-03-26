import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 1,
        todoIncomplete: [], //배열 2개 - 배열 리터럴 선언
        todoComplete: [], //배열 2개
        todoBool: true,
        todoArr: true,
        active: false,
        todoOneArr: [], //배열 1개
        test: ''
    },
    getters: {
        todoItemsUnSuccess: state => state.todoIncomplete,
        todoItemsSuccess: state => state.todoComplete,
        getTodoOneArr: state => state.todoOneArr,
    },
    mutations: {
        //Todoinput.vue에서 미완료 배열에 들어갈 객체 상위로 들어감, 객체안 todoId : count++ 넘버 처리
        addTodo(state, payload){
            state.count ++
            state.todoIncomplete = [payload, ...state.todoIncomplete]
        },
        //미완료 배열에서 스타일 생기며, 선택한 인덱스 삭제 후 완료 배열로 상위로 이동
        decoTodo(state, payload){
            state.todoIncomplete[payload.index].todoStyle = true
            state.todoComplete = [state.todoIncomplete[payload.index], ...state.todoComplete]
            state.todoIncomplete.splice(payload.index,1)
        },
        //완료 배열에서 스타일 없어지며, 선택한 인덱스 삭제 후 미완료 배열 상위로 이동
        unDecoTodo(state, payload){
            state.todoComplete[payload.index].todoStyle = false
            state.todoIncomplete = [state.todoComplete[payload.index], ...state.todoIncomplete]
            state.todoComplete.splice(payload.index,1)
        },

        //todoUpBtn() UP 버튼 - 이동
        todoUpBtn(state){
            console.log(state)
            /*state.todoIncomplete.splice( (payload.index)-1,0, state.todoIncomplete[payload.index])
            state.todoIncomplete.splice( (payload.index)+1, 0)
            state.todoIncomplete.splice( (payload.index)+1, 1)*/
        },
        //todoDownBtn() DOWN 버튼 - 이동
        todoDownBtn(state){
            console.log(state)
            /*state.todoIncomplete.splice( (payload.index)+2,0, state.todoIncomplete[payload.index])
            state.todoIncomplete.splice( (payload.index)-1,0)
            state.todoIncomplete.splice( (payload.index),1)*/
        },

        chkTodoYes(state, payload){

            //state.active = !state.active
            //조건 걸기
            //console.log(state.todoIncomplete.length-1)
            if(state.todoIncomplete[payload].todoBool) {
                console.log(state.todoIncomplete.length)
                state.active = true
            }else{
                state.active = false
            }
        },


        //todoCompleteBtn() 완료만 보기
        todoCompleteBtn(state){ state.todoBool = false, state.todoArr = true },
        //todoIncompleteBtn() 미완료만 보기
        todoIncompleteBtn(state){ state.todoBool = true, state.todoArr = false },
        //listAllBtn() 배열 전체 보기
        listAllBtn(state){ state.todoBool = true, state.todoArr = true },

        //removeBtn() 체크항목 삭제 - alert 해결하기
        removeBtn(state){
            // 1. splice ??? 이해하고 사용하기
            // 2. 배열 splice로 원하는 걸 뺄 때 역순에서 처리하면 좋음(삭제된 배열 자리에 그 다음 배열이 들어와서 인덱스번호가 바뀌기 때문)
            let arrLength =  state.todoIncomplete.length-1

            for(let i=arrLength;i>=0;i--){
                if(state.todoIncomplete[i].todoBool){
                    confirm(`${state.todoIncomplete[i].todoId}번 선택한 항목을 삭제 하시겠습니까?`)
                    state.todoIncomplete.splice(i, 1)
                }
            }

            for(let i=arrLength;i>=0;i--){
                if(state.todoComplete[i].todoBool){
                    confirm(`${state.todoComplete[i].todoId}번 선택한 항목을 삭제 하시겠습니까?`)
                    state.todoComplete.splice(i, 1)
                }
            }
            //체크박스 false일 경우, 경고창 해결하기
            //if(state.todoBool === false) alert('선택된 항목이 없습니다.')
        },
        //resetBtn() 전체 다 삭제
        resetBtn(state){
            confirm("Are you sure you want to delete all?")
            state.todoIncomplete.splice(0, 10000)
            state.todoComplete.splice(0, 10000)
        },



        //배열 하나로 완료, 미완료 v-if(true, false) 분기 처리
        todoOne(state, payload){
            state.todoOneArr = [payload, ...state.todoOneArr]
        },
        decoTodoOne(state, payload){
            //state.todoOneArr[payload.index].todoOneBool = payload.change.todoOneBool
            //console.log(state.todoOneArr[payload.index].todoOneBool)
            //console.log(payload.change.todoOneBool)

            Vue.set(state.todoOneArr[payload.index], 'todoOneBool', payload.change.todoOneBool)
        },

    },
    actions: {

    }


})