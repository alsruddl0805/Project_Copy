import './App.css';
import { createContext, useState, useEffect, useTransition, useDeferredValue } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/001.jpg';
import listData from './routes/Data.js';
import Detail from './routes/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import Cart from './routes/Cart.js';
import { useQuery } from 'react-query';

let Context1 = createContext();
let a = new Array(10000).fill(0);

function App() {
  let [shoes, setShoes] = useState(listData);
  let [stock, setStock] = useState([10,11,12]);
  let navigate = useNavigate(); // 페이지 이동을 도와주는 함수
  let [btnCnt, setBtnCnt] = useState(1);
  let [url, setUrl] = useState('https://codingapple1.github.io/shop/data2.json');
  let [urlBtn, setUrlBtn] = useState(true); 

  let [name, setName] = useState('');
  let [isPending, startTransition] = useTransition();
  let state1 = useDeferredValue(name);

  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  let result = useQuery('name', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data })
  );

  useEffect(()=>{
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  },[]) 

  function sortList() {
    let sortArr = [...shoes];
    sortArr.sort((a, b) => {
      if(a.title > b.title) return 1;
      if(a.title === b.title) return 0;
      if(a.title < b.title) return -1;
    });
    setShoes(sortArr);
  }

  function setRoute() {
    setBtnCnt(btnCnt + 1);
    if (btnCnt > 0) setUrl('https://codingapple1.github.io/shop/data3.json');
    if (btnCnt == 2) setUrlBtn(false);
  }

  // async스럽게 순차적으로 실행하고 싶을 때 해결책은 useEffect
  useEffect(()=>{
    if ( count != 0 && count < 3 ) {
      setAge(age+1)
    }
  }, [count]) 

   return (
    <div className="App"> 

    {/* 
    해당 코드의 문제점 / 22까지만 오르게 해놨는데 23부터도 정상동작함
    async 함수는 오래 걸린다 싶으면 다음줄 코드부터 실행하기 떄문에, 순차적으로 실행할 코드가 필요하다.
    */}
    {/* <button onClick={()=>{
      setCount(count+1);
      if ( count < 3 ) {
        setAge(age+1);
      }          
    }}>누르면한살먹기</button>  */}

    <button onClick={()=>{
      setCount(count+1);
    }}>누르면한살먹기</button> 

    <p>{age}</p>

    <div>
      {/* 
      
      */}

      <input onChange={(e) => { 
          setName(e.target.value)
      }}/>
      {
        a.map(() => {
          return <div>{state1}</div>
        })
      }
    </div>
    
    <div>
      { result.isLoading && '로딩중' }
      { result.error && '에러남' }
      { result.data && result.data.name }
    </div>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Ming's</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/shop')}}>SHOP</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>CART</Nav.Link>
            <Nav.Link href="#mypage">MYPAGE</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about')}}>ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<div className="main-bg-import" style={{'background' : 'no-repeat center/100% url(' + bg + ')', height: '300px'}}></div>} />
        <Route path="/shop" element={
        <div className="container">
        <button type="button" onClick={() => { sortList() }}>정렬</button>
        <div className="row">
          {
            shoes.map((item, i) => {
              return(
                <List item={item} i={i+1} key={i}/>
              )
            })
          }
        </div>

        {
          urlBtn == true ? <button onClick={() => {
            setRoute();
            axios.get(url)
            .then((res) => {
              console.log(url, res.data);
              let resData = [...shoes, ...res.data];
              setShoes(resData);
            })
            .catch((err) => {
              console.log('err', err);
            })

            // 서버로 데이터 보내는 방식
            axios.post('/test', {name: 'kim'})

            // ajax 요청 여러개 한번에 하는 법
            Promise.all([axios.get('/url1'), axios.get('/url2')])
            .then((res) => {
              console.log(res);
            })

            // fetch (JS문법으로 axios 설치하지 않아도 사용 가능함 But JSON 변환해주지 않음)
          }}>상품 더보기</button> : null
        }
        
      </div>} />
      <Route path="/detail/:id" element={
        <Context1.Provider value={{shoes, stock}}>
          <Detail shoes={shoes}/> {/* 이 안의 모든 컴포넌트는 전부 state 사용 가능*/}
        </Context1.Provider>
      } />

      <Route path="/cart" element={<Cart/>}></Route>

      {/* 
      Nested Route (태그 내부 경로 연결)
      <Route path="/about/member" element={<About/>} />
      <Route path="/about/location" element={<About/>} /> 
      */}
      <Route path="/about" element={<About/>}>
        <Route path="member" element={<div>멤버</div>} />
        <Route path="location" element={<div>장소</div>} />
      </Route>
      
      <Route path="/event" element={<Event/>}>
        <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
        <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
      </Route>

      {/* * (별표표시) : 오타 포함 위 경로 제외 모든 페이지 */}
      <Route path="*" element={<div>404 Page</div>} />
      </Routes>
    </div>
  );
}

function roading() {
  return (
    <div>로딩중 입니당 !</div> 
  )
}

function Event() {
  return (
    <div>
      <div>오늘의 이벤트</div>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
    <div>회사 정보 페이지</div>
    {/* 어떤 장소에 Nested route 내부 element를 보여줄지 ? */}
    <Outlet></Outlet>
    </div>
  )
}

function List(props) {
  let [id, setId] = useState(0);
  
  return(
    <div className="col-md-4">
      <Link to={"/detail/" + props.item.id} >
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.item.id + 1) + ".jpg"} width="80%" />
      <h4>{ props.item.title }</h4>
      <p>{ props.item.price }</p>
      </Link>
    </div> 
  )
}

export default App;
