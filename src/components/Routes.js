import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import BoardgamesPage from './boardgames/BoardgamesPage';
import Header from './Header';
import AboutPage from './AboutPage';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/boardgames" component={BoardgamesPage} />
    </div>
  );
};

export default Routes;