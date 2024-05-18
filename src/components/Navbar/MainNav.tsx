import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Images/icon.png'
const MainNav = () => {
  return (
    <div>
      <div className="Navbar">
      <Navbar expand="lg" >
      <Container className='container'>
        <Navbar.Brand href="#home" className='logo me-auto'><img src={Logo} alt="" />Texts</Navbar.Brand>
          <Nav className="navbar justify-content-end ms-auto">
            <Nav.Link className='nav' href="#faq">FAQ</Nav.Link>
            <Nav.Link className='nav' href="#support">Support</Nav.Link>
            <Nav.Link className='nav' href="#login">Login</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
      </div>
    </div>
  )
}

export default MainNav
