import React from 'react';
import { connect } from 'react-redux';
import { startAddPost, startUpdatePost } from '../../actions/posts';
import { init } from 'pell';
import 'pell/dist/pell.css';

class PostEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: "",
            title: this.props.post ? this.props.post.title : null,
            html: this.props.post ? this.props.post.body : null,
            updating: this.props.updating
        }
    };
    componentDidMount = () => {
        this.editor = init({
            element: document.getElementById('editor'),
            onChange: html => this.setState({ html }),
            actions: ['bold', 'underline', 'italic', 'heading1', 'heading2', 'quote', 'image', 'code']
        })
        if (this.state.updating) {
            this.editor.content.innerHTML = this.state.html;
            document.getElementsByClassName('post-editor__title-input')[0].value = this.state.title;
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    submitPost = () => {
        const newPicture = document.getElementsByClassName('post-editor__image-input')[0].files[0];

        if (this.state.updating) {
            if (!this.state.html || !this.state.title) {
                this.setState(() => ({ error: "You must have a title and body."}));
            } else {
                this.setState(() => ({ error: ""}));
                this.props.startUpdatePost(this.props.post.id, {title: this.state.title, body: this.state.html}, this.props.post.postPictureName, newPicture);
            }
        } else {
            if (!this.state.html || !this.state.title) {
                this.setState(() => ({ error: "You must have a title and body."}));
            } else {
                this.setState(() => ({ error: ""}));
                this.props.startAddPost({
                    title: this.state.title,
                    body: this.state.html
                }, newPicture);
                this.setState(() => ({ title: ""})); 
                this.setState(() => ({ html: ""}));
            }
        }
    };
    render() {
        return (
            <div className="post-editor">
                <input className="post-editor__title-input" onChange={this.onTitleChange} placeholder="Article Title" type="text"/>
                <div id="editor" className="pell" />
                <input 
                    accept='.jpg, .jpeg' 
                    className="post-editor__image-input"
                    id='image'
                    name='image'
                    type='file'
                />
                <label htmlFor='image'>Add Header Image</label>
                <button className="post-editor__button" onClick={this.submitPost}>Submit Post</button>
            </div>
        )
    };
}
const mapDispatchToProps = (dispatch) => ({
    startAddPost: (postInfo, image) => dispatch(startAddPost(postInfo, image)),
    startUpdatePost: (id, updates, currentPicture, newPicture) => dispatch(startUpdatePost(id, updates, currentPicture, newPicture))
});

export default connect(undefined, mapDispatchToProps)(PostEditor);