import { GET_USERS } from './types'
import axios from 'axios'
import { setAlert } from './alert-actions';

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get(`https://reqres.in/api/users`)
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    if(err) {
      if (err) {
        const { error } = err.response.data;
        dispatch(setAlert(error, 'danger'));
      }
    }
    dispatch({type: LOGIN_FAIL});
  }
}