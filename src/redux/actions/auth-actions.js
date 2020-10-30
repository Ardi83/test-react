import { LOGIN_USER } from './types'
import axios from 'axios'
import { setAlert } from './alert-actions';

export const login = ({email, password}) => async dispatch => {
  const option = {
    headers: { 'Content-Type': 'application/json' }
  }
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('https://reqres.in/api/login', body, option);
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
  } catch (err) {
    if(err) {
      const { error } = err.response.data
      dispatch(setAlert(error, 'danger'));
    }
  }
}

export const signup = ({email, password}) => async dispatch => {
  const option = {
    headers: { 'Content-Type': 'application/json' }
  }
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('https://reqres.in/api/register', body, option);

    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
  } catch (err) {
    if(err) {
      const { error } = err.response.data
      dispatch(setAlert(error, 'danger'));
    }
  }
}