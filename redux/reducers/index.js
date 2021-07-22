import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  basketReducer,
  userReducer,
});
