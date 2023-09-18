import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cats: {}
}

const catSlice = createSlice({
  name: 'cats',
  initialState: initialState,
  reducers: {
    addCats: (state, {payload}) => {
      state.cats = payload
    }
  },
  extraReducers: {}
})

export const { addCats } = catSlice.actions
export default catSlice.reducer
export const getAllCats = (state) => state.cats.cats