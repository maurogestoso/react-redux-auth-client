import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types'

const API_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  return function (dispatch) {
    // submit email/pword to server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(res => {
        // if request is good
          // - Update state
          dispatch({type: AUTH_USER});
          // - Save JWT
          localStorage.setItem('token', res.data.token);
          // - Redirect to /feature
          browserHistory.push('/feature');
      })
      .catch(err => {
        // if request is bad
          // - show error
        dispatch(authError('Bad Login info'));
      });
  }

}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
