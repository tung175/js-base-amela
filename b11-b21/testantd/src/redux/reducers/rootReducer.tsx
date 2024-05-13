import { Action, combineReducers } from "redux";

import userReducer from "./userReducer";
import { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
});

// Define root state type
export type RootState = ReturnType<typeof rootReducer>;

// Define root action type
export type RootAction = Action<string>;

// Define thunk action type
export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export default rootReducer;