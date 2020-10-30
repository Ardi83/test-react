import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux'
import { store } from './redux/store'
// Components
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Home from './components/Home'
import Users from './components/Users'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={Home} />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/users'>
           <Users />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App