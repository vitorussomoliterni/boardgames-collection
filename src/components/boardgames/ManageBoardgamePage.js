import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BoardgameForm from './BoardgameForm';
import BoardgamesData from '../../data/boardgames';

class ManageBoardgamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardgame: {}
    };

    this.updateBoardgameState = this.updateBoardgameState.bind(this);
  }

  componentDidMount() {
    const boardgame = BoardgamesData.find(b => b.id === this.props.match.params.id);
    if (boardgame !== undefined) {
      return this.setState({boardgame: boardgame});
    }
  }

  getBoardgame() {
    const boardgame = BoardgamesData.find(b => b.id === this.props.match.params.id);
    if (boardgame !== undefined) {
      return boardgame;
    }
    return {};
  }

  updateBoardgameState(event) {
    const field = event.target.name;
    let boardgame = this.state.boardgame;
    boardgame[field] = event.target.value;
    return this.setState({boardgame: boardgame});
  }

  render() {
    return (
      <div>
        <h1>Manage Game</h1>
        <BoardgameForm
          boardgame={this.getBoardgame()}
          onChange={this.updateBoardgameState}/>
        <Link to="/boardgames"
              className="btn btn-primary"
              onClick={() => updateBoardgameList(this.state.boardgame)}>Save</Link>
      </div>
    );
  }
}

  function updateBoardgameList(boardgame) {
    if (boardgame.id) {
      updateBoardgame(boardgame);
    } else {
      addBoardgame(boardgame);
    }
  }

  function updateBoardgame(boardgame) {
      let boardgameIndex = BoardgamesData.findIndex(b => b.id === boardgame.id);
      BoardgamesData[boardgameIndex] = boardgame;
  }

  function addBoardgame(boardgame) {
    boardgame.id = boardgame.title.replace(" ", "-");
    BoardgamesData.push(boardgame);
  }

ManageBoardgamePage.propTypes = {
  match: PropTypes.object.isRequired,
  boardgame: PropTypes.object
};

export default ManageBoardgamePage;