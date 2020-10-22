import {FETCH_USERS} from "../types";

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch(action.types) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.data
            };
        default:
            return state;
    }
}