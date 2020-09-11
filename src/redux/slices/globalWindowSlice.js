import { createSlice } from '@reduxjs/toolkit';
import {
  SET_GLOBAL_WINDOW_COMPONENT,
  UPDATE_GLOBAL_WINDOW_COMPONENT,
  CLEAR_GLOBAL_WINDOW_COMPONENT,
  SET_GLOBAL_WINDOW_PARAMS,
  SET_GALERY_COMPONENT_LIMIT,
} from 'utils/constants/reducers';

export const globalWindowSlice = createSlice({
  name: 'globalWindow',
  initialState: {
    component: {},
    navigateBeforeClose: null,
    modalView: false,
    galeryComponentLimit: 4,
  },
  reducers: {
    [SET_GLOBAL_WINDOW_COMPONENT]: (state, action) => {
      state.component = action.payload;
    },
    [UPDATE_GLOBAL_WINDOW_COMPONENT]: (state, action) => {
      state.component = Object.assign(state.component, action.payload);
    },
    [CLEAR_GLOBAL_WINDOW_COMPONENT]: (state) => {
      state.component = {};
      state.navigateBeforeClose = null;
    },
    [SET_GLOBAL_WINDOW_PARAMS]: (state, action) => {
      state.navigateBeforeClose = action.payload.navigateBeforeClose;
      state.modalView = action.payload.modalView;
    },
    [SET_GALERY_COMPONENT_LIMIT]: (state, action) => {
      state.galeryComponentLimit = action.payload.galeryComponentLimit;
    },
  },
});

export const {
  setGlobalWindowComponent,
  updateGlobalWindowComponent,
  clearGlobalWindowComponent,
  setGlobalWindowParams,
  setGaleryComponentLimit,
} = globalWindowSlice.actions;

export default globalWindowSlice.reducer;
