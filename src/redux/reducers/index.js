import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import usersReducer from './users-reducer'
import ProfileReducer from './profile-reducer'
import errorsReducer from './errors-reducer'

export default combineReducers({
  authReducer,
  // ProfileReducer,
  errorsReducer,
  usersReducer,
})