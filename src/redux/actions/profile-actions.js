import { GET_PROFILE } from './types'
import axios from 'axios'
import { setAlert } from './alert-actions';

export const getProfile = (id) => async dispatch => {
  try {
    const res = await axios.get(`https://reqres.in/api/users/${id}`)
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    if(err) {
      if (err) {
        // const { error } = err.response.data;
        // dispatch(setAlert(error, 'danger'));
      }
    }
  }
}