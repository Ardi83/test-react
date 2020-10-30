import { GET_USERS } from './types'
import axios from 'axios'
import { setAlert } from './alert-actions';

export const getUsers = (currentPage) => async dispatch => {
  const page = currentPage !== 1 ? `?page=${currentPage}` : ''
  try {
    const res = await axios.get(`https://reqres.in/api/users${page}`)
    dispatch({
      type: GET_USERS,
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