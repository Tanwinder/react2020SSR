import React from 'react';
import {renderRoutes} from 'react-router-config'
import Header from './components/Header';
import {fetchCurrentUser} from './actions/userActions'

const App = ({route}) => {
    return(
        <div>
            <Header />
            <div className="container">
            {renderRoutes(route.routes)}
            </div>
        </div>
    )
}

const loadData = ({dispatch}) => {
    return dispatch(fetchCurrentUser())
}

export default {
    loadData,
    component: App
}
