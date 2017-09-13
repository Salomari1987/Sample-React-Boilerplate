import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';
import Login from 'components/Login';
import Main from 'components/Main';
import Private from 'components/Private';
import NotFound from 'components/NotFound';


export default ({...rest}) => {
  return (
    <Switch>
      <PrivateRoute {...rest} exact path='/' component={ Main } />
      <Route path='/login' render={ ()=> (<Login {...rest} />) } />
      <PrivateRoute path='/private' component={ Private } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
};
