import React, { PropTypes } from 'react';
import TextInput from './../common/TextInput';

const BoardgameForm = ({ boardgame, onSave, onChange, errors }) => {
    let options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return(
        <form>
            <h1>Manage Game</h1>
            <TextInput
                name="title"
                label="Title"
                value={boardgame.title}
                onChange={onChange}
                error={errors.title} />
            <TextInput
                name="numberOfPlayers"
                label="Number of Players"
                value={boardgame.numberOfPlayers}
                onChange={onChange}
                error={errors.numberOfPlayers} />
            <div className="form-group">
                <label htmlFor="score">Rate this game</label>
                <div className="field">
                    <select
                        name="score"
                        value={boardgame.score}
                        onChange={onChange}
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
    boardgame: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
};

export default BoardgameForm;