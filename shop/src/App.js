import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/001.jpg';
import data from './data.js';

function App() {
  let [shoes, setShoes] = useState(data);

   return (
    <div className="App"> 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ming's</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">ABOUT</Nav.Link>
            <Nav.Link href="#features">SHOP</Nav.Link>
            <Nav.Link href="#pricing">MYPAGE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <div className="main-bg-import" style={{'background' : 'no-repeat center/100% url(' + bg + ')', height: '300px'}}></div>
      
      <div className="container">
        <div className="row">
          {
            shoes.map((item, i) => {
              return(
                <List item={shoes[i]} i={i+1}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

function List(props) {
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%" />
      <h4>{ props.item.title }</h4>
      <p>{ props.item.price }</p>
    </div> 
  )
}

export default App;
