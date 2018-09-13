import React from 'react';

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <a href="https://instagram.com/rea.webdev">Instagram</a>
                <a href="">Twitter</a>
                <a href="">CodePen</a>
                <a className="navigation-button" href="https://www.reanewell.com" target="_blank">Portfolio</a>
            </div>
        )
    }
}

export default SideBar;