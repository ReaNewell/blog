import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, component: Component, hasProfileInfo, ...rest }) => (
    <Route {...rest} component={(props) => (
        <div>
            <Component {...props} />
        </div>
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
    hasProfileInfo: !!state.profileInfo
});

export default connect(mapStateToProps)(PublicRoute);