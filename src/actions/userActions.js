exports.changeUser = (username) => {
    return { type: 'CHANGE_USER', payload: username }
}