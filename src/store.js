import { configureStore } from '@reduxjs/toolkit'
import bookDataReducer  from './Redux/SliceAddToBag'
import amountReducer  from './Redux/SliceAmount'

export const store = configureStore({
  reducer: {
    bookData:bookDataReducer,
    amount:amountReducer,
  },
})