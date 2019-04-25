import { ERROR_FETCHING_DATA, CLEAR_ERROR } from './constants';

export function errorFetchingData() {
    return {
        type: ERROR_FETCHING_DATA
    };
}

export function clearError() {
    return {
        type: CLEAR_ERROR
    };
}
