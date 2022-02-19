import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">DBT Portal</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#SignIn">Sign In</Nav.Link>
          <Nav.Link href="#Register">Register</Nav.Link>
          <Nav.Link href="#GroupPortal">Portal</Nav.Link>
          <Nav.Link href="#Forum">Forum</Nav.Link>
          <Nav.Link href="#SignOut">Sign Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
