import { createStore, combineReducers } from 'redux';

const mathReducer = (state = {
        count: 99,
    }, action) => {

    console.log('mathReducer running', action)
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 })
        case 'DECREMENT':
            return Object.assign({}, state, { count: state.count - 1 })

        default:
            break;
    }
    return state;
};
const userReducer = (state = {
        username: '-no one-'
    }, action) => {
    console.log('userReducer running', action)
    switch (action.type) {
        case 'CHANGE_USER':
            return Object.assign({}, state, { username: 'OFIR THE KING!' })

        default:
            break;
    }
    return state;
};

const store = createStore(combineReducers({mathReducer, userReducer}));

export default store;