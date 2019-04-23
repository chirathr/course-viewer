const coursesUrl = `http://localhost:3001/courses/`;
const authorsUrl = `http://localhost:3001/authors/`;


function fetchData(url) {
    return fetch(url).then(res => res.json());
}

function postData(url, data, method="POST") {
    return fetch(url, {
        method: method,
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json());
}

function getAllCourses() {
    return fetchData(coursesUrl).then(
        courseList => courseList,
        error => error
    );
}

function getAllAuthors() {
    return fetchData(authorsUrl).then(
        authorsList => authorsList,
        error => error
    );
}

function addCourse(data) {
    return postData(coursesUrl, data).then(
        course => course,
        error => error
    );
}

function updateCourse(id, data) {
    return postData(coursesUrl + id, data, "PUT").then(
        course => course,
        error => error
    );
}

function deleteCourse(id) {
    return postData(coursesUrl + id, {}, "DELETE").then(
        res => res,
        error => error
    );
}


export default {
    getAllCourses,
    getAllAuthors,
    addCourse,
    updateCourse,
    deleteCourse
};
