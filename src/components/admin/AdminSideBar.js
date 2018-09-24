import React from 'react';
import { Link } from 'react-router-dom';

export class AdminSideBar extends React.Component {
    chooseActiveButton = (buttonPath) => {
        return this.props.path == buttonPath ? "admin-sidebar__button--active" : "admin-sidebar__button";
    }
    render() {
        return (
            <div className="admin-sidebar">
                <h3 className="admin-sidebar__welcome">Hello, Rea</h3>
                <Link className={this.chooseActiveButton('create')} to="/admin">Create Post</Link>
                <Link className={this.chooseActiveButton('edit')} to="/admin/edit-posts">Edit Posts</Link>
                <Link className={this.chooseActiveButton('settings')} to="/admin/settings">Settings</Link>
                <button className="admin-sidebar__button--logout">Logout</button>
            </div>
        )
    }
}

export default AdminSideBar;