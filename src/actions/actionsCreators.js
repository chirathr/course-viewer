export function addCourseToState(course) {
    return {
        type: 'ADD_COURSE',
        ...course
    };
}

export function updateCourseInState(course) {
    return {
        type: 'UPDATE_COURSE',
        ...course
    };
}

export function deleteCourseFromState(id) {
    return {
        type: 'DELETE_COURSE',
        id
    };
}

export function addCoursesToState(courseList) {
    return {
        type: 'LOAD_ALL_COURSES',
        courseList
    };
}

export function addAuthorsToState(authorsList) {
    return {
        type: 'LOAD_ALL_AUTHORS',
        authorsList
    };
}

export function getAllCourses() {
    return {
        type: 'COURSES_FETCH_REQUESTED'
    }
}

export function getAllAuthors() {
    return {
        type: 'AUTHORS_FETCH_REQUESTED'
    };
}

export function addCourse(title, authorId, category) {
    return {
        type: 'COURSE_ADD_REQUESTED',
        title,
        authorId,
        category
    };
}

export function deleteCourse(id) {
    return {
        type: 'COURSE_DELETE_REQUESTED',
        id
    };
}

export function updateCourse(id, title, authorId, category, slug) {
    return {
        type: 'COURSE_UPDATE_REQUESTED',
        id,
        title,
        authorId,
        category,
        slug
    };
}

export function errorFetchingData() {
    return {
        type: 'ERROR_FETCHING_DATA'
    };
}

export function clearError() {
    return {
        type: 'CLEAR_ERROR'
    };
}