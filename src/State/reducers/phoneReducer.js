const reducer = (state = false, action) => {
    if (action.type === 'SET_PHONE_NUMBERS') {
        return action.payload
    } else {
        return state
    }
}

export default reducer;