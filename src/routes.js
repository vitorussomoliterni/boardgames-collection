import React from 'react';
import {Route, HashRouter as Router} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import About from './components/about/About';

//eslint-disable-line import/no-named-as-default

export default (
    <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
    </Router>
);