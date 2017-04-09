import React, { PropTypes } from 'react';
import BoardgamesData from '../../data/boardgames';
import BoardgameListRow from './BoardgameListRow';

const BoardgameList = () => {
  function getInitialState() {
    return {
      boardgames: []
    };
  }

  function componentDidMount() {
    this.setState({
      boardgames: BoardgamesData
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Number Of Players</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {this.state.boardgames.map(boardgame => 
        <BoardgameListRow key={boardgame.id} boardgame={boardgame} />
                )}
      </tbody>
    </table>
  );
};

export default BoardgameList;