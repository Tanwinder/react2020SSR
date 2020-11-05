import {CURRENT_FETCH_USER} from '../types';

export default (state= null, action) => {
    switch(action.type) {
        case CURRENT_FETCH_USER:
            return action.payload.data || false;
        default:
            return state;
    }
}