import axios from 'axios';
import {FETCH_USERS} from '../types';

export const fetchUsers = () => async (dispatch, getState, api) => {
    //http://react-ssr-api.herokuapp.com/users/xss  to check safe from XSS attack
    //http://react-ssr-api.herokuapp.com/users for users
    const res = await api.get("/users");

    console.log("response", res)

    dispatch({
        type: FETCH_USERS,
        payload: res.data
    })
}