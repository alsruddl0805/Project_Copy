import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/001.jpg';
import listData from './routes/data.js';
import Detail from './routes/detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  let [shoes, setShoes] = useState(listData);
  let navigate = useNavigate(); // 페이지 이동을 도와주는 함수

  function sortList() {
    let sortArr = [...shoes];
    sortArr.sort((a, b) => {
      if(a.title > b.title) return 1;
      if(a.title === b.title) return 0;
      if(a.title < b.title) return -1;
    });
    setShoes(sortArr);
  }

   return (
    <div className="App"> 
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/')}}>Ming's</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/shop')}}>SHOP</Nav.Link>
            <Nav.Link href="#cart">CART</Nav.Link>
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
                <List item={shoes[i]} i={i+1} key={i}/>
              )
            })
          }
        </div>
      </div>} />
      <Route path="/detail/:id " element={<Detail shoes={shoes}/>} />

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
  return(
    <div className="col-md-4">
      <Link to="/detail" >
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%" />
      <h4>{ props.item.title }</h4>
      <p>{ props.item.price }</p>
      </Link>
    </div> 
  )
}

export default App;
