import React from 'react';
import '../Products/Products.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../hook/useFirebase';
import { Link } from 'react-router-dom';

const Header = () => {
  const {user, logOut} = useFirebase();
    return (
        <div>
  <Navbar style={{backgroundColor: "black"}} variant="dark">
    <Container style={{}}>
    <Navbar.Brand style={{fontWeight: "bold"}} href="/home"><span className='yellow-text'>CAM</span> PAVILION</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home"><span className='yellow-text'>Home</span></Nav.Link>
      <Nav.Link as={Link} to="/addproduct"><span className='yellow-text'>Add Product</span></Nav.Link>
      
      <Nav.Link as={Link} to="/register"><span className='yellow-text'>Register</span></Nav.Link>
      
{
  user.email && <Nav.Link as={Link} to="/explore"><span className='yellow-text'>Explore</span></Nav.Link>
}
{
  user.email && <Button onClick={logOut}>Logout</Button>
}

    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;