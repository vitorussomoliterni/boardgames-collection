import React, { Component } from 'react';
import HomePage from './HomePage';
import { Route } from 'react-router-dom';
import Header from './Header';
import AboutPage from './AboutPage';
import BoardgamesPage from './boardgames/BoardgamesPage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="main">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/boardgames" component={BoardgamesPage} />
      </div>
    );
  }
}

export default App;
