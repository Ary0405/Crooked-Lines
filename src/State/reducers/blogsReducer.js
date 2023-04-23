const reducer = (state = 'blogs' , action) => {
    if(action.type === 'SET_BLOGS'){
        return action.payload
    } else {
        return state
    }
}
export default reducer;