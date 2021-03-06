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
import {history} from './history'
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Home} />
        <section className="container">
          <Alert />
          <Switch>
            <RestrictedRoute path='/login' component={Login} />
            <RestrictedRoute path='/signup' component={Signup} />
            <PrivateRoute exact path='/profile/:id' component={Profile} />
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