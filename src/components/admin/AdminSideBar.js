import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

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
                <button className="admin-sidebar__button--logout" onClick={this.props.startLogout}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(AdminSideBar);