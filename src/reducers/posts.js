const defaultPostsReducerState = [];

export default (state = defaultPostsReducerState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return state.concat({ ...action.post })
        default:
            return state;
    }
}