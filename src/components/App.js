import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Routes from './Routes';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" id="main">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
