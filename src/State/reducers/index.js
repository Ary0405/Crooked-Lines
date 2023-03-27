import { combineReducers } from "redux";
import userReducer from "./userReducer";
import phoneReducer from "./phoneReducer"


const reducers = combineReducers({
    user : userReducer,
    phone : phoneReducer
});

export default reducers;
