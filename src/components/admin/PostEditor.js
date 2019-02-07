import React from 'react';
import { connect } from 'react-redux';
import { startAddPost, startUpdatePost } from '../../actions/posts';
import { init } from 'pell';

export class PostEditor extends React.Component {
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
            actions: ['bold', 'underline', 'italic', 'heading1', 'heading2', 'quote', 'image', 'code', 'paragraph']
        })
        if (this.state.updating) {
            this.editor.content.innerHTML = this.state.html;
            document.getElementsByClassName('post-editor__title-input')[0].value = this.state.title;
        }
    }
    previewPhoto = () => {
        const imageInputElement = document.getElementById('image-label');
        let file = document.getElementsByClassName('post-editor__image-input')[0].files[0];
        let reader = new FileReader();

        reader.onloadend = function() {
            imageInputElement.style.backgroundImage = `url('${reader.result}')`;
            imageInputElement.style.border = 'none';
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    submitPost = () => {
        let newPicture

        if (document.getElementsByClassName('post-editor__image-input')[0].files[0]) {
            newPicture = document.getElementsByClassName('post-editor__image-input')[0].files[0];
        }

        if (this.state.updating) {
            if (!this.state.html || !this.state.title) {
                this.setState(() => ({ error: "You must have a title and body!"}));
            } else {
                this.setState(() => ({ error: ""}));
                this.props.startUpdatePost(this.props.post.id, {title: this.state.title, body: this.state.html}, this.props.post.postPictureName, newPicture);
            }
        } else {
            if (!this.state.html || !this.state.title) {
                this.setState(() => ({ error: "You must have a title and body!"}));
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
                <input 
                    accept='.jpg, .jpeg' 
                    className="post-editor__image-input"
                    id='image'
                    name='image'
                    onChange={this.previewPhoto}
                    type='file'
                />
                <label id='image-label' htmlFor='image'>Add Header Image</label>
                <div id="editor" className="pell" />
                <button className="post-editor__button" onClick={this.submitPost}>Submit Post</button>
                <p className='post-editor__error'>{this.state.error}</p>
            </div>
        )
    };
}
const mapDispatchToProps = (dispatch) => ({
    startAddPost: (postInfo, image) => dispatch(startAddPost(postInfo, image)),
    startUpdatePost: (id, updates, currentPicture, newPicture) => dispatch(startUpdatePost(id, updates, currentPicture, newPicture))
});

export default connect(undefined, mapDispatchToProps)(PostEditor);