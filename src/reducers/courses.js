export default function courses(state=[], action) {
    let index;
    switch(action.type) {
        case 'LOAD_ALL_COURSES':
            if (action.courseList === undefined)
                return state;
            return [...action.courseList];
        case 'ADD_COURSE':
            if (action.title.trim() !== '') {
                return [
                    ...state, {
                        id: action.id,
                        title: action.title,
                        authorId: action.authorId,
                        category: action.category,
                        slug: action.slug,
                    }
                ];
            }
            return state;
        case 'UPDATE_COURSE':
            index = state.findIndex(course => action.id === course.id);
            if (index === -1)
                return state;
            state = state.slice();
            state[index].title = action.title;
            state[index].authorId = action.authorId;
            state[index].category = action.category;
            state[index].slug = action.slug;
            return state;
        case 'DELETE_COURSE':
            index = state.findIndex(course => action.id === course.id);
            if (index === -1)
                return state;
            return [
                ...state.slice(0, index),
                ...state.slice(index+1)
            ];
        default:
            return state;
    }
}
