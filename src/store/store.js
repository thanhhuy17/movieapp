import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducers/movie/index";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
