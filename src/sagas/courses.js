import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../Api';
import {
    addCourseToState,
    updateCourseInState,
    deleteCourseFromState,
    addCoursesToState,
    errorFetchingData,
    clearError
} from '../actions/index';
import {
    COURSES_FETCH_REQUESTED,
    COURSE_ADD_REQUESTED,
    COURSE_UPDATE_REQUESTED,
    COURSE_DELETE_REQUESTED
} from '../actions/constants';


function *fetchCourses(action) {
    try {
        const courseList = yield call(api.getAllCourses);
        yield put(addCoursesToState(courseList));
        yield put(clearError());
    } catch(e) {
        yield put(errorFetchingData());
    }
}

function *addCourse(action) {
    try {
        const data = {
            title: action.title,
            authorId: action.authorId,
            category: action.category
        };
        const course = yield call(api.addCourse, data);
        yield put(addCourseToState(course));
        yield put(clearError());
    } catch(e) {
        yield put(errorFetchingData());
    }
}

function *updateCourse(action) {
    try {
        const data = {
            title: action.title,
            authorId: action.authorId,
            category: action.category,
            slug: action.slug
        };
        const course = yield call(api.updateCourse, action.id, data);
        yield put(updateCourseInState(course));
        yield put(clearError());
    }
    catch(e) {
        yield put(errorFetchingData());
    }
}

function *deleteCourse(action) {
    try {
        yield call(api.deleteCourse, action.id);
        yield put(deleteCourseFromState(action.id));
        yield put(clearError());
    }
    catch(e) {
        yield put(errorFetchingData());
    }
}

function* courseSaga() {
    yield takeEvery(COURSES_FETCH_REQUESTED, fetchCourses);
    yield takeEvery(COURSE_ADD_REQUESTED, addCourse);
    yield takeEvery(COURSE_UPDATE_REQUESTED, updateCourse);
    yield takeEvery(COURSE_DELETE_REQUESTED, deleteCourse);
}

export default courseSaga;
