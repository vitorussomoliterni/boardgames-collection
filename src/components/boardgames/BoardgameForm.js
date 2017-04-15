import React, { PropTypes } from 'react';

const BoardgameForm = ({ boardgame }) => {
  const options = [1, 2, 3, 4, 5];

  if (boardgame === undefined) {
    boardgame = {};
  }

  return (
    <form>
      <div className="row">
        <label className="col-md-3" htmlFor="title">Title</label>
        <div className="field col-md-4">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Boardgame Title"
            value={boardgame.title}
          />
        </div>
      </div>
      <div className="row">
        <label className="col-md-3" htmlFor="numberOfPlayers">Number of Players</label>
        <div className="field col-md-4">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Number of Players"
            value={boardgame.numberOfPlayers}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-3" htmlFor="score">Rate this game</label>
        <div className="field col-md-2">
          <select
            name="score"
            value={boardgame.score}
            className="form-control"
          >
            {options.map(o => {
              return <option key={o} value={o}>{o}</option>;
                })}
          </select>
        </div>
      </div>
    </form>
  );
};

BoardgameForm.propTypes = {
  boardgame: PropTypes.object
};

export default BoardgameForm;