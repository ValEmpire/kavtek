import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from "./reducers";

/**
 *
 * @param {} initialState this will be usefull when preloading state sample when we want to fetch user details before rendering pages
 * @returns configureStore from redux toolkit
 */
export const createStore = (initialState = {}) => {
  return configureStore({
    reducer: combinedReducers,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production",
  });
};
