export default function courses(state=[], action) {
    switch(action.type) {
        case 'ADD_COURSE':
            if (action.courseName.trim() !== '') {
                return [
                    ...state,
                    action.courseName
                ];
            }
            return state;
        default:
            return state;
    }
}
