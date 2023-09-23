import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  limit: '10',
  arrayType: 'full',
  cats: {},
  imgArray: {},
  breedId: ''
}

const catSlice = createSlice({
  name: 'cats',
  initialState: initialState,
  reducers: {
    addCats: (state, {payload}) => {
      state.cats = payload
    },
    changeArrayType: (state, {payload}) => {
      state.arrayType = payload
    },
    setLimit: (state, {payload}) => {
      state.limit = payload
    },
    setImgArray: (state, {payload}) => {
      state.imgArray = payload
    },
    setBreedId: (state, {payload}) => {
      state.breedId = payload
    },
  },
  extraReducers: {}
})

export const { addCats, changeArrayType, setLimit, setImgArray, setBreedId } = catSlice.actions
export default catSlice.reducer
export const getAllCats = (state) => state.cats.cats
export const getArrayType = (state) => state.cats.arrayType
export const getLimit = (state) => state.cats.limit
export const getImgArray = (state) => state.cats.imgArray
export const getBreedId = (state) => state.cats.breedId