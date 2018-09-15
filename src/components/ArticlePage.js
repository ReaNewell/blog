import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Footer } from './Footer';
import { Header } from './Header';
import SideBar from './SideBar';
import dateFormatter from '../tools/dateFormatter';

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            html: this.props.post.body.replace(/^"(.*)"$/, '$1'),
        }
    } 
    componentDidMount() {
        // Selects this the body element of this component and assign the HTML value of the post to that element.
        const body = ReactDOM.findDOMNode(this).getElementsByClassName('article__body')[0];
        body.innerHTML = this.state.html;
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
                    </article>
                    
                <SideBar />
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.title === props.match.params.title.replace('-', ' '))
});

export default connect(mapStateToProps)(ArticlePage);