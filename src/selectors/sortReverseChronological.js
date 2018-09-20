export default (posts) => {
    return posts.slice(0).sort((a, b) => {
        if (a.postDate.year < b.postDate.year) {
            return 1;
        } else if (a.postDate.year > b.postDate.year) { 
            return -1;
        } else {
            if (a.postDate.month < b.postDate.month) {
                return 1;
            } else if (a.postDate.month > b.postDate.month) {
                return -1;
            } else {
                if (a.postDate.day < b.postDate.day) {
                    return 1;
                } else if (a.postDate.day > b.postDate.day) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    })
}