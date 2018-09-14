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
    closeWarning = () => {
        this.setState(() => ({ warning: false }));
    }
    showWarning = () => {
        this.setState(() => ({ warning: true }));
    }
    removePost = (id, image) => {
        this.props.startRemovePost(id, image);
    }
    render() {
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.postDate.month}/{this.props.post.postDate.day}/{this.props.post.postDate.year}</p>
                <Link to={`/admin/edit-posts/${this.props.post.title}`}>Edit Post</Link>
                {this.state.warning ? (
                    <div>
                        <p>Are you sure?</p>
                        <button onClick={this.removePost(this.props.post.id, this.props.post.postPictureName)}>
                            Yes
                        </button>
                        <button onClick={this.closeWarning}>No</button>
                    </div>
                ) : (
                    <button onClick={this.showWarning}>Delete Post</button>
                )}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startRemovePost: (id, image) => dispatch(startRemovePost(id, image))
})

export default connect(undefined, mapDispatchToProps)(PostTab);