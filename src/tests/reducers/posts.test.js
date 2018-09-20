import postsReducer from '../../reducers/posts';
import posts from '../fixtures/posts';

test('should set default state', () => {
    const state = postsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add a post', () => {
    const post = {
        id: posts[0].id,
        title: posts[0].title,
        body: posts[0].body,
        postDate: posts[0].postDate,
        categories: posts[0].categories
    }
    const action = { type: 'ADD_POST', post };
    const state = postsReducer(posts, action);
    expect(state).toEqual([...posts, post]);
});

test('should remove a post', () => {
    const action = { type: 'REMOVE_POST', id: posts[1].id };
    const state = postsReducer(posts, action);
    expect(state).toEqual([posts[0], posts[2], posts[3]]);
});

test('should set posts', () => {
    const action = { type: 'SET_POSTS', posts };
    const state = postsReducer(posts[1], action);
    expect(state).toEqual(posts);
});

test('should update a post', () => {
    const action = { type: 'UPDATE_POST', updates: { title: 'New Title' }, id: posts[0].id };
    const state = postsReducer(posts, action);
    expect(state[0].title).toEqual('New Title');
});