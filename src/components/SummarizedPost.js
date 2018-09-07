import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class SummarizedPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            html: this.props.body.replace(/^"(.*)"$/, '$1'),
            // shortenedPost: ""
        }
    } 
    componentDidMount() {
        // Selects this the body element of this component and assign the HTML value of the post to that element.
        const body = ReactDOM.findDOMNode(this).getElementsByClassName('summarizedpost__body')[0];
        body.innerHTML = this.state.html;

        // const shortenedPost = this.props.body.substring(0, 400).concat("...");
        // this.setState(() => ({ shortenedPost }))
    }
    render() {
        return (
            <Link to={`/posts/${this.props.title.replace(" ", "-")}`}>
                <h2>{this.props.title}</h2>
                <p>{this.props.date.day}/{this.props.date.month + 1}/{this.props.date.year}</p>
                <div className="summarizedpost__body"></div>
            </Link>
        )
    }
}

export default SummarizedPost;