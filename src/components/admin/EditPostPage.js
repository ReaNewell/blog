import React from 'react';
import { connect } from 'react-redux';
import AdminSideBar from './AdminSideBar';
import PostEditor from './PostEditor';
import PostTab from './PostTab';

export class EditPostPage extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <AdminSideBar path="edit"/>
                { this.props.currentPost ? (
                    <div>
                        <h1>Edit Posts</h1>
                        <h2>Make changes to article, then save.</h2>
                        <PostEditor 
                            history = {this.props.history} 
                            post={this.props.currentPost}
                            updating={true}
                        />
                    </div>
                ) : (
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
                )}
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    currentPost: props.match.params.title ? state.posts.find((post) => post.title === props.match.params.title.replace('-', ' ')) : null,
    posts: state.posts
})

export default connect(mapStateToProps)(EditPostPage);