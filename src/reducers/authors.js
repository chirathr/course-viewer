export default function authors(state=[], action) {
    switch(action.type) {
        case 'LOAD_ALL_AUTHORS':
            return [...action.authorsList];
        default:
            return state;
    }
}
