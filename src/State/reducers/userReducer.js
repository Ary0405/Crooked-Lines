const reducer = (state = false , action) => {
    if(action.type === 'LOGIN_USER'){
        return action.payload
    } else {
        return state
    }
}
export default reducer;