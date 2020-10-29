import axios from 'axios';
import {FETCH_USERS} from '../types';

export const fetchUsers = () => async dispatch => {
    //http://react-ssr-api.herokuapp.com/users/xss  to check safe from XSS attack
    const res = await axios.get("http://react-ssr-api.herokuapp.com/users");

    console.log("response", res)

    dispatch({
        type: FETCH_USERS,
        payload: res.data
    })
}