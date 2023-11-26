import { combineReducers } from "redux";
import { favProductReducer } from "./favProductReducer";
import { cartProductReducer } from "./cartProductReducer";

export const reducer = combineReducers({
    favProductReducer,
    cartProductReducer
})