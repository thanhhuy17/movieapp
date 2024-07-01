import { configureStore } from "@reduxjs/toolkit";
import movieoSlide from "./movieoSlide";


export const store = configureStore({
  reducer: {
    movie: movieoSlide,
  },
});

export default store;
