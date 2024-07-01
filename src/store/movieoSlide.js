import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURL: "",
};

export const movieoSlide = createSlice({
  name: "movie", 
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageURL: (state, action)=>{
      state.imageURL = action.payload
    }
  },
});

export const { setBannerData, setImageURL } = movieoSlide.actions;

export default movieoSlide.reducer;
