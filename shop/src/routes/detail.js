import { useParams } from "react-router-dom";
import styled from 'styled-components';

// 스타일이 입혀진 컴포넌트
/*
[ 장점 ]
1. css 파일에 직접 입력하지 않아도 됨
2. 스타일이 다른 js파일로 오염되지 않음
 => 오염되지 않는 css 작명 : ex ) App.module.css (js파일명.module.css)
3. 로딩시간이 단축 됨
4. 기존 스타일 복사 가능

[ 단점 ]
1. js 파일 복잡해짐
2. 중복 스타일 컴포넌트간 import 시에 기존 css와 다를바 없음
*/
let PinkBtn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding: 10px;
`

// 복사
let newBtn = styled.button(PinkBtn);

let BlackBox = styled.div`
  background-color: #000;
  color: #fff;
`

function Detail(props) {
    let {id} = useParams();
    let reArr = props.shoes.filter((i) => i.id == id)[0];
    
    return (
      <div className="container">
      <PinkBtn bg="pink">핑크색 버튼</PinkBtn>
        <PinkBtn bg="blue">파란색 버튼</PinkBtn>
        <BlackBox>검은색 div 박스</BlackBox>
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes" + (reArr.id + 1) + ".jpg"} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{reArr.title}</h4>
            <p>{reArr.content}</p>
            <p>{reArr.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
  }

  export default Detail;