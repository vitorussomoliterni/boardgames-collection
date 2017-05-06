import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BoardgameListRow = ({boardgame}) => {
  return (
    <tr>
      <td><Link to={'/boardgames/' + boardgame.id}>{boardgame.title}</Link></td>
      <td>{boardgame.numberOfPlayers}</td>
      <td>{boardgame.score} / 5</td>
    </tr>
  );
};

BoardgameListRow.propTypes = {
  boardgame: PropTypes.object.isRequired
};

export default BoardgameListRow;