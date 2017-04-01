import * as types from './actionTypes';
import boardgameApi from '../api/mockBoardgameApi';

export function createGame(boardgame) {
    return { type: types.CREATE_GAME, boardgame };
}

export function loadBoardgames() {
    return function(dispatch) {
        return boardgameApi.getAllBoardgames();
    };
}