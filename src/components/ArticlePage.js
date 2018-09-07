import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Footer } from './Footer';
import { Header } from './Header';
import SideBar from './SideBar';

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            html: this.props.post.body.replace(/^"(.*)"$/, '$1'),
        }
    } 
    componentDidMount() {
        // Selects this the body element of this component and assign the HTML value of the post to that element.
        const body = ReactDOM.findDOMNode(this).getElementsByClassName('post__body')[0];
        body.innerHTML = this.state.html;
    }
    render() {
        return (
            <div>
                <Header />
                <h2>{this.props.post.title}</h2>
                <div className="post__body" />
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