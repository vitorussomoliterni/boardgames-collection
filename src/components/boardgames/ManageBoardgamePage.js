import React from 'react';
import PropTypes from 'prop-types';
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

ManageBoardgamePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ManageBoardgamePage;