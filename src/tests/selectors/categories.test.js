import categories from '../../selectors/categories';
import posts from '../fixtures/posts';

test('should list all categories from posts in an array', () => {
    const categoriesList = categories(posts);
    expect(categoriesList).toEqual(['css', 'html', 'javascript', 'react', 'ruby', 'python']);
});