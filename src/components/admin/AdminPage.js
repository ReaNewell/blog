import React from 'react';
import AdminSideBar from './AdminSideBar';
import PostEditor from './PostEditor';

class AdminPage extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <AdminSideBar path='create'/>
                <div className="admin-page">
                    <h1 className="admin-page__title">Admin Page</h1>
                    <h2 className="admin-page__subtitle">Create A Post</h2>
                    <PostEditor />
                </div>
            </div>
        )
    }
}

export default AdminPage;