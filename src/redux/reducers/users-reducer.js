import { GET_USERS } from '../actions/types'

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
    default:
      return state
  }
}