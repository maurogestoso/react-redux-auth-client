import axios from 'axios';
import {browserHistory} from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types'

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

export function signupUser ({email, password}) {
  return function (dispatch) {
    axios.post(`${API_URL}/signup`, {email, password})
      .then(res => {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', res.data.token);
        browserHistory.push('/feature');
      })
      .catch(err => {
        dispatch(authError('Bad Signup info'));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser () {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}

export function fetchMessage () {
  return function (dispatch) {
    axios.get(API_URL, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then(res => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: res.data.message
        })
      })
      .catch(err => {
        console.log(res.error);
      });
  };
}