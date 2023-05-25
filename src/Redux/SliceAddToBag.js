import { createSlice } from '@reduxjs/toolkit'
import { BookData } from '../BookData'

const initialState = {
  BookData,
}

export const bookDataSlice = createSlice({
  // reducers: {
  //   increment: (state) => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     state.value += 1
  //   },
  //   decrement: (state) => {
  //     state.value -= 1
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload
  //   },

  name: 'dataBook',
  initialState,
  reducers: {
    affiche:(state)=>{state.BookData=state.BookData},

  },
})

// Action creators are generated for each case reducer function
export const {affiche } = bookDataSlice.actions

export default bookDataSlice.reducer