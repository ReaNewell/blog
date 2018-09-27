import React from 'react';
import { connect } from 'react-redux';
import SummarizedPost from './SummarizedPost';
import sortReverseChronological from '../selectors/sortReverseChronological';

export const RecentPosts = (props) => (
    <div className="recent-posts">
        <h2 className="recent-posts__title">Recent Articles</h2>
        {sortReverseChronological(props.posts).map((post) => (
            <SummarizedPost 
                key = {post.id}
                post = {post}
            />
        ))}
    </div>
);
const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps)(RecentPosts);