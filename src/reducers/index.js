import { combineReducers } from 'redux';
import mathReducer from './mathReducer';
import userReducer from './userReducer';

export default combineReducers({ 
    mathReducer,
    userReducer,
})