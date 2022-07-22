import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ // useState() 와 같은 역할
    name: 'user', // state name
    initialState: 'kim' // state 값
})

let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12 ],
})

let cartItem = createSlice({
    name: 'item',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ]
})

export default configureStore({
  reducer: {
    // 여기에 등록을 해야 사용 가능
    user: user.reducer,
    stock: stock.reducer,
    cartItem: cartItem.reducer,
   }
}) 