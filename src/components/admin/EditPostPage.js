import React from 'react';
import { connect } from 'react-redux';
import AdminSideBar from './AdminSideBar';
import PostEditor from './PostEditor';
import PostTab from './PostTab';

class EditPostPage extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <AdminSideBar />
                <div className="admin-page">
                    <h1 className="admin-page__title">Edit Posts</h1>
                    <h2 className="admin-page__subtitle">Posted Articles</h2>
                    <div>
                        { this.props.posts.map( post => (
                            <PostTab 
                                key={post.id} 
                                post={post}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps)(EditPostPage);