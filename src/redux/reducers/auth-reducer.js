import { LOGIN_USER } from '../actions/types'

const initialState = {
  user: {},
  loading: true
}

export default (state = initialState , action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_USER:
      return {
        user: payload,
        loading: false
      }
    default:
      return state
  }
}