import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const BoardgameListRow = ({boardgame}) => {
  return (
    <tr>
      <td><Link to={'/boardgame/' + boardgame.id}>{boardgame.title}</Link></td>
      <td>{boardgame.numberOfPlayers}</td>
      <td>{boardgame.score} / 5</td>
    </tr>
  );
};

BoardgameListRow.propTypes = {
  boardgame: PropTypes.object.isRequired
};

export default BoardgameListRow;