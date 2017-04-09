import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
