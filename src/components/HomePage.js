import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import RecentPosts from './RecentPosts';
import SideBar from './SideBar';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <img className="homepage__banner" src="#"/>
                <RecentPosts />
                <SideBar />
                <Footer />
            </div>
        )
    }
}

export default HomePage;