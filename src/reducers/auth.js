import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE} from '../actions/types'

// const initialState = {
//   authenticated: false,
//   error: null
// };

export default function auth(prevState = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...prevState, authenticated: true, error: ''};
    case UNAUTH_USER:
      return {...prevState, authenticated: false, error: ''};
    case AUTH_ERROR:
      return {...prevState, error: action.payload};
    case FETCH_MESSAGE:
      return {...prevState, message: action.payload};
    default:
      return prevState;
  }
}
