import { configureStore } from "@reduxjs/toolkit";
import movieoProducer from "./movieoSlide";

export const store = configureStore({
  reducer: {
    movieoData: movieoProducer,
  },
});
