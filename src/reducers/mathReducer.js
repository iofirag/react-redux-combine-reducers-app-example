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

export default mathReducer;