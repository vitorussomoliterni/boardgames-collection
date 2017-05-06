import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import BoardgamesPage from './boardgames/BoardgamesPage';
import ManageBoardgamePage from './boardgames/ManageBoardgamePage';
import AboutPage from './AboutPage';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/boardgames" component={BoardgamesPage} />
      <Route path="/boardgames/:id" component={ManageBoardgamePage} />
    </div>
  );
};

export default Routes;