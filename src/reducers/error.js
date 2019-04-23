export default function error(state='', action) {
    switch(action.type) {
        case 'ERROR_FETCHING_DATA':
            return 'Server, please try again!';
        case 'CLEAR_ERROR':
            return '';
        default:
            return state;
    }
}
