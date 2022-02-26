import {createSlice} from '@reduxjs/toolkit';

export const beerDataSlice = createSlice({
  name: 'beer',
  initialState: {
    data: false,
    displayedData: false,
    queryType: 'byName',
  },
  reducers: {
    stash: (state, action) => {
      state.data = action.payload;
    },
    display: (state, action) => {
      if (action.payload) {
        state.displayedData = action.payload;
      } else {
        state.displayedData = state.data;
      }
    },
    setQueryType: (state, action) => {
      state.queryType = action.payload;
    },
  },
});

export const {stash, display, setQueryType} = beerDataSlice.actions;

export default beerDataSlice.reducer;

