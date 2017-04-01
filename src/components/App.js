import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './home/HomePage';
import About from './about/About';
import Header from './common/Header';
import Boardgames from './boardgames/Boardgames';
import ManageGame from './boardgames/ManageGame';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="app">
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/games" component={Boardgames} />
                <Route strict path="/game" component={ManageGame} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}

export default App;