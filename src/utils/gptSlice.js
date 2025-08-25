import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesResult: null,
    moviesNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { moviesResult, moviesNames } = action.payload;
      state.moviesNames = moviesNames;
      state.moviesResult = moviesResult;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;
