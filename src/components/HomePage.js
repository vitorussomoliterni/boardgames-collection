import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <div className="text-center">
          <h1>Manage your boardgame collection</h1>
          <Link to="/boardgames"
            className="btn btn-lg btn-primary">Let's Game!</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;