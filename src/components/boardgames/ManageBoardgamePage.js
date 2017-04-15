import React, { PropTypes } from 'react';
import BoardgameForm from './BoardgameForm';
import BoardgamesData from '../../data/boardgames';

class ManageBoardgamePage extends React.Component {
  getBoardgame = () => {
    const boardgame = BoardgamesData.find(x => x.id === this.props.match.params.id);
    if (boardgame) {
      return boardgame;
    }
    return {};
  }

  render() {
    return (
      <div>
        <h1>Manage Game</h1>
        <BoardgameForm boardgame={this.getBoardgame()} />
        <button className="btn btn-primary">Save</button>
      </div>
    );
  }
}
/*
ManageBoardgamePage.propTypes = {
  match : PropTypes.array.isRequired()
};*/

export default ManageBoardgamePage;