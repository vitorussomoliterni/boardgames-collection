import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const history = createBrowserHistory();
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);