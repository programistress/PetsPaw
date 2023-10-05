import { configureStore } from "@reduxjs/toolkit"
import catReducer from "./cats/catSlice"


export const store = configureStore({
  reducer: {
    cats: catReducer,
  }
})