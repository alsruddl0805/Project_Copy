import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from './img/001.jpg';

function App() {
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
      
      <Container>
      <Row>
        <Col sm={4}>
        {/* process.env.PUBLIC_URL : public 폴더 내부 이미지 쓰는 권장방식 (서브 경로 사이트를 발행해도 문제되지 않음) */}
        <img className="colImg" src={process.env.PUBLIC_URL + '/logo192.png'}></img>
        <p>상품명 1</p>
        </Col>

        <Col sm={4}>
        <img className="colImg" src="https://codingapple.com/wp-content/uploads/2022/04/bg.png"></img>
        <p>상품명 2</p>
        </Col>

        <Col sm={4}>
        <img className="colImg" src="https://codingapple.com/wp-content/uploads/2022/04/bg.png"></img>
        <p>상품명 3</p>
        </Col>
        <Col sm={4}>
        <img className="colImg" src="https://codingapple.com/wp-content/uploads/2022/04/bg.png"></img>
        <p>상품명 4</p>
        </Col>      
      </Row>
    </Container>
    </div>
  );
}

export default App;
