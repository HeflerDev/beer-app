import {createSlice} from '@reduxjs/toolkit';

export const beerDataSlice = createSlice({
  name: 'beer',
  initialState: {
    data: false,
    displayedData: false,
    queryType: '',
  },
  reducers: {
    stash: (state, action) => {
      state.data = action.payload;
    },
    display: (state, action ) => {
      if (action.payload) {
        console.log(action.payload)
        state.displayedData = action.payload;
      } else {
        state.displayedData = state.data;
      }
    },
  },
});

export const {stash, display} = beerDataSlice.actions;

export default beerDataSlice.reducer;

