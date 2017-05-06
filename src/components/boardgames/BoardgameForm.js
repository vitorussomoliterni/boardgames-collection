import React from 'react';
import PropTypes from 'prop-types';

const BoardgameForm = ({ boardgame, onChange }) => {
  const options = [1, 2, 3, 4, 5];

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
            defaultValue={boardgame.title}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="row">
        <label className="col-md-3" htmlFor="numberOfPlayers">Number of Players</label>
        <div className="field col-md-4">
          <input
            type="text"
            name="numberOfPlayers"
            className="form-control"
            placeholder="Number of Players"
            defaultValue={boardgame.numberOfPlayers}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-md-3" htmlFor="score">Rate this game</label>
        <div className="field col-md-2">
          <select
            name="score"
            className="form-control"
            defaultValue={boardgame.score}
            onChange={onChange}
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
  boardgame: PropTypes.object,
  onChange: PropTypes.func.isRequired
};

export default BoardgameForm;