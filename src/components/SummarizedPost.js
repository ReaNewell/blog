import React from 'react';

class SummarizedPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shortenedPost: ""
        }
    }
    componentDidMount = () => {
        const shortenedPost = this.props.body.substring(0, 400).concat("...");
        this.setState(() => ({ shortenedPost }))
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.state.shortenedPost}</p>
            </div>
        )
    }
}

export default SummarizedPost;