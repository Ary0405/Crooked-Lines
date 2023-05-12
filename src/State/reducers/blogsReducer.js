const reducer = (state = 'freewheeler' , action) => {
    if(action.type === 'SET_BLOGS'){
        return action.payload
    } else {
        return state
    }
}
export default reducer;