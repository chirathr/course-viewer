import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const defaultState = {
    courses: [],
    authors: [],
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;
