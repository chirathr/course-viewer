export default function courses(state=[], action) {
    switch(action.type) {
        case 'LOAD_ALL_COURSES':
            if (action.courseList === undefined)
                return state;
            return [...action.courseList];
        case 'ADD_COURSE':
            if (action.title.trim() !== '') {
                return [
                    ...state, {
                        title: action.title,
                        authorId: action.authorId,
                        category: action.category
                    }
                ];
            }
            return state;
        default:
            return state;
    }
}
