import React from 'react';
import { Link } from 'react-router-dom';
import dateFormatter from '../tools/dateFormatter';

class SummarizedPost extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Link to={`/posts/${this.props.title.replace(" ", "-")}`}>
                    <div className="summarized-post" >
                        { this.props.imagePath && <img className="summarized-post__image" src={this.props.imagePath} alt={this.props.imageName}/>}
                        <h2 className="summarized-post__title">{this.props.title}</h2>
                        <p className="summarized-post__date">{dateFormatter(this.props.date.day, this.props.date.month, this.props.date.year)}</p>
                    </div>
                </Link>
        )
    }
}

export default SummarizedPost;