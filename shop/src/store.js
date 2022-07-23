import { configureStore, createSlice } from '@reduxjs/toolkit' // redux 개선버전 = redux/toolkit

let user = createSlice({ // useState() 와 같은 역할
    name: 'user', // state name
    initialState: 'kim', // state 값
    reducers: {
        // 수정 함수 
        changeName(state) { // 기존 state를 뜻함
            return 'john ' + state
        },
    }  
})

// user.actions => state 변경 함수들이 이 자리에 남게 됨
export let { changeName } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12],
})

let cartItem = createSlice({
    name: 'item',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ], 
    reducers: {
        changeCnt(state, action) {
            let num = state.findIndex((i) => {return action.payload == i.id})
            state[num].count++;
        },
        addList(state, action) {
            // 중복이면 changeCnt 로 넘기기
            let item = state.filter((i) => action.payload.id == i.id).length;
            if (item !== 0) {
                state[action.payload.id].count++;
            } else {
                state.push(action.payload);
            }
        }
    }
})

export let { changeCnt, addList } = cartItem.actions;

export default configureStore({
  reducer: {
    // 여기에 등록을 해야 사용 가능
    user: user.reducer,
    stock: stock.reducer,
    cartItem: cartItem.reducer,
   }
}) 