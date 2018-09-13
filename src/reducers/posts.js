const defaultPostsReducerState = [];

export default (state = defaultPostsReducerState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return state.concat({ ...action.post });
        case "REMOVE_POST":
            return state.filter((post) => post.id !== action.id);
        case "SET_POSTS":
            return action.posts;
        default:
            return state;
    }
}