import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Footer } from './Footer';
import { Header } from './Header';
import SummarizedPost from './SummarizedPost';
import SideBar from './SideBar';
import moreArticles from '../selectors/moreArticles';
import dateFormatter from '../tools/dateFormatter';

export class ArticlePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            html: this.props.post.body.replace(/^"(.*)"$/, '$1')
        }
    } 
    componentDidMount() {
        window.scroll(0, 0);

        // Selects this the body element of this component and assign the HTML value of the post to that element.
        const body = ReactDOM.findDOMNode(this).getElementsByClassName('article__body')[0];
        body.innerHTML = this.state.html;
    }
    componentDidUpdate() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <div className="article-page">
                <Header />
                    <article className="article">
                        <h2 className="article__title">{this.props.post.title.toUpperCase()}</h2>
                        <p className="article__date">{dateFormatter(this.props.post.postDate.day, this.props.post.postDate.month, this.props.post.postDate.year)}</p>
                        {this.props.post.postPicture && <img className="article__image" src={this.props.post.postPicture} alt={this.props.post.postPictureName}/>}
                        <div className="article__body" />

                        <div className='share-buttons'>
                            <a className="share-buttons__share-button" href={`http://facebook.com/sharer.php?u=https%3A%2F%2Fblog.reanewell.com/posts/${this.props.post.title.replace(/ /g, "-")}`}>Facebook</a>
                            <a className="share-buttons__share-button" href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fblog.reanewell.com/${this.props.post.title.replace(/ /g, "-")}`}>Twitter</a>
                            <a className="share-buttons__share-button" href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.reanewell.com/${this.props.post.title.replace(/ /g, "-")}&title=${this.props.post.title}`}>LinkedIn</a>
                        </div>

                        <h2 className='article__header'>More Articles</h2>
                        {this.props.moreArticles.map((post) => (
                            <SummarizedPost 
                                key = {post.id}
                                title = {post.title}
                                imageName = {post.postPictureName}
                                imagePath = {post.postPicture}
                                date = {post.postDate}
                            />
                        ))}
                    </article>
                <SideBar />
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    const post = state.posts.find((post) => post.title === props.match.params.title.replace(/-/g, ' '));

    return ({
        post,
        moreArticles: moreArticles(state.posts, post.id, post.category)
    })
};

export default connect(mapStateToProps)(ArticlePage);