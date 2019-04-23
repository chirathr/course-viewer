import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import mySaga from './sagas/index';

const defaultState = {
    courses: [],
    authors: [],
    error: ''
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

export default store;
