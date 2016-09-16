import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/app';
import RequireAuth from './components/auth/RequireAuth';
import IndexPage from './components/IndexPage';
import Signin from './components/auth/Signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/Signout';
import Feature from './components/feature';
import reducers from './reducers';

import {AUTH_USER} from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, createLogger())(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({type: AUTH_USER})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={IndexPage}/>
        <Route path='/signin' component={Signin}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/signout' component={Signout}/>
        <Route path='/feature' component={RequireAuth(Feature)}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
