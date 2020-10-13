import { Link } from 'react-scroll';
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Sprint Code</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <Link><Nav.Link>Home</Nav.Link></Link> 
     <Link to="courses-heading-div"  smooth={true} duration="1000"><Nav.Link >Courses</Nav.Link></Link> 
     <Link to="contact-div"  smooth={true} duration="1000"><Nav.Link>Contact</Nav.Link></Link> 
      <Nav.Link href="#link">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Navigation;