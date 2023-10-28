import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: "10",
  searchArray: [],
};

const catSlice = createSlice({
  name: "cats",
  initialState: initialState,
  reducers: {
    setLimit: (state, { payload }) => {
      state.limit = payload;
    },
    setSearchArray: (state, { payload }) => {
      state.searchArray = payload;
    },
  },
  extraReducers: {},
});

export const { setLimit, setSearchArray } = catSlice.actions;
export default catSlice.reducer;
export const getLimit = (state) => state.cats.limit;
export const getSearchArray = (state) => state.cats.searchArray;
