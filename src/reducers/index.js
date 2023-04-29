import { combineReducers } from "redux";
import listReducer from "./listReducer";
import countReducer from "./countReducer";

export default combineReducers({
    lists: listReducer,
    counts: countReducer
})