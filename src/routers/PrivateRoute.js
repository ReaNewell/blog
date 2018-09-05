import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? ( 
            <div>
                
            </div>
        ) : (
            <Redirect to='/' />
        )
    )}/>
);

export default (PrivateRoute);