const moduleName = "posts";
const GET_POSTS = `${moduleName}/GET_POSTS`;
const defaultState = {
    posts: [],
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            return { ...state, posts: payload.data }
        default: 
        return state;
    }
}