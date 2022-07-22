import { useReducer } from 'react';
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeName } from './../store.js';

let CustomButton = styled.button`
    background-color: #000;
    color: #fff;
`

function Cart() {
    // store에 있던 모든 state를 가져와주는 함수
    let store = useSelector((state) => { return state });
    let cartItem = useSelector((state) => { return state.cartItem }); // or => state.user

    // store.js로 요청을 보내주는 함수
    let dispatch = useDispatch();

    return (
        <div>
            {store.user} 의 장바구니
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartItem.map((i, idx) => {
                        return (
                            <tr key={i.id}>
                            <td>{idx + 1}</td>
                            <td>{i.name}</td>
                            <td>{i.count}</td>
                            <td><CustomButton onClick={() => { dispatch(changeName()) }}>변경 버튼</CustomButton></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table> 
        </div>
    )
}

export default Cart;