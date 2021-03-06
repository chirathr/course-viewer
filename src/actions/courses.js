import {
    ADD_COURSE,
    UPDATE_COURSE,
    DELETE_COURSE,
    LOAD_ALL_COURSES,
    COURSES_FETCH_REQUESTED,
    COURSE_ADD_REQUESTED,
    COURSE_DELETE_REQUESTED,
    COURSE_UPDATE_REQUESTED
} from './constants';


export function addCourseToState(course) {
    return {
        type: ADD_COURSE,
        ...course
    };
}

export function updateCourseInState(course) {
    return {
        type: UPDATE_COURSE,
        ...course
    };
}

export function deleteCourseFromState(id) {
    return {
        type: DELETE_COURSE,
        id
    };
}

export function addCoursesToState(courseList) {
    return {
        type: LOAD_ALL_COURSES,
        courseList
    };
}

export function getAllCourses() {
    return {
        type: COURSES_FETCH_REQUESTED
    }
}

export function addCourse(title, authorId, category) {
    return {
        type: COURSE_ADD_REQUESTED,
        title,
        authorId,
        category
    };
}

export function deleteCourse(id) {
    return {
        type: COURSE_DELETE_REQUESTED,
        id
    };
}

export function updateCourse(id, title, authorId, category, slug) {
    return {
        type: COURSE_UPDATE_REQUESTED,
        id,
        title,
        authorId,
        category,
        slug
    };
}
