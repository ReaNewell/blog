import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';

export const addPost = ({id, title, body, postDate}) => ({
    type: "ADD_POST",
    post: {
        id,
        title,
        body,
        postDate
    }
});
export const startAddPost = (postData = {}) => {
    return (dispatch) => {
        const {
            title = "",
            body = "",
            postDate = {
                day: new Date().getDate(),
                month: new Date().getMonth(),
                year: new Date().getFullYear()
            }
        } = postData;
        const post = { title, body, postDate };

        return database.ref(`posts`).push(post).then((ref) => {
            dispatch(addPost({
                id: ref.key,
                ...post
            }));
        })
    }
}

export const setPosts = (posts) => ({
    type: "SET_POSTS",
    posts
});
export const startSetPosts = () => {
    return (dispatch) => {
        return database.ref(`posts`).once('value').then((snapshot) => {
            let posts = [];

            snapshot.forEach((childSnapshot) => {
                posts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setPosts(posts));
        });
    };
};