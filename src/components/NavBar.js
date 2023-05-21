// The navbar 
// importation
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const navStyle={backgroundColor:"yellow",width:"500px",height:"60px",justifyContent:"space-between",textDecoration:"none"}
  return (
    <div className='main-nav'>
      
    <Navbar  style={navStyle} bg="red" variant="dark">
    <Container>
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav style={navStyle} className="me-auto">
        <Nav.Link><Link
         to="/">Home</Link></Nav.Link>
        <Nav.Link><Link to="/movie">Movies</Link></Nav.Link>
        <Nav.Link><Link to="/about">About</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
//exportation 
export default NavBar
