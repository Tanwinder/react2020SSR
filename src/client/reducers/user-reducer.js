import {FETCH_USERS} from "../types";

const initialState = {
    usersList: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                usersList: action.payload
            };
        default:
            return state;
    }
}