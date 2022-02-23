import {configureStore} from '@reduxjs/toolkit';
import beerDataReducer from './beerDataSlice';

export default configureStore({
  reducer: {
    beerData: beerDataReducer,
  },
});
