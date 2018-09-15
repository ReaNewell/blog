export default (posts) => {
    let categories = [];
    posts.forEach(post => {
        post.categories.forEach(category => {
            if (!categories.includes(category)) {
                categories.push(category);
            }
        })
    })
    return categories;
};