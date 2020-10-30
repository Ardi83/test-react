import React from 'react'
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/auth-actions'
import UseAuth from './useAuth'

const Signup = ({ signup }) => {

  const submit = async ({email, password}) => {
    await signup({email, password});
  };

  return <>
  <div>name: eve.holt@reqres.in</div>
  <div>pass: pistol</div>
  <UseAuth title="Signup" submit={submit} />
  </>
}

export default connect(null, { signup })(Signup)
