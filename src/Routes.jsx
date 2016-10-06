import React, { Component } from 'react';
import { Redirect, Router, Route, browserHistory } from 'react-router';
import cookie from 'react-cookie';

import Login from './containers/Login';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Auth from './containers/Auth';

import AuthRouteExternal from './external.component';

const AuthRoute = <Route path="/auth-1" getComponents={(nextState, cb) => {
  cb(null, Auth);
}} />;

const validateLogin = (nextState, replace, callback) => {
  // do auth verification here
  callback(/* error */);
};

export default (props) => (
  <Router history={props.history}>
    <Route path="/login" component={Login} />
    <Redirect from="/" to="/home" />

    <Route path="/" component={App}>
      { /* Either like this, see above for declaration of AuthRoute */}
      { AuthRoute }

      { /* Or like this, both are pretty same */ }
      <Route path="/auth-2" getComponents={(nextState, cb) => {
        cb(null, Auth);
      }} />

      { AuthRouteExternal }

      <Route path="/home" component={Home} onEnter={validateLogin} />
      <Route path="/about" component={About} onEnter={validateLogin} />

    </Route>
  </Router>
);
