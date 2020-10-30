import { GET_USERS, LOGOUT_USER } from '../actions/types'

const initialState = {
  users: {},
  loading: true
}

export default (state = initialState , action) => {
  const { type, payload } = action
  switch (type) {
    case GET_USERS:
      return {
        users: payload,
        loading: false
      }
    case LOGOUT_USER:
      return {
        users: {},
        loading: false
      }
    default:
      return state
  }
}