import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="https://awave.se" target="_blank" className="navbar-brand">Awave test</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>

            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">Users</Link>
            </li>
          </ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">Logout</Link>
            </li>
        </div>
      </nav>
    </div>
  )
}

export default Home
