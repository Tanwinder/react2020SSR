import axios from 'axios';
import {FETCH_USERS, CURRENT_FETCH_USER} from '../types';

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

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');
    console.log("current user----", res.data);

    dispatch({
        type: CURRENT_FETCH_USER,
        payload: res
    })
}