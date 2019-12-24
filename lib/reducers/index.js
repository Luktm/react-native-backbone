import {combineReducers} from 'redux';
import UserRedux from './UserRedux';
import CounterRedux from './CounterRedux'

export default combineReducers({
    userSettings: UserRedux,
    counterSettings: CounterRedux,
})