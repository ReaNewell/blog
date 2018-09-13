import React from 'react';
import { connect } from 'react-redux';
import { startAddPost } from '../../actions/posts';
import { init } from 'pell';
import 'pell/dist/pell.css';

class PostEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: "",
            title: "",
            html: null
        }
    };
    componentDidMount = () => {
        this.editor = init({
            element: document.getElementById('editor'),
            onChange: html => this.setState({ html }),
            actions: ['bold', 'underline', 'italic', 'heading1', 'heading2']
        })
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    submitPost = () => {
        const image = document.getElementsByClassName('post-editor__image-input')[0].files[0];

        if (!this.state.html || !this.state.title) {
            this.setState(() => ({ error: "You must have a title and body."}));
        } else {
            this.setState(() => ({ error: ""}));
            this.props.startAddPost({
                title: this.state.title,
                body: this.state.html
            }, image);
            this.setState(() => ({ title: ""}));
            this.setState(() => ({ html: ""}));
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
                    type='file'/>
                <button className="post-editor__button" onClick={this.submitPost}>Submit Post</button>
            </div>
        )
    };
}
const mapDispatchToProps = (dispatch) => ({
    startAddPost: (postInfo, image) => dispatch(startAddPost(postInfo, image))
});

export default connect(undefined, mapDispatchToProps)(PostEditor);