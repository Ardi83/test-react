import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth-actions'
import UseAuth from './useAuth'

const Login = ({ login }) => {

  const submit = async ({email, password}) => {
    await login({email, password});
  };

  return <UseAuth title="Login" submit={submit} />
}

export default connect(null, { login })(Login)
