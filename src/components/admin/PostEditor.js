import React from 'react';
import { init } from 'pell';
import 'pell/dist/pell.css';

class PostEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            html: null
        }
    }
    componentDidMount = () => {
        this.editor = init({
            element: document.getElementById('editor'),
            onChange: html => this.setState({ html }),
            actions: ['bold', 'underline', 'italic']
        })
    }
    render() {
        return (
            <div id="editor" className="pell">{this.state.html}</div>
        )
    }
}

export default PostEditor;