import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 1,
        todoIncomplete: [], //배열 리터럴
        todoComplete: [],
        hiddenOk: false,
        todoBool: true,
        todoArr: true,
        todoOneArr: [],
    },
    getters: {
        todoItemsUnSuccess: state => state.todoIncomplete,
        todoItemsSuccess: state => state.todoComplete,
        getTodoOneArr: state => state.todoOneArr,
        todoIncompleteLength: (state, getters) => {
            return getters.todoItemsUnSuccess.length
        },
        todoIncompleteByBool: (state, getters) =>{
         return getters.todoItemsUnSuccess.forEach(todoItem => {
             if(todoItem.todoBool === true) state.arr = getters.todoIncompleteLength
         })
        }
    },
    mutations: {
        //입력되는 배열이 최상단 이동
        addTodo(state, payload){
            state.count ++
            state.todoIncomplete = [payload, ...state.todoIncomplete]
        },
        //컴포넌트 미완료 <=> 완료 취소선/배열 객체 최상단으로 이동
        decoTodo(state, payload){
            state.todoIncomplete[payload.index].todoStyle = true
            //state.todoUnSuccess[payload.index].todoDone = '완료'
            //console.log(state.todoUnSuccess[payload.index].todoStyle)

            state.todoComplete = [state.todoIncomplete[payload.index], ...state.todoComplete]
            //const idx = state.todoUnSuccess.indexOf(state.todoUnSuccess[payload.index].todoId, 1)
            //console.log(state.todoUnSuccess.splice(idx, 1))
            state.todoIncomplete.splice(payload.index,1)
            //console.log(state.todoUnSuccess.splice(payload.index,1))
        },
        unDecoTodo(state, payload){
            state.todoComplete[payload.index].todoStyle = false
            //state.todoSuccess[payload.index].todoDone = '미완료'
            //console.log(state.todoUnSuccess[payload.index].todoStyle)

            state.todoIncomplete = [state.todoComplete[payload.index], ...state.todoIncomplete]
            state.todoComplete.splice(payload.index,1)
        },
        //해당 컴포넌트 => 완료(chkTodo), 미완료(chkUnTodo) 체크박스 클릭 이벤트 호출
        chkTodo(state, payload){
            //unSuccess 배열 체크 => 완료/미완료
            if(state.todoIncomplete[payload].todoBool === true){
                state.todoIncomplete[payload].todoDone = '완료'
            }else{
                state.todoIncomplete[payload].todoDone = '미완료'
            }
        },
        chkUnTodo(state, payload){
            //Success 배열 체크 => 완료/미완료
            if(state.todoComplete[payload].todoBool === true){
                state.todoComplete[payload].todoDone = '완료'
            }else{
                state.todoComplete[payload].todoDone = '미완료'
            }
        },
        //미완료 => 상(todoUpBtn),하(todoDownBtn) 버튼 클릭 이벤트 호출
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

            //state.todoUnSuccess.splice( payload.index,1)


            /*if(state.todoUnSuccess.length < 0) return;
            if(payload.index < 0 || payload.index >= state.todoUnSuccess) return
            const arrTest = [];
            const target = state.todoUnSuccess.splice(payload.index,1)[0]

            arrTest.splice(payload.index, 0, target);
            return arrTest*/

        },
        todoDownBtn(state, payload){
            state.todoIncomplete.splice( (payload.index)+2,0, state.todoIncomplete[payload.index])
            state.todoIncomplete.splice( (payload.index)-1,0)
            state.todoIncomplete.splice( (payload.index),1)
        },

        //완료 리스트 보기
        todoCompleteBtn(state, getters){
            console.log(getters.todoIncompleteLength)
            console.log(getters.todoIncompleteByBool)
            console.log(state.todoBool)
            //state.todoItemsUnSuccess = !state.todoItemsUnSuccess
            state.todoBool = false
            state.todoArr = true

        },
        //미완료 리스트 보기
        todoIncompleteBtn(state){
            state.todoBool = true
            state.todoArr = false
        },
        //리스트 전체보기
        listAllBtn(state){
            state.todoBool = true
            state.todoArr = true
        },

        //체크항목 삭제
        removeBtn(state){
            console.log('before 반복분 : ' + state.todoBool)
            //미완료 배열 체크 삭제
            //반복문이 처음 돌아갈땐 체크 항목 삭제 o
            //문제점 : 처음 체크 항목들 삭제 하고 난 뒤, 1,2개 밖에 삭제가 안됨

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
                }
            }

            //todoComplete배열 체크 삭제
            for(let i=0;i<=state.todoComplete.length-1;i++){
                if(state.todoComplete[i].todoBool){
                    //console.log(state.todoIncomplete[i])
                    if(confirm(`${state.todoComplete[i].todoId} 선택한 항목을 삭제 하시겠습니까?`)){
                        //const idVal = state.todoIncomplete[i].todoId
                        //confirm(`${state.todoIncomplete[i].todoId} 선택한 항목을 삭제 하시겠습니까?`)
                        //const idVal = state.todoIncomplete.indexOf(state.todoIncomplete[i].todoId)
                        //console.log(idVal)
                        state.todoComplete.splice(i--, 1)
                        //console.log(state.todoIncomplete.indexOf(state.todoIncomplete[i]))
                        console.log(state.todoComplete[i].length)
                    }
                }
            }
            console.log('after 반복분 : ' + state.todoBool)
            if(state.todoBool === false) alert('선택한 항목이 없습니다.')

        },
        //전체항목 삭제
        resetBtn(state){
            if(confirm("Are you sure you want to delete all?")){
                state.todoIncomplete.splice(0, 10000)
                state.todoComplete.splice(0, 10000)

            }
        },



        //배열 하나로 완료, 미완료 v-if(true, false) 분기 처리
        todoOne(state, payload){
            state.count ++
            state.todoOneArr = [payload, ...state.todoOneArr]
        },
        decoTodoOne(state, payload){
            console.log(payload)
            state.todoOneArr[payload.index] = payload.change
        },

    },
    actions: {

    }


})