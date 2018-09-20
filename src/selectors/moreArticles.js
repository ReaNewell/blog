import sortReverseChronological from './sortReverseChronological';

export default (posts, id, category) => {
    const articles = sortReverseChronological(posts);
    let moreArticles = [];

    if (category) {
        for (let i = 0; i<articles.length; i++) {
            if (articles[i].categories.includes(category) && (articles[i].id !== id)) {
                moreArticles.push(articles[i]);
            }
            if (moreArticles.length === 3) {
                break;
            }
        }
    }
    if (moreArticles.length < 3) {
        for (let i = 0; i<articles.length; i++) {
            if (!articles[i].categories.includes(category) && (articles[i].id !== id)) {
                moreArticles.push(articles[i]);
            } 

            if (moreArticles.length === 3) {
                break;
            }
        }
    }

    return moreArticles;
}