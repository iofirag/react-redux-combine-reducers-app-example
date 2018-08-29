const userReducer = (state = {
        username: '-no one-'
    }, action) => {
        
    console.log('userReducer running', action)
    switch (action.type) {
        case 'CHANGE_USER':
            return Object.assign({}, state, { username: action.payload })

        default:
            break;
    }
    return state;
};

export default userReducer;