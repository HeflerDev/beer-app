import {createSlice} from '@reduxjs/toolkit';

export const beerDataSlice = createSlice({
  name: 'beer',
  initialState: {
    data: {},
    displayedData: false,
  },
  reducers: {
    stash: (state, action) => {
      state.data = action.payload;
    },
    display: (state, action = '') => {
      switch (action) {
        case 'orded':
          break;
        default:
          state.displayedData = state.data;
          break;
      }
    },
  },
});

export const {stash, display} = beerDataSlice.actions;

export default beerDataSlice.reducer;

