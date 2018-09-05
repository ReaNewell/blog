import React from 'react';
import { NavigationButton } from '../NavigationButton';

class AdminSideBar extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello, Rea</h3>
                <NavigationButton 
                    destination="/admin"
                    name="Create Post"
                />
                <NavigationButton 
                    destination="/admin/edit-posts"
                    name="Edit Posts"
                />
                <NavigationButton 
                    destination="/admin/settings"
                    name="Settings"
                />
            </div>
        )
    }
}

export default AdminSideBar;