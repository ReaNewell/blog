import React from 'react';
import { Link } from 'react-router-dom';
import dateFormatter from '../tools/dateFormatter';

export const SummarizedPost = (props) => (
    <Link to={`/posts/${props.post.title.replace(/ /g, "-")}`} className="summarized-post">
            { props.post.postPicture && <img className="summarized-post__image" src={props.post.postPicture} alt={props.post.postPictureName}/>}
            <h2 className="summarized-post__title">{props.post.title}</h2>
            <p className="summarized-post__date">{`Posted ${dateFormatter(props.post.postDate.day, props.post.postDate.month, props.post.postDate.year)}`}</p>
    </Link>
);

export default SummarizedPost;