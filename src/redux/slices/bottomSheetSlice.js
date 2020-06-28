import { createSlice } from '@reduxjs/toolkit';
import {
  SET_BOTTOM_SHEET_COMPONENT,
  UPDATE_BOTTOM_SHEET_COMPONENT,
  CLEAR_BOTTOM_SHEET_COMPONENT,
  SET_BOTTOM_SHEET_POSITION,
} from 'utils/constants/reducers';

export const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState: {
    component: {},
    position: 0,
  },
  reducers: {
    [SET_BOTTOM_SHEET_COMPONENT]: (state, action) => {
      state.component = action.payload;
    },
    [UPDATE_BOTTOM_SHEET_COMPONENT]: (state, action) => {
      state.component = Object.assign(state.component, action.payload);
    },
    [CLEAR_BOTTOM_SHEET_COMPONENT]: (state) => {
      state.component = {};
      state.position = 0;
    },
    [SET_BOTTOM_SHEET_POSITION]: (state, action) => {
      state.position = action.payload;
    },
  },
});

export const {
  setBottomSheetComponent,
  updateBottomSheetComponent,
  clearBottomSheetComponent,
  setBottomSheetPosition,
} = bottomSheetSlice.actions;

export default bottomSheetSlice.reducer;
