import React from 'react';
import { connect } from 'react-redux';
import categoryFilter from '../selectors/categoryFilter';
import { Footer } from './Footer';
import { Header } from './Header';

import SideBar from './SideBar';
import CategoryPosts from './CategoryPosts';

export const CategoryPage = (props) => {
    componentDidMount = () => {
        window.scroll(0, 0);
    }
    componentDidUpdate = () => {
        window.scroll(0, 0);
    }
    return(
        <div className="homepage">
            <Header />
            <CategoryPosts 
                category={props.category}
                posts={props.posts}
            />
            <SideBar />
            <Footer />
        </div>
    )
};
const mapStateToProps = (state, props) => ({
    category: props.match.params.category,
    posts: categoryFilter(state.posts, props.match.params.category)
});

export default connect(mapStateToProps)(CategoryPage);