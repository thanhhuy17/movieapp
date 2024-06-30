import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
};

export const movieoSlide = createSlice({
  name: "movieo",
  initialState,
  reducer: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
  },
});

export const { setBannerData } = movieoSlide.actions;

export default movieoSlide.reducer;
