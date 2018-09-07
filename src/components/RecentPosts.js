import React from 'react';
import { connect } from 'react-redux';
import SummarizedPost from './SummarizedPost';

class RecentPosts extends React.Component {
    render() {
        return (
            this.props.posts.map((post) => (
                <SummarizedPost 
                    key = {post.id}
                    title = {post.title}
                    body = {post.body}
                    date = {post.postDate}
                />
            ))
        )
    }
}
const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps)(RecentPosts);