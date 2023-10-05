import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  limit: '10',
  arrayType: 'full',
  cats: {},
  votingCats: {},
  galleryCats: {},
  imgArray: {},
  limitGallery: '10',
  breedGallery: 'all',
  typeGallery: 'all',
  orderGallery: 'ASC',
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
    setLimit: (state, {payload}) => {
      state.limit = payload
    },
    setImgArray: (state, {payload}) => {
      state.imgArray = payload
    },
    setLimitGallery: (state, {payload}) => {
      state.limitGallery = payload
    },
    setTypeGallery: (state, {payload}) => {
      state.typeGallery = payload
    },
    setOrderGallery: (state, {payload}) => {
      state.orderGallery = payload
    },
    setBreedGallery: (state, {payload}) => {
      state.breedGallery = payload
    },
    setBreedId: (state, {payload}) => {
      state.breedId = payload
    },
  },
  extraReducers: {}
})

export const { addCats, addVotingCats, addGalleryCats, changeArrayType, setLimit, setImgArray, setBreedId, setLimitGallery, setTypeGallery, setOrderGallery, setBreedGallery } = catSlice.actions
export default catSlice.reducer
export const getAllCats = (state) => state.cats.cats
export const getVotingCats = (state) => state.cats.votingCats
export const getGalleryCats = (state) => state.cats.galleryCats
export const getArrayType = (state) => state.cats.arrayType
export const getLimit = (state) => state.cats.limit
export const getImgArray = (state) => state.cats.imgArray
export const getBreedId = (state) => state.cats.breedId
export const getOrderGallery = (state) => state.cats.orderGallery
export const getTypeGallery = (state) => state.cats.typeGallery
export const getLimitGallery = (state) => state.cats.limitGallery
export const getBreedGallery = (state) => state.cats.breedGallery