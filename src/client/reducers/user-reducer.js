import {FETCH_USERS} from "../types";

const initialState = {
    usersList: []
}

export default (state = initialState, action) => {
    switch(action.types) {
        case FETCH_USERS:
            console.log("state", state);
            return {
                ...state,
                usersList: action.data
            };
        default:
            return state;
    }
}