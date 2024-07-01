import { configureStore } from "@reduxjs/toolkit";
import movieoSlideReducer from "./movieoSlide.jsx";

export const store = configureStore({
  reducer: {
    movieoSlide: movieoSlideReducer, // Sử dụng "movieoSlide" thay vì "movieoData"
  },
});

export default store;
