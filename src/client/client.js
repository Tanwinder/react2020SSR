import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from "react-router-dom";
import { createStore, applyMiddleware} from "redux";
import Thunk from "redux-thunk"
import {Provider} from"react-redux";

import Routes from './Routes';
import Reducers from './reducers'

const store = createStore(Reducers, {}, applyMiddleware(Thunk));

ReactDOM.hydrate(
    <Provider store={store} >
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>, document.getElementById("root"))