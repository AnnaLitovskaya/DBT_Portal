/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SignIn from './forms/SignIn';
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
