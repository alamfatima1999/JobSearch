import { combineReducers } from "redux";
import searchJobReducer from "./searchJobReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    searchJobReducer: searchJobReducer,
    filterReducer: filterReducer
});

export default rootReducer;