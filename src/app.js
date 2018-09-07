import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { auth } from './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { LoadingPage } from './components/LoadingPage';
import { startSetPosts } from './actions/posts';
import { login, logout, startLogin } from './actions/auth';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

auth.onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetPosts()).then(() => {
            renderApp();
        });
    } else  {
        store.dispatch(logout());
        store.dispatch(startSetPosts()).then(() => {
            renderApp();
        });
    }
})