import React from 'react';
import { connect } from 'react-redux';
import SummarizedPost from './SummarizedPost';
import sortReverseChronological from '../selectors/sortReverseChronological';

class RecentPosts extends React.Component {
    render() {
        return (
            <div className="recent-posts">
                <h2 className="recent-posts__title">Recent Articles</h2>
                {sortReverseChronological(this.props.posts).map((post) => (
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
const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps)(RecentPosts);