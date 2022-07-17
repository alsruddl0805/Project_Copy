import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/001.jpg';
import { listData, Detail } from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes, setShoes] = useState(listData);

   return (
    <div className="App"> 
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
          <Link to="/">Ming's</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#shop"><Link to="/shop">SHOP</Link></Nav.Link>
            <Nav.Link href="#cart">CART</Nav.Link>
            <Nav.Link href="#mypage">MYPAGE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<div className="main-bg-import" style={{'background' : 'no-repeat center/100% url(' + bg + ')', height: '300px'}}></div>} />
        <Route path="/shop" element={
        <div className="container">
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
      <Route path="/detail" element={<Detail/>} />
      </Routes>
    </div>
  );
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
