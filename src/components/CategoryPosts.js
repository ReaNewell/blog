import React from 'react';
import SummarizedPost from './SummarizedPost';
import sortReverseChronological from '../selectors/sortReverseChronological';

export class CategoryPosts extends React.Component {
    render() {
        return (
            <div className="recent-posts">
                <h2 className="recent-posts__title">{`Articles Related To ${this.props.category}`}</h2>
                {sortReverseChronological(this.props.posts).map((post) => (
                    <SummarizedPost 
                        key = {post.id}
                        post= {post}
                    />
                ))}
            </div>
        )
    }
}

export default CategoryPosts;