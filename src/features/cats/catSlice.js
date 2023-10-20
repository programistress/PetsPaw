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
  breedId: '',
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
    setImgArrayGallery: (state, {payload}) => {
      state.imgArrayGallery = payload
    },
    setLimitGallery: (state, {payload}) => {
      state.limitGallery = payload
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

export const { addCats, addVotingCats, addGalleryCats, changeArrayType, changeArrayTypeGallery, setLimit, setSavedLimit, setImgArray, setImgArrayGallery, setBreedId, setLimitGallery, setOrderGallery, setBreedGallery } = catSlice.actions
export default catSlice.reducer
export const getAllCats = (state) => state.cats.cats
export const getVotingCats = (state) => state.cats.votingCats
export const getGalleryCats = (state) => state.cats.galleryCats
export const getArrayType = (state) => state.cats.arrayType
export const getArrayTypeGallery = (state) => state.cats.arrayTypeGallery
export const getLimit = (state) => state.cats.limit
export const getSavedLimit = (state) => state.cats.savedLimit
export const getImgArray = (state) => state.cats.imgArray
export const getImgArrayGallery = (state) => state.cats.imgArrayGallery
export const getBreedId = (state) => state.cats.breedId
export const getOrderGallery = (state) => state.cats.orderGallery
export const getLimitGallery = (state) => state.cats.limitGallery
export const getBreedGallery = (state) => state.cats.breedGallery