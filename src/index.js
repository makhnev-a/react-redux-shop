import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from "history";
import {ConnectedRouter, routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import createRootReducer from './reducers';
import {Provider} from "react-redux";
import routes from './routes';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/*<Layout/>*/}
            {routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);