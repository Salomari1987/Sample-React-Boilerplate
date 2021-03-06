import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from 'services/authentication';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    auth.isAuthenticated() ? (
      <Component {...rest} {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    ))} />
);

export default PrivateRoute;