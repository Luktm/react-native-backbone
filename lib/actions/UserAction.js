import {USER_DATA} from './types';

export const setUserData = (props) => {
    return {
        type: USER_DATA,
        payload: props
    }
}

