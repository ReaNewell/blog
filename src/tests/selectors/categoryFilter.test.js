import categoryFilter from '../../selectors/categoryFilter';
import posts from '../fixtures/posts';

test('should return array of posts that include a specific category', () => {
    const category = 'css';
    const filteredPosts = categoryFilter(posts, category);
    expect(filteredPosts).toEqual([posts[0]]);
});