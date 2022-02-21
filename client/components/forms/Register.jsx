/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import createUser from '../../store/storeComponents/registerUser';

function Register(props) {
  const [registerValues, setRegisterValues] = useState({
    email: '',
    password: '',
    name: '',
    role: '',
  });

  const register = async () => {
    const registered = await props.createUser(registerValues);
    if (registered) props.history.push('/signin');
  };

  return (
    <Form id="signin-form-container">
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setRegisterValues({ ...registerValues, name: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setRegisterValues({ ...registerValues, email: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setRegisterValues({ ...registerValues, password: e.target.value });
          }}
        />
      </Form.Group>
      <div key="inline-radio" className="mb-3">
        <Form.Check
          inline
          label="Client"
          name="group1"
          type="radio"
          id="inline-radio-1"
          onChange={() => {
            setRegisterValues({ ...registerValues, role: 'Client' });
          }}
        />
        <Form.Check
          inline
          label="Therapist"
          name="group1"
          type="radio"
          id="inline-radio-2"
          onChange={() => {
            setRegisterValues({ ...registerValues, role: 'Therapist' });
          }}
        />
      </div>
      <Button variant="primary" type="button" onClick={register}>
        Register
      </Button>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
});

export default connect(null, mapDispatchToProps)(Register);
