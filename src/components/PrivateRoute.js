import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component , ...rest }) => (
  <Route {...rest} render={
    props => !localStorage.getItem('token') ? (<Redirect to="/login" />)
    : (<Component {...props} />)
  } />
)

export default PrivateRoute