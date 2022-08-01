import { useState, memo, useMemo } from 'react';
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeName, changeCnt } from './../store.js';

let CustomButton = styled.button`
    background-color: ${props => props.bg};
    color: #fff;
`

// 필요할때만 재 렌더링 하려면 memo 사용
// 재 렌더링 오래걸리는 컴포넌트를 감싸놓으면 됨
/*
원리 : props가 변할때만 재 렌더링을 해줌
*/
let Child = memo(function Child() {
    console.log('재 렌더링 됨')
    return <div>자식 컴포넌트</div>
})

function useMemoFunction() {
    return '반복문 여러번 돌린 결과';
}

function Cart() {
    // store에 있던 모든 state를 가져와주는 함수
    let store = useSelector((state) => { return state });
    let cartItem = useSelector((state) => { return state.cartItem }); // or => state.user
    // store.js로 요청을 보내주는 함수
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);
    // 컴포넌트 렌더링 시 1회만 실행해줌 (useEffect와 비슷한 용도 / 1회만 실행하고 싶은 코드가 있으면 담기)
    let result = useMemo(() => {return useMemoFunction()}, [])

    return (
        <div>
            <Child count={count} />
            <button onClick={() => {setCount(count + 1)}}>+</button>
            { count }
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
                            <td>
                                <CustomButton bg={'black'} onClick={() => { dispatch(changeName()) }}>변경 버튼</CustomButton>
                                <CustomButton bg={'pink'} onClick={() => { dispatch(changeCnt(i.id)) }}>수량 버튼</CustomButton>
                            </td>
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