import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

import HomePage from '../components/HomePage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
            </Switch>
        </div>
    </Router>
);

export default (AppRouter);