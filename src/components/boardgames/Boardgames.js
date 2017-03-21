import React from 'react';

class Boardgames extends React.Component {
    render() {
        return (
            <div>
                <h1>Boardgames</h1>
                <input type="submit"
                    value="Add Game"
                    className="btn btn-primary"
                />
            </div>
        );
    }
}

export default Boardgames;