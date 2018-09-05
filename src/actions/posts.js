import uuid from 'uuid';

export const addPost = (title, body) => ({
    type: "ADD_POST",
    post: {
        id: uuid(),
        title,
        body
    }
});