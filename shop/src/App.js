import logo from './logo.svg';
import './App.css';
import { Button , Navbar, Container, Nav } from 'react-bootstrap';

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
    </div>
  );
}

export default App;
