/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { loginUser } from '../../store/storeComponents/loginUser';

function SignIn(props) {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });

  const submitUser = async () => {
    const login = await props.loginUser(loginValues);
    if (login) props.history.push('/');
  };

  return (
    <Form id="signin-form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setLoginValues({ ...loginValues, email: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setLoginValues({ ...loginValues, password: e.target.value });
          }}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={submitUser}>
        Log In
      </Button>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
