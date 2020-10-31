import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({ component: Component , ...rest }) => (
  <Route {...rest} render={
    props => !!localStorage.getItem('token') ? (<Redirect to="/" />)
    : (<Component {...props} />)
  } />
)

export default RestrictedRoute