import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import AdminPage from '../components/admin/AdminPage';
import HomePage from '../components/HomePage';
import AdminLogin from '../components/admin/AdminLogin';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <PublicRoute path="/admin-login" component={AdminLogin}/>
                <PrivateRoute path="/admin" component={AdminPage}/>
            </Switch>
        </div>
    </Router>
);

export default (AppRouter);