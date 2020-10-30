import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux'
import { store } from './redux/store'
// Components
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Profile from './components/Profile'
import Home from './components/Home'
import Users from './components/Users'
import Alert from './components/Alert';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={Home} />
        <section className="container">
          <Alert />
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
        </section>
      </Router>
    </Provider>
  )
}

export default App