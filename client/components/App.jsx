/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { io } from 'socket.io-client';
import NavBar from './NavBar';
import SignIn from './forms/SignIn';
import Register from './forms/Register';
import PortalInit from './portal/PortalInit';
import Portal from './portal/Portal';
import { loginUser } from '../store/storeComponents/loginUser';

function Home() {
  return (
    <img
      alt="logo"
      src="public/images/Logo.png"
      style={{ display: 'flex', margin: 'auto' }}
    />
  );
}

function App(props) {
  window.socket = io('/');
  useEffect(async () => {
    const token = window.localStorage.getItem('token');
    if (!props.user.email && token !== undefined) {
      await props.loginUser();
    }
  });
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" caseSensitive={false} component={SignIn} />
        <Route path="/register" caseSensitive={false} component={Register} />
        <Route
          path="/portal/:portalId"
          caseSensitive={false}
          component={Portal}
        />
        <Route path="/portal" caseSensitive={false} component={PortalInit} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: () => dispatch(loginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
