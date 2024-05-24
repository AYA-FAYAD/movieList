import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { searchInput: "", selectMovie: "" },
  reducers: {
    displayInputShearch(state, action) {
      state.searchInput = action.payload;
    },
    displaySelectMovie(state, action) {
      state.selectMovie = action.payload;
    },
  },
});

export const { displayInputShearch, displaySelectMovie } = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
