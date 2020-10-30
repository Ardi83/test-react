import React, { useState } from 'react'

const UseAuth = ({ title, submit }) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    submit({email, password})
  };

  return (
    <>
    <h2>{title}</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input 
            type="email"
            className="form-control"
            placeholder="Email" 
            name="email" 
            value={email} 
            // required 
            onChange={e => onChange(e)}  
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            className="form-control"
            placeholder="Password" 
            name="password" 
            value={password} 
            // required 
            onChange={e => onChange(e)}    
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default UseAuth