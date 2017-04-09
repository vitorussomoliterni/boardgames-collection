import React, { PropTypes } from 'react';
import BoardgameForm from './BoardgameForm';

class ManageBoardgamePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Manage Game</h1>
        <BoardgameForm />
      </div>
    );
  }
}

export default ManageBoardgamePage;