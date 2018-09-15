import React from 'react';
import { connect } from 'react-redux';
import categoryFilter from '../selectors/categoryFilter';
import { Footer } from './Footer';
import { Header } from './Header';

import SideBar from './SideBar';
import CategoryPosts from './CategoryPosts';

class CategoryPage extends React.Component {
    render() {
        return(
            <div className="homepage">
                <Header />
                <CategoryPosts 
                    category={this.props.category}
                    posts={this.props.posts}
                />
                <SideBar />
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state, props) => ({
    category: props.match.params.category,
    posts: categoryFilter(state.posts, props.match.params.category)
});

export default connect(mapStateToProps)(CategoryPage);