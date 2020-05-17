import { createSlice } from '@reduxjs/toolkit';
import {
  SET_CURRENT_SPOT,
} from 'utils/constants/reducers';

export const spotSlice = createSlice({
  name: 'spot',
  initialState: {
    uid: null,
  },
  reducers: {
    [SET_CURRENT_SPOT]: (state, action) => {
      state.uid = action.payload.uid;
    },
  },
});

export const { setCurrentSpot } = spotSlice.actions;

export default spotSlice.reducer;
