import React from 'react';
import BoardgamesData from '../../data/boardgames';
import BoardgameListRow from './BoardgameListRow';

class BoardgameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardgames: BoardgamesData
    };
  }

  render() {
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
  }
}

export default BoardgameList;