export function addAuthorsToState(authorsList) {
    return {
        type: 'LOAD_ALL_AUTHORS',
        authorsList
    };
}

export function getAllAuthors() {
    return {
        type: 'AUTHORS_FETCH_REQUESTED'
    };
}
