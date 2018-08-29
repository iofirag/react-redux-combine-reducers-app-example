import { createStore, combineReducers } from 'redux';
import mathReducer from '../reducers/mathReducer';
import userReducer from '../reducers/userReducer';


const store = createStore(combineReducers({mathReducer, userReducer}));

export default store;