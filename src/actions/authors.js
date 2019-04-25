import { AUTHORS_FETCH_REQUESTED, LOAD_ALL_AUTHORS } from './constants';



export function addAuthorsToState(authorsList) {
    return {
        type: LOAD_ALL_AUTHORS,
        authorsList
    };
}

export function getAllAuthors() {
    return {
        type: AUTHORS_FETCH_REQUESTED
    };
}
