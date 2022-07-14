import React, {useState} from 'react';
import './App.css';

function App() {
  /*
  state : 변수 대신 쓰는 데이터 저장공간 (useState()를 사용하여 만들어야 함)
  장점 ) state는 변경되면 HTML이 자동으로 재렌더링이 되기 때문에, 새로고침 없이도 부드럽게 변경 됨
  */ 
  let [title, setTitle] = useState(['여자 코트 추천', '남자 신발 TOP 3', '트렌드 모자']); // => [작성한 string 문자열, <-를 수정하기 위한 데이터]
  let [likeNum, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [nowTitle, setNowTitle] = useState(0);
  let [input, setInput] = useState('');
  
  // .map(콜백함수)
  // [1,2,3].map(function(a) {
  //   console.log(a)
  // })

  function modifyTitle() {
    // 복사 : deep copy 해서 수정 (값 공유 X)
    let newArr = [...title];
    newArr[0] = '남자 코트 추천';
    setTitle(newArr);
  }

  function likeUpdate(idx) {
    let testLikeArr = [...likeNum];
    testLikeArr[idx] = testLikeArr[idx] + 1;
    setLike(testLikeArr);
  }

  function listUpdate() {
    let listArr = [...title];
    listArr.unshift(input)
    setTitle(listArr);
  }

  function removeList(idx) {
    let listArr = [...title];
    listArr.splice(idx, 1);
    setTitle(listArr);
  }

  return (
    // JSX 문법 (HTML 대용)
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      
      {/* <ul className="list">
        <li>
          <h3>
            {title[0]} 
            <span onClick={ () => {likeUpdate(likeNum + 1)} }>👍</span> <span>{likeNum}</span>
            </h3>
          <p>2월 19일 발행</p>
        </li>
        <li>
          <h3>{title[1]}</h3>
          <p>2월 18일 발행</p>
        </li>
        <li>
          <h3>{title[2]}</h3>
          <p>2월 17일 발행</p>
        </li>
      </ul> */}

      <ul className="list">
      {
        title.map(function(a, idx) {
          return (
            <li key={idx}>
              <h3 onClick={() => {setModal(!modal); setNowTitle(idx)}}>{title[idx]}
              <span onClick={(e) => {e.stopPropagation(); likeUpdate(idx)}}>👍</span> 
              <span>{likeNum[idx]}</span>
              <button onClick={(e) => {e.stopPropagation(); removeList(idx)}}>삭제</button>
              </h3>
              <p>2월 18일 발행</p>
            </li>
          )
        })
      }
      </ul>
      
        <input type="text" onChange={(e) => {setInput(e.target.value)}}/>
        <button type="button" onClick={() => {listUpdate()}}>발행</button>

      {
        modal === true ? <Modal title={title} nowTitle={nowTitle} modifyTitle={modifyTitle}/> : null
      }

    </div>
  );
}

function Modal(props) {
  return(
      <div className="modal">
        <h4>{props.title[props.nowTitle]}</h4>
        <p>2020-02-02</p>
        <p>상세내용입니다</p>
        <button type="button" onClick={props.modifyTitle}>제목 바꾸기</button>
      </div>
  )
}

export default App;