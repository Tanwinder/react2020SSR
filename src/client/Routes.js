import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from "./page/homePage";
import UsersListPage from './page/usersListPage';
import App from './App';
import AdminPage from './page/adminPage'
import NotFoundPage from './page/notFoundPage';

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/users" component={UsersList} />
//         </div>
//     )
// }

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...AdminPage,
                path: '/admins'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]

// export default [
//     {
//         ...HomePage,
//         path: '/',
//         exact: true
//     },
//     {
//         ...UsersListPage,
//         path: '/users'
//     }
// ];