import axios from 'axios';
import {FETCH_USERS} from '../types';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get("http://react-ssr-api.herokuapp.com/users");

    console.log("response", res)

    dispatch({
        type: FETCH_USERS,
        data: res
    })
}