import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  limit: '10',
  arrayType: 'full',
  arrayTypeGallery: 'full',
  cats: {},
  votingCats: {},
  galleryCats: {},
  imgArray: {},
  imgArrayGallery: {},
  limitGallery: '10',
  savedLimit: '10',
  breedGallery: 'all',
  orderGallery: 'ASC',
  searchArray: [],
  breedId: ''
}

const catSlice = createSlice({
  name: 'cats',
  initialState: initialState,
  reducers: {
    addCats: (state, {payload}) => {
      state.cats = payload
    },
    addVotingCats: (state, {payload}) => {
      state.votingCats = payload
    },
    addGalleryCats: (state, {payload}) => {
      state.galleryCats = payload
    },
    changeArrayType: (state, {payload}) => {
      state.arrayType = payload
    },
    changeArrayTypeGallery: (state, {payload}) => {
      state.arrayTypeGallery = payload
    },
    setLimit: (state, {payload}) => {
      state.limit = payload
    },
    setSavedLimit: (state, {payload}) => {
      state.savedLimit = payload
    },
    setImgArray: (state, {payload}) => {
      state.imgArray = payload
    },
    setSearchArray: (state, {payload}) => {
      state.searchArray = payload
    },
    setBreedId: (state, {payload}) => {
      state.breedId = payload
    },
  },
  extraReducers: {}
})

export const { addCats, addVotingCats, setBreedId, addGalleryCats, changeArrayType, setLimit, setImgArray, setSearchArray } = catSlice.actions
export default catSlice.reducer
export const getAllCats = (state) => state.cats.cats
export const getVotingCats = (state) => state.cats.votingCats
export const getGalleryCats = (state) => state.cats.galleryCats
export const getArrayType = (state) => state.cats.arrayType
export const getLimit = (state) => state.cats.limit
export const getImgArray = (state) => state.cats.imgArray
export const getSearchArray = (state) => state.cats.searchArray
export const getBreedId = (state) => state.cats.breedId
