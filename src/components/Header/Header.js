import React from 'react';
import '../Products/Products.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
      <Nav.Link as={Link} to="/explore"><span className='yellow-text'>Explore</span></Nav.Link>
      {
        user.email && <NavDropdown title="Dashboard" id="nav-dropdown">
        <Nav.Link as={Link} to='/payment' style={{color: "black"}}>Pay</Nav.Link>
        <Nav.Link as={Link} to='/myorders' style={{color: "black"}}>My Orders</Nav.Link>
        <Nav.Link as={Link} to='/review' style={{color: "black"}}>Review</Nav.Link>
        
        <NavDropdown.Divider />
        {
        user.email && <Button onClick={logOut}>Logout</Button>
      }
      </NavDropdown>
      }
      
      
      
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;