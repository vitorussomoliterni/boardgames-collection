import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BoardgameForm from './BoardgameForm';
import BoardgamesData from '../../data/boardgames';

class ManageBoardgamePage extends React.Component {
  getBoardgame() {
    const boardgame = BoardgamesData.find(b => b.id === this.props.match.params.id);
    if (boardgame) {
      return boardgame;
    }
    return {};
  }

  updateBoardgameList(boardgame) {
    if (boardgame) {
      this.updateBoardgame(boardgame);
    } else {
      this.addBoardgame(boardgame);
    }
  }

  updateBoardgame(boardgame) {
      let boardgameIndex = BoardgamesData.find(b => b.id === boardgame.id);
      BoardgamesData[boardgameIndex] = boardgame;
  }

  addBoardgame(boardgame) {
    boardgame.id = boardgame.title.replace(" ", "-");
    BoardgamesData.push(boardgame);
  }

  render() {
    return (
      <div>
        <h1>Manage Game</h1>
        <BoardgameForm boardgame={this.getBoardgame()} />
        <Link to="/boardgames"
              className="btn btn-primary"
              onClick={this.updateBoardgameList(this.getBoardgame())}>Save</Link>
      </div>
    );
  }
}

ManageBoardgamePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ManageBoardgamePage;