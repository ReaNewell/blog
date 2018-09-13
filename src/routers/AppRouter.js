import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import AdminLogin from '../components/admin/AdminLogin';
import AdminPage from '../components/admin/AdminPage';
import ArticlePage from '../components/ArticlePage';
import EditPostPage from '../components/admin/EditPostPage';
import HomePage from '../components/HomePage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/posts/:title" component={ArticlePage}/>
                <PublicRoute path="/admin-login" component={AdminLogin}/>
                <PrivateRoute path="/admin" component={AdminPage} exact={true}/>
                <PrivateRoute path="/admin/edit-posts" component={EditPostPage} exact={true}/>
            </Switch>
        </div>
    </Router>
);

export default (AppRouter);