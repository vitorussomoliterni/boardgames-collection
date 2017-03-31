import { combineReducers } from 'redux';
import boardgames from './boardgameReducer';

const rootReducer = combineReducers({
    boardgames
});

export default rootReducer;