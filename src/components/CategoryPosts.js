import React from 'react';
import SummarizedPost from './SummarizedPost';
import sortReverseChronological from '../selectors/sortReverseChronological';

export const CategoryPosts = (props) => (
    <div className="recent-posts">
        <h2 className="recent-posts__title">{`Articles Related To ${props.category}`}</h2>
        {sortReverseChronological(props.posts).map((post) => (
            <SummarizedPost 
                key = {post.id}
                post= {post}
            />
        ))}
    </div>
)


export default CategoryPosts;