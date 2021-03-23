import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 1,
        todoIncomplete: [], //배열 2개 배열 리터럴
        todoComplete: [], //배열 2개
        todoBool: true,
        todoArr: true,
        todoOneArr: [], //배열 1개
        chkYes:'Y'
    },
    getters: {
        todoItemsUnSuccess: state => state.todoIncomplete,
        todoItemsSuccess: state => state.todoComplete,
        getTodoOneArr: state => state.todoOneArr,
        //미완료 배열의 길이 가져오기 시도
        todoIncompleteLength: (state, getters) => {
            return getters.todoItemsUnSuccess.length
        },
        //미완료 배열 todoBool키의 값이 true인 아이를 빈 배열(arr)에 넣고 그 길이 가져오기 시도
        todoIncompleteByBool: (state, getters) =>{
         return getters.todoItemsUnSuccess.forEach(todoItem => {
             if(todoItem.todoBool === true) state.arr = getters.todoIncompleteLength
         })
        }
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
            //const idx = state.todoUnSuccess.indexOf(state.todoUnSuccess[payload.index].todoId, 1)
            //console.log(state.todoUnSuccess.splice(idx, 1))
            state.todoIncomplete.splice(payload.index,1)
            //console.log(state.todoUnSuccess.splice(payload.index,1))
        },
        //완료 배열에서 스타일 없어지며, 선택한 인덱스 삭제 후 미완료 배열 상위로 이동
        unDecoTodo(state, payload){
            state.todoComplete[payload.index].todoStyle = false
            //if(state.todoIncomplete[payload].todoBool === false) state.todoIncomplete[payload].todoDone = ''
            state.todoIncomplete = [state.todoComplete[payload.index], ...state.todoIncomplete]
            state.todoComplete.splice(payload.index,1)
        },
        
        //chkTodo(), chkUnTodo() 체크박스 클릭 => 완료/미완료
        chkUnTodo(state, payload){
            //todoDone 초기값 = '미완료'
            //미완료 배열
            if(state.todoIncomplete[payload].todoBool === true) state.todoIncomplete[payload].todoDone = '완료'
            else state.todoIncomplete[payload].todoDone = '미완료'
        },
        chkTodo(state, payload){
            //완료 배열
            if(state.todoComplete[payload].todoBool === true) state.todoComplete[payload].todoDone = '완료'
            else state.todoComplete[payload].todoDone = '미완료'
        },
        
        //todoUpBtn() UP 버튼
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
            state.todoIncomplete.splice( (payload.index)-1,0, state.todoIncomplete[payload.index])
            state.todoIncomplete.splice( (payload.index)+1, 0)
            state.todoIncomplete.splice( (payload.index)+1, 1)
        },
        //todoDownBtn() DOWN 버튼
        todoDownBtn(state, payload){
            state.todoIncomplete.splice( (payload.index)+2,0, state.todoIncomplete[payload.index])
            state.todoIncomplete.splice( (payload.index)-1,0)
            state.todoIncomplete.splice( (payload.index),1)
        },

        //todoCompleteBtn() 완료만 보기
        todoCompleteBtn(state){
            //console.log(getters.todoIncompleteLength)
            //console.log(getters.todoIncompleteByBool)
            //console.log(state.todoBool)
            //state.todoItemsUnSuccess = !state.todoItemsUnSuccess
            state.todoBool = false, state.todoArr = true

        },
        //todoIncompleteBtn() 미완료만 보기
        todoIncompleteBtn(state){
            state.todoBool = true, state.todoArr = false
        },
        //listAllBtn() 배열 전체 보기
        listAllBtn(state){
            state.todoBool = true, state.todoArr = true
        },

        //removeBtn() 체크항목 삭제
        removeBtn(state){
            //미완료 체크박스 true값 인덱스 삭제
            for(let i=0;i<=state.todoIncomplete.length-1;i++){
                if(state.todoIncomplete[i].todoBool){
                    //console.log(state.todoIncomplete[i])
                    confirm(`${state.todoIncomplete[i].todoId} 선택한 항목을 삭제 하시겠습니까?`)
                    //const idVal = state.todoIncomplete[i].todoId
                    //confirm(`${state.todoIncomplete[i].todoId} 선택한 항목을 삭제 하시겠습니까?`)
                    //const idVal = state.todoIncomplete.indexOf(state.todoIncomplete[i].todoId)
                    //console.log(idVal)
                    state.todoIncomplete.splice(i--, 1)
                    //console.log(state.todoIncomplete.indexOf(state.todoIncomplete[i]))
                    /*if(!state.todoIncomplete[i].todoBool){
                        return alert('선택한 항목이 없습니다.')
                    }*/
                }
            }
            //완료 체크박스 true값 인덱스 삭제, 1개만 삭제 가능한 부분 해결하기
            for(let i=0;i<=state.todoComplete.length-1;i++){
                if(state.todoComplete[i].todoBool){
                    //console.log(state.todoIncomplete[i])
                    confirm(`${state.todoComplete[i].todoId} 선택한 항목을 삭제 하시겠습니까?`)
                    state.todoComplete.splice(i++, 1)
                    console.log(state.todoComplete[i].length)
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
            state.todoOneArr[payload.index].todoOneBool = payload.change.todoOneBool
            //console.log(state.todoOneArr[payload.index].todoOneBool)
            //console.log(payload.change.todoOneBool)
        },

    },
    actions: {

    }


})