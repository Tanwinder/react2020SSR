import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from "react-router-dom";
import { createStore, applyMiddleware} from "redux";
import Thunk from "redux-thunk"
import {Provider} from"react-redux";

import Routes from './Routes';
import reducers from './reducers'
import {renderRoutes} from 'react-router-config'

const store = createStore(
    reducers,
    window.INITIAL_STATE || {},
    applyMiddleware(Thunk)
);

ReactDOM.hydrate(
    <Provider store={store} >
        <BrowserRouter>
            {/* <Routes /> */}
            <div>
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById("root"))