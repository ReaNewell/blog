import React from 'react';
import { Link } from 'react-router-dom';
import dateFormatter from '../tools/dateFormatter';

export class SummarizedPost extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Link to={`/posts/${this.props.post.title.replace(/ /g, "-")}`}>
                    <div className="summarized-post" >
                        { this.props.post.imagePath && <img className="summarized-post__image" src={this.props.post.imagePath} alt={this.props.post.imageName}/>}
                        <h2 className="summarized-post__title">{this.props.post.title}</h2>
                        <p className="summarized-post__date">{`Posted ${dateFormatter(this.props.post.postDate.day, this.props.post.postDate.month, this.props.post.postDate.year)}`}</p>
                    </div>
                </Link>
        )
    }
}

export default SummarizedPost;