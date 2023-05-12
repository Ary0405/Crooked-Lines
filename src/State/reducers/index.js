import { combineReducers } from "redux";
import userReducer from "./userReducer";
import phoneReducer from "./phoneReducer"
import blogsReducer from "./blogsReducer"


const reducers = combineReducers({
    user : userReducer,
    phone : phoneReducer,
    blogs : blogsReducer
});

export default reducers;
