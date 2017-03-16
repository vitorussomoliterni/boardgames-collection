import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './home/HomePage';
import About from './about/About';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}

export default App;