import React from 'react';
import SummarizedPost from './SummarizedPost';

class CategoryPosts extends React.Component {
    render() {
        return (
            <div className="recent-posts">
                <h2 className="recent-posts__title">{`Articles Related To ${this.props.category}`}</h2>
                {this.props.posts.map((post) => (
                    <SummarizedPost 
                        key = {post.id}
                        title = {post.title}
                        imageName = {post.postPictureName}
                        imagePath = {post.postPicture}
                        date = {post.postDate}
                    />
                ))}
            </div>
        )
    }
}

export default CategoryPosts;