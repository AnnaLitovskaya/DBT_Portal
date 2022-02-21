/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar(props) {
  const { user } = props;
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">DBT Portal</Navbar.Brand>
        <Nav className="me-auto">
          {!user.email ? <Nav.Link href="#signin">Sign In</Nav.Link> : ''}
          {!user.email ? <Nav.Link href="#register">Register</Nav.Link> : ''}
          {user.email ? <Nav.Link href="#groupportal">Portal</Nav.Link> : ''}
          {user.email ? <Nav.Link href="#forum">Forum</Nav.Link> : ''}
          {user.email ? <Nav.Link href="#signout">Sign Out</Nav.Link> : ''}
        </Nav>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);
