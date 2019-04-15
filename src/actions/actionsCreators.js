const coursesUrl = `http://localhost:3001/courses`;
const authorsUrl = `http://localhost:3001/authors`;

export function addCourse(title, authorId, category) {
    return {
        type: 'ADD_COURSE',
        title,
        authorId,
        category
    };
}

export function updateCourse(id, title, authorId, category) {
    return {
        type: 'UPDATE_COURSE',
        id,
        title,
        authorId,
        category
    };
}

export function deleteCourse(id) {
    return {
        type: 'DELETE_COURSE',
        id
    };
}


function loadAllCourse(courseList) {
    return {
        type: 'LOAD_ALL_COURSES',
        courseList
    };
}

function loadAllAuthors(authorsList) {
    return {
        type: 'LOAD_ALL_AUTHORS',
        authorsList
    };
}

function fetchData(url) {
    return fetch(url).then(res => res.json());
}


export function getAllCourses() {
    return function(dispatch) {
        return fetchData(coursesUrl).then(
            (courseList) => dispatch(loadAllCourse(courseList)),
            (error) => console.log(error)
        );
    };
}

export function getAllAuthors() {
    return function(dispatch) {
        return fetchData(authorsUrl).then(
            (authorsList) => dispatch(loadAllAuthors(authorsList)),
            (error) => console.log(error)
        );
    };
}
