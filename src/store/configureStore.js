import { createStore } from 'redux';
import rootReducer from '../reducers';

import boardgames from '../data/boardgames';

const defaultState = {
    boardgames
};

const store = createStore(rootReducer, defaultState);

export default store;