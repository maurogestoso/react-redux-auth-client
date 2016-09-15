import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from '../actions/types'

const initialState = {
  authenticated: false,
  error: null
};

export default function auth(prevState = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...prevState, authenticated: true};
    case UNAUTH_USER:
      return {...prevState, authenticated: false};
    case AUTH_ERROR:
      return {...prevState, error: action.payload};
    default:
      return prevState;
  }
}
