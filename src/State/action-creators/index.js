export const loginUser = (user) => {
    return (dispatch) => {
        dispatch({ type: 'LOGIN_USER', payload: user });
    }
};

export const setPhoneNumbers = (phoneNumbers) => {
    return (dispatch) => {
        dispatch({ type: 'SET_PHONE_NUMBERS', payload: phoneNumbers });
    }
};

export const setBlogs = (blogs) => {
    return (dispatch) => {
        dispatch({ type: 'SET_BLOGS', payload: blogs });
    }
}