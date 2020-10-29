import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from "./page/homePage";
import UsersListPage from './page/usersListPage';

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
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users'
    }
];