import React, { PropTypes } from 'react';
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

BoardgameListRow.propTypes = {
    boardgame: PropTypes.object.isRequired
};

export default BoardgameListRow;