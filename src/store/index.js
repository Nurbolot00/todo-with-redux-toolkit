import { combineReducers, createStore } from "redux";
import { authSlice } from "./auth/AuthSlice";
import { todoSlice } from "./todo-reducer/TodoSlice";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  auth: authSlice.reducer,
});

export const store = createStore(rootReducer);
