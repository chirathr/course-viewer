export default function courses(state=[], action) {
    switch(action.type) {
        case 'LOAD_ALL_COURSES':
            if (action.courseList === undefined)
                return state;
            return [...action.courseList];
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
