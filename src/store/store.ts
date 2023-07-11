//При использовании toolkit нет необходимости устанавливать Thunk
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import userReducer from "./reducers/UserSlice";
import { postAPI } from "../services/PostService";

const rootReducer = combineReducers({
  // userReducer,
  //!ниже для RTKQuery
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    //!ниже для RTKQuery
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
