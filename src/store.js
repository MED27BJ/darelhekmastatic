import { configureStore } from '@reduxjs/toolkit'
import bookDataReducer  from './Redux/SliceAddToBag'

export const store = configureStore({
  reducer: {
    bookData:bookDataReducer,
  },
})