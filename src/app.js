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
import { addPost } from './actions/posts';
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

store.dispatch(startLogin('patrick.r.newell@gmail.com', 'Rearea755!'));
const body = "In my view, CSS art can be described by drawings or pictures made purely from HTML and CSS code. Shaping, coloring, and animating elements to form a recognizable image can help new developers open their mind to a world outside of the box. I find this to be the most fun of the techniques I will share with you today. I encourage you to look up some examples of CSS art to see what can be made using only your cascading style sheets. Check out this article from Alison Spittel. There are some great tips and projects in there about pure CSS. When I approach making a picture, I try to imagine an object and the shapes that compose it. I like designs that are smooth and simple, so I try to take that object and simplify it down to just straight lines, namely boxes. From here, I will add curves and angles to make the object more recognizable. If you want to try this out now, open up your editor a try to make a smiley face using only div elements and CSS. This will be a great start for your CSS art projects."
store.dispatch(addPost("CSS Tips", body));

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

auth.onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        renderApp();
    } else  {
        store.dispatch(logout());
        renderApp();
    }
})