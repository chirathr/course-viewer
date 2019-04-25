import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../Api';
import {
    addAuthorsToState,
    errorFetchingData,
    clearError
} from '../actions/index';


function *fetchAuthors(action) {
    try {
        const authors = yield call(api.getAllAuthors);
        yield put(addAuthorsToState(authors));
        yield put(clearError());
    } catch(e) {
        yield put(errorFetchingData());
    }
}


function* authorSaga() {
    yield takeEvery("AUTHORS_FETCH_REQUESTED", fetchAuthors);
}

export default authorSaga;
