import React, {useState} from 'react';
import './App.css';

function App() {
  /*
  state : 변수 대신 쓰는 데이터 저장공간 (useState()를 사용하여 만들어야 함)
  장점 ) state는 변경되면 HTML이 자동으로 재렌더링이 되기 때문에, 새로고침 없이도 부드럽게 변경 됨
  */ 
  let [title, b] = useState(['여자 코트 추천', '남자 신발 TOP 3', '트렌드 모자']); // => [작성한 string 문자열, <-를 수정하기 위한 데이터]
  let [likeNum, likeUpdate] = useState(0);

  function modifyTitle() {
    // 복사 : deep copy 해서 수정 (값 공유 X)
    let newArr = [...title];
    newArr[0] = '남자 코트 추천';
    b(newArr);
}

  return (
    // JSX 문법 (HTML 대용)
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      
      <ul className="list">
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
      </ul>

      <button type="button" onClick={modifyTitle}>변경</button>
    </div>
  );
}

export default App;