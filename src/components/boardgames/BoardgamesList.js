import React, { PropTypes } from 'react';
import BoardgameListRow from './BoardgameListRow';

const BoardgameList = ({boardgames}) => {
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
          {boardgames.map(boardgame => 
          <BoardgameListRow key={boardgame.id} boardgame={boardgame} />
                  )}
        </tbody>
      </table>
    );
};

BoardgameList.propTypes = {
  boardgames: PropTypes.array.isRequired
};

export default BoardgameList;