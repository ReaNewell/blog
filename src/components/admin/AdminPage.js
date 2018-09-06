import React from 'react';
import AdminSideBar from './AdminSideBar';
import PostEditor from './PostEditor';

class AdminPage extends React.Component {
    render() {
        return (
            <div>
                <AdminSideBar />
                <div>
                    <h1>Admin Page</h1>
                    <PostEditor />
                </div>
            </div>
        )
    }
}

export default AdminPage;