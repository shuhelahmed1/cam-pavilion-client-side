import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './header.css';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
  <Navbar expand="md" collapseOnSelect style={{backgroundColor: "black"}} variant="dark">
    <Container>
    <Navbar.Brand style={{fontWeight: "bold"}} href="/home"><span className='yellow-text'>CAM</span> PAVILION</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
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
        user.email && <button className='ms-1 common-button' onClick={logOut}>Logout</button>
      }
      </NavDropdown>
      }
      <NavDropdown title="Admin Panel" id="nav-dropdown">
        <Nav.Link as={Link} to='/makeadmin' style={{color: "black"}}>Make Admin</Nav.Link>
        <NavDropdown.Divider />
        {
        user.email && <button className='ms-1 common-button' onClick={logOut}>Logout</button>
      }
      </NavDropdown>
      
      
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;