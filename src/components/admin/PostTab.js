import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemovePost } from '../../actions/posts';

class PostTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            warning: false
        }
    }
    openWarning = () => {
        this.setState(() => ({ warning: true }));
    }
    closeWarning = () => {
        this.setState(() => ({ warning: false }));
    }
    removePost = (id, image) => {
        this.props.startRemovePost(id, image);
    }
    render() {
        return (
            <div className="post-tab">
                <h3 className="post-tab__title">{this.props.post.title}</h3>
                <p className="post-tab__date">{this.props.post.postDate.month}/{this.props.post.postDate.day}/{this.props.post.postDate.year}</p>
                <Link className="post-tab__button--view" to={`/posts/${this.props.post.title}`}>View Post</Link>
                <Link className="post-tab__button--edit" to={`/admin/edit-posts/${this.props.post.title}`}>Edit Post</Link>
                {/* <button className="post-tab__button--delete" onClick={this.openWarning}>Delete Post</button>
                {this.state.warning && 
                    <div className="warning">
                        <p>Are you sure?</p>
                        <p className="post-tab__button" onClick={this.removePost(this.props.post.id, this.props.post.postPictureName)}>Yes</p>
                        <p className="post-tab__button" onClick={this.closeWarning}>No</p>
                    </div>
                } */}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startRemovePost: (id, image) => dispatch(startRemovePost(id, image))
})

export default connect(undefined, mapDispatchToProps)(PostTab);