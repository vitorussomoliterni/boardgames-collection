import React from 'react';
import { Link } from 'react-router-dom';

const BoardgameListRow = ({boardgame}) => {
  return (
    <tr>
      <td><Link to={'/game/' + boardgame.id}>{boardgame.title}</Link></td>
      <td>{boardgame.numberOfPlayers}</td>
      <td>{boardgame.score}</td>
    </tr>
  );
};

export default BoardgameListRow;