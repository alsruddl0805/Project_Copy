import React, {useState} from 'react';
import './App.css';

function App() {
  /*
  state : 변수 대신 쓰는 데이터 저장공간 (useState()를 사용하여 만들어야 함)
  장점 ) state는 변경되면 HTML이 자동으로 재렌더링이 되기 때문에, 새로고침 없이도 부드럽게 변경 됨
  */ 
  let [a, b] = useState('여자 코트 추천'); // => [작성한 string 문자열, <-를 수정하기 위한 데이터]

  return (
    // JSX 문법 (HTML 대용)
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <ul className="list">
        <li>
          <h3>{a}</h3>
          <p>2월 17일 발행</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
