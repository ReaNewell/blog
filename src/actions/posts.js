// Actions related to CRUD operations on posts.

import database from '../firebase/firebase';
import { firebase, storage } from '../firebase/firebase';

// ADD POST
export const addPost = ({id, title, body, postDate, categories}) => ({
    type: "ADD_POST",
    post: {
        id,
        title,
        body,
        postDate,
        categories
    }
});
export const startAddPost = (postData = {}, image) => async (dispatch) => {
    let currentPost;
    const {
        title = "",
        body = "",
        postDate = {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        },
        categories = []
    } = postData;
    const post = { title, body, postDate, categories };

    // Reference the posts array in database and push post to the end of the array.
    // If an image paramater exists, store the image and set the link and image name properties on the related post object.
    const ref = await database.ref(`posts`).push(post);
    await (() => {
        dispatch(addPost({ id: ref.key, ...post }));
        currentPost = ref.key;
    })();

    if (image) {
        const fileName = image.name;
        const storageRef = storage.ref(`blogPictures/${fileName}`);
        const uploadTask = storageRef.put(image);
        let downloadURL;

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
            }, function(error) {

            }, function() {
                // Upload completed successfully, now we can get the download URL
                console.log('Upload complete.')
                downloadURL = uploadTask.snapshot.downloadURL;
                return database.ref(`posts/${currentPost}`).update({ 
                    postPicture: downloadURL,
                    postPictureName: fileName
                })
            });
    }
}


// REMOVE POSTS
export const removePost = (id) => ({
    type: "REMOVE_POST",
    id
});
export const startRemovePost = (id, imageName) => async dispatch => {
        await ( () => database.ref(`posts/${id}`).remove() )();
        dispatch(removePost(id));

        if (imageName) {
            const storageRef = storage.ref(`blogPictures/${imageName}`);
            storageRef.delete().then(() => {
                console.log('Image deleted');
            }).catch((error) => {
                console.log(error);
            });
        }
};


// SET POSTS
export const setPosts = (posts) => ({
    type: "SET_POSTS",
    posts
});
export const startSetPosts = () => async dispatch => {
    // For each post in the database, add the post to an array to be sent to the Redux store. 
    const snapshot = await database.ref(`posts`).once('value');
    (() => {
        let posts = [];

        snapshot.forEach((childSnapshot) => {
            posts.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch(setPosts(posts));
    })();
};


// UPDATE POSTS
export const updatePost = (id, updates) => ({
    type: "UPDATE_POST",
    id,
    updates
});
export const startUpdatePost = (id, updates, currentPicture, picture) => async dispatch => {
    await (() => database.ref(`posts/${id}`).update({ title: updates.title, body: updates.body }))();
    dispatch(updatePost(id, updates));

    if (picture) {
        const fileName = picture.name;
        const storageRef = storage.ref(`/blogPictures/${fileName}`);
        const uploadTask = storageRef.put(picture);
        let downloadURL;

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
        }, function(error) {

        }, async function() {
            // Upload completed successfully, now we can get the download URL
            console.log('Upload complete.')
            downloadURL = uploadTask.snapshot.downloadURL;
            await (() => database.ref(`posts/${id}`).update({ 
                postPicture: downloadURL,
                postPictureName: fileName
            }))();
            if (currentPicture && currentPicture !== fileName) {dispatch(removePost(id));
                return storage.ref(`/blogPictures/${currentPicture}`).delete();
            }
        });
    }
}