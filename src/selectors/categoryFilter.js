// Returns array of posts that include a category provided.

export default (posts, category) => {
    let filteredPosts = [];
    posts.forEach(post => {
        if (post.categories.includes(category)) {
            filteredPosts.push(post);
        };
    });
    return filteredPosts;
};