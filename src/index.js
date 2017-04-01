import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './store/configureStore';
import { Provider } from 'react-redux';

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);