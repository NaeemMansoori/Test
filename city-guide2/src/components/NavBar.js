import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import police from "../static/police.webp"
import hospital from "../static/hospital-building.png"
import petrol from "../static/petrol.webp"
import './NavBar.css'


const NavBar=()=> {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='abc' >
      <Container >
        <Navbar.Brand href="/" >City-Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="hc">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">City</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
          <img src={police} className="nic" alt="Loading" /> 
          <img src={hospital} className="nic" alt="Loading" />
          <img src={petrol} className="nic" alt="Loading" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;