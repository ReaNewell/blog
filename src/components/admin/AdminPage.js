import React from 'react';
import AdminSideBar from './AdminSideBar';

class AdminPage extends React.Component {
    render() {
        return (
            <div>
                <AdminSideBar />
                <div>
                    <h1>Admin Page</h1>
                </div>
            </div>
        )
    }
}

export default AdminPage;