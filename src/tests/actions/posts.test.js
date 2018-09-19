import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addPost,
    startAddPost,
    removePost,
    startRemovePost,
    setPosts,
    startSetPosts,
    updatePost,
    startUpdatePost
} from '../../actions/posts';
import posts from '../fixtures/posts';
import categories from '../fixtures/categories';
import database, { storage } from '../../firebase/firebase';

const uid = 'testinguid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const postsData = {};
    posts.forEach(({ id, title, body, postDate, categories, postPicture, postPictureName }) => {
        postsData[id] = { title, body, postDate, categories, postPicture, postPictureName };
    });
    database.ref(`/posts`).set(postsData).then(() => done());
});

// ADDING POSTS
test('should setup addPost action object with provided values', () => {
    const action = addPost(posts[1]);
    expect(action).toEqual({
        type: 'ADD_POST',
        post: {
            id: posts[1].id,
            title: posts[1].title,
            body: posts[1].body,
            postDate: posts[1].postDate,
            categories: posts[1].categories
        }
    })
});
test('should add post to database and store without picture', (done) => {
    const store = createMockStore(defaultAuthState);
    const postData = {
        title: 'All About CSS',
        body: 'This is the test post body.',
        categories: ['css'],
        postDate: {day: 2, month: 11, year: 2017}
    };

    store.dispatch(startAddPost(postData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_POST',
            post: {
                id: expect.any(String),
                ...postData
            }
        });
        return database.ref(`posts/${actions[0].post.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(postData);
        done();
    })
});
test('should add post to database and store with picture', (done) => {
    const store = createMockStore(defaultAuthState);
    const postData = {
        title: 'All About CSS',
        body: 'This is the test post body.',
        categories: ['css'],
        postDate: {day: 2, month: 11, year: 2017}
    };
    let image = new File(["foo"], "image.png");


    store.dispatch(startAddPost(postData, image)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_POST',
            post: {
                id: expect.any(String),
                ...postData
            }
        });
        return database.ref(`posts/${actions[0].post.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(postData);
        setTimeout(() => {
            done();
        }, 1000);
    });
});