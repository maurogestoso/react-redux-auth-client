import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

import App from './components/app';
import Signin from './components/auth/signin';
import Feature from './components/feature';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, createLogger())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/signin' component={Signin}/>
        <Route path='/feature' component={Feature}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
