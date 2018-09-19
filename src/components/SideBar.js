import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import categoriesSelector from '../selectors/categories';

export class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <h3 className="sidebar__heading">Find me online!</h3>
                <a className="social-media" href="https://www.reanewell.com" target="_blank"><img src="/images/portfolio.png" alt="My Portfolio"/></a>
                <a className="social-media" href="https://instagram.com/rea.webdev" target="_blank"><img src="/images/instagram.jpg" alt="instagram logo"/></a>
                <a className="social-media" href="https://codepen.io/reanewell/" target="_blank"><img src="/images/codepen.png" alt="codepen logo"/></a>
                <a className="social-media" href="https://twitter.com/ReaNewell" target="_blank"><img src="/images/twitter.jpg" alt="twitter logo"/></a>
                <hr />
                <h3 className='sidebar__heading--green'>Categories</h3>
                { this.props.categories.map((category, index) => (
                    <Link
                        className='sidebar__category'
                        key={index}
                        to={`/categories/${category}`}
                    >{category}</Link>
                ))}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    categories: categoriesSelector(state.posts)
})

export default connect(mapStateToProps)(SideBar);