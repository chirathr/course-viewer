export default function courses(state=[], action) {
    switch(action.type) {
        case 'LOAD_ALL_AUTHORS':
            if (action.authorsList === undefined)
                return state;
            return [...action.authorsList];
        default:
            return state;
    }
}
