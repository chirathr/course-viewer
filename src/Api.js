const coursesUrl = `http://localhost:3001/courses/`;
const authorsUrl = `http://localhost:3001/authors/`;


function fetchData(url) {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw response;
        }
        return response.json()
    }).catch(error => {
        throw error;
    });
}

function postData(url, data, method="POST") {
    return fetch(url, {
        method: method,
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    }).catch(error => {
        throw error;
    });
}

function getAllCourses() {
    return fetchData(coursesUrl).then(
        courseList => courseList
    ).catch(error => {
        throw error;
    });
}

function getAllAuthors() {
    return fetchData(authorsUrl).then(
        authorsList => authorsList
    ).catch(error => {
        throw error;
    });
}

function addCourse(data) {
    return postData(coursesUrl, data).then(
        course => course
    ).catch(error => {
        throw error;
    });
}

function updateCourse(id, data) {
    return postData(coursesUrl + id, data, "PUT").then(
        course => course,
    ).catch(error => {
        throw error;
    });
}

function deleteCourse(id) {
    return postData(coursesUrl + id, {}, "DELETE").then(
        res => res
    ).catch(error => {
        throw error;
    })
}


export default {
    getAllCourses,
    getAllAuthors,
    addCourse,
    updateCourse,
    deleteCourse
};
