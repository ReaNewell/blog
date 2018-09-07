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
            actions: ['bold', 'underline', 'italic']
        })
    }
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }
    submitPost = () => {
        if (!this.state.html || !this.state.title) {
            this.setState(() => ({ error: "You must have a title and body."}));
        } else {
            this.setState(() => ({ error: ""}));
            this.props.startAddPost({
                title: this.state.title,
                body: this.state.html
            });
            this.setState(() => ({ title: ""}));
            this.setState(() => ({ html: ""}));
        }
    };
    render() {
        return (
            <div>
                <input onChange={this.onTitleChange} type="text"/>
                <div id="editor" className="pell" />
                <button onClick={this.submitPost}>Submit Post</button>
            </div>
        )
    };
}
const mapDispatchToProps = (dispatch) => ({
    startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(PostEditor);