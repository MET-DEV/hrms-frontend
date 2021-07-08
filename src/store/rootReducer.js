import { combineReducers } from "redux";
import favoriReducer from "./reducers/favoriReducer";

const rootReducer=combineReducers({
    favori:favoriReducer
})
export default rootReducer;