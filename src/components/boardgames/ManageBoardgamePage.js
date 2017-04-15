import React, { PropTypes } from 'react';
import BoardgameForm from './BoardgameForm';

class ManageBoardgamePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Manage Game</h1>
        <BoardgameForm boardgame={this.props.boardgame} />
        <button className="btn btn-primary">Save</button>
      </div>
    );
  }
}

BoardgameForm.propTypes = {
  boardgame: PropTypes.object
};

export default ManageBoardgamePage;