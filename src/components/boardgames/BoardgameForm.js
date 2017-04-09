import React, { PropTypes } from 'react';

const BoardgameForm = ({ boardgame }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <form>
      <label htmlFor="title">Title</label>
      <div className="field">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Boardgame Title"
          value={boardgame.title}
        />
      </div>
      <label htmlFor="numberOfPlayers">Number of Players</label>
      <div className="field">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Number of Players"
          value={boardgame.numberOfPlayers}
        />
      </div>
      <div className="form-group">
        <label htmlFor="score">Rate this game</label>
        <div className="field">
          <select
            name="score"
            value={boardgame.score}
            className="form-control"
          >
            {options.map(option => {
              return <option key={option} value={option}>option</option>;
                })}
          </select>
        </div>
</div>
    </form>
  );
};

BoardgameForm.propTypes = {
  boardgame: PropTypes.object.isRequired
};

export default BoardgameForm;