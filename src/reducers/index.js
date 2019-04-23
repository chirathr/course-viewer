import { combineReducers } from 'redux';
import courses from './courses';
import authors from './authors';
import error from './error';


const rootReducer = combineReducers({
    courses,
    authors,
    error
});

export default rootReducer;
