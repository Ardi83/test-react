import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import store from './store'
// Components
import Login from './components/Login'
import Signup from './components/Login'
import Profile from './components/Profile'
import Home from './components/Home'
import Users from './components/Users'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/home' component={Home} />
      </Router>
    </Provider>
  )
}

export default App