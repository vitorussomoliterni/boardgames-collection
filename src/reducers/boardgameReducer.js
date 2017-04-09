import * as types from '../actions/actionTypes';

const initialState = {
    boardgames: [],
    boardgame: {
        title: "",
        numberOfPlayers: "",
        score: 0
    }
};

export default function boardgameReducer(state = initialState.boardgames, action) {
    switch(action.type) {
        case types.CREATE_GAME:
            return [
                ...state,
                Object.assign({}, action.title, action.numberOfPlayers, action.score)
            ];

        default:
            return state;
    }
}