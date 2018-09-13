import database from '../firebase/firebase';
import { firebase, storage } from '../firebase/firebase';

export const addPost = ({id, title, body, postDate}) => ({
    type: "ADD_POST",
    post: {
        id,
        title,
        body,
        postDate
    }
});
export const startAddPost = (postData = {}, image) => {
    return (dispatch) => {
        let currentPost;
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
            currentPost = ref.key;
        }).then(() => {
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
        })
    }
}

export const removePost = (id) => ({
    type: "REMOVE_POST",
    id
});
export const startRemovePost = (id, imageName) => {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(id));
        }).then(() => {
            console.log('Trying to delete image');
            console.log(imageName);
            if (imageName) {
                const storageRef = storage.ref(`blogPictures/${imageName}`);
                storageRef.delete().then(() => {
                    console.log('Image deleted');
                }).catch((error) => {
                    console.log(error);
                });
            }
        });
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