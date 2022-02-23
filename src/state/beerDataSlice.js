import { createSlice } from "@reduxjs/toolkit";

export const beerDataSlice = createSlice({
  name: 'beerData',
  initialState: {
    data: {}
  },
  reducers: {
    stash: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { stash} = beerDataSlice.actions

export default beerDataSlice.reducer

