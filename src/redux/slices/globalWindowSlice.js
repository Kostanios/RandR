import { createSlice } from '@reduxjs/toolkit';
import {
  SET_GLOBAL_WINDOW_COMPONENT,
  UPDATE_GLOBAL_WINDOW_COMPONENT,
  CLEAR_GLOBAL_WINDOW_COMPONENT
} from 'utils/constants/reducers';

export const globalWindowSlice = createSlice({
  name: 'globalWindow',
  initialState: {
    component: {}
  },
  reducers: {
    [SET_GLOBAL_WINDOW_COMPONENT]: (state, action) => {
      state.component = action.payload;
    },
    [UPDATE_GLOBAL_WINDOW_COMPONENT]: (state, action) => {
      state.component = Object.assign(state.component, action.payload);
    },
    [CLEAR_GLOBAL_WINDOW_COMPONENT]: state => {
      state.component = {}
    }
  },
});

export const { setGlobalWindowComponent, updateGlobalWindowComponent, clearGlobalWindowComponent } = globalWindowSlice.actions;

export default globalWindowSlice.reducer;
