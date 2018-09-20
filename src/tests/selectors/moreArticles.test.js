import moreArticles from '../../selectors/moreArticles';
import posts from '../fixtures/posts';

test('should return array of up to three recent articles, excluding the currently selected', () => {
    const category = posts[1].categories[1];
    const id = posts[1].id;
    const moreArticlesList = moreArticles(posts, id, category);

    expect(moreArticlesList).toEqual([posts[0], posts[2], posts[3]]);
});