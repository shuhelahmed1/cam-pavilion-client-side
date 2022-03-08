import React from 'react';
import '../Products/Products.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {

    return (
        <div>
  <Navbar style={{backgroundColor: "black"}} variant="dark">
    <Container style={{}}>
    <Navbar.Brand style={{fontWeight: "bold"}} href="/home"><span className='yellow-text'>CAM</span> PAVILION</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="/home"><span className='yellow-text'>Home</span></Nav.Link>
      <Nav.Link href="/addproduct"><span className='yellow-text'>Add Product</span></Nav.Link>
      
      <Nav.Link href="/register"><span className='yellow-text'>Register</span></Nav.Link>
      <Nav.Link href="/explore"><span className='yellow-text'>Explore</span></Nav.Link>

      {/* <Nav.Link className='yellow-text' href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;