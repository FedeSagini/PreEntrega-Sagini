import Container from 'react-bootstrap/Container';
import logo from '../assets/img/logo-no-background.png'
import CartWidget from './CartWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> 
            <img className='logo' src={logo} alt="logo" />     
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">
                Procesadores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2">
                Placas de video
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Discos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>

       

    </>
  );
}

export default NavBar;