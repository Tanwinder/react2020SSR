// import axios from 'axios';
import {FETCH_USERS, CURRENT_FETCH_USER, FETCH_ADMINS} from '../types';

export const fetchUsers = () => async (dispatch, getState, api) => {
    //http://react-ssr-api.herokuapp.com/users/xss  to check safe from XSS attack
    //http://react-ssr-api.herokuapp.com/users for users
    const res = await api.get("/users");

    dispatch({
        type: FETCH_USERS,
        payload: res.data
    })
}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');

    dispatch({
        type: CURRENT_FETCH_USER,
        payload: res
    })
}

export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = await api.get("/admins");
    dispatch({
        type: FETCH_ADMINS,
        payload: res
    })
}