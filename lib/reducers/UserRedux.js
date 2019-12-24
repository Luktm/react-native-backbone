
import { USER_DATA } from '../actions/types';

const INITIAL_STATE = {
    userData: {'abc': 'abc'}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DATA:
            return { ...state, userData: action.payload };
        default:
            return state;
        // case USER_WHAT: 
        //     return {...state, ...}
    }
}