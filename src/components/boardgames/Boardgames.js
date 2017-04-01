import React from 'react';
import { Link } from 'react-router';

class Boardgames extends React.Component {
    render() {
        return (
            <div>
                <h1>Boardgames</h1>
                <Link to="/game" className="btn btn-default">Add A Game</Link>
            </div>
        );
    }
}

export default Boardgames;