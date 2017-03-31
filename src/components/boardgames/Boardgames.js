import React from 'react';
import {BrowserRouter} from 'react-router-dom';

class Boardgames extends React.Component {
    redirectToAddBoardgamePage() {
        BrowserRouter.push('/boardgame');
    }

    render() {
        return (
            <div>
                <h1>Boardgames</h1>
                <input type="submit"
                    value="Add Game"
                    className="btn btn-primary"
                    onClick={this.redirectToAddBoardgamePage}
                />
            </div>
        );
    }
}

export default Boardgames;