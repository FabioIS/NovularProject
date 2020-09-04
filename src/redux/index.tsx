import {combineReducers} from "redux";
import {userReducer} from "./user/reducer";


export const appReducers = combineReducers({userReducer});
