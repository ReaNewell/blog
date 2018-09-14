import React from 'react';
import { Link } from 'react-router-dom';

class AdminSideBar extends React.Component {
    render() {
        return (
            <div className="admin-sidebar">
                <h3 className="admin-sidebar__welcome">Hello, Rea</h3>
                <Link className="admin-sidebar__button" to="/admin">Create Post</Link>
                <Link className="admin-sidebar__button" to="/admin/edit-posts">Edit Posts</Link>
                <Link className="admin-sidebar__button" to="/admin/settings">Settings</Link>
                <button className="admin-sidebar__button--logout">Logout</button>
            </div>
        )
    }
}

export default AdminSideBar;