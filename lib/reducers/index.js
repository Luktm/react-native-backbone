import {combineReducers} from 'redux';
import UserRedux from './UserRedux';

export default combineReducers({
    userSettings: UserRedux,
    
})