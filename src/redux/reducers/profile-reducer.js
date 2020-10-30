import { GET_PROFILE } from '../actions/types'

const initialState = {
  profile: {},
  loading: true
}

export default (state = initialState , action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PROFILE:
      return {
        profile: payload,
        loading: false
      }
    default:
      return state
  }
}