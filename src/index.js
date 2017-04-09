import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

render(
  < Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
